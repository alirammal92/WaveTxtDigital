import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import * as schema from "@shared/schema";
import { z } from "zod";
import { db } from "@db";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes prefix
  const apiPrefix = '/api';

  // Quotes endpoint
  app.post(`${apiPrefix}/quotes`, async (req, res) => {
    try {
      const quoteData = schema.quoteFormSchema.parse(req.body);
      const [newQuote] = await db.insert(schema.quotes).values(quoteData).returning();
      
      res.status(201).json({
        message: "Quote request submitted successfully",
        data: newQuote
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      
      console.error('Error creating quote request:', error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Contact form endpoint
  app.post(`${apiPrefix}/contact`, async (req, res) => {
    try {
      const contactData = schema.contactFormSchema.parse(req.body);
      
      // Save the contact form data to the database
      const [newContact] = await db.insert(schema.contacts).values(contactData).returning();
      
      // Import email service
      const { sendContactEmail, sendAutoReplyEmail } = await import('./services/emailService');
      
      // Send notification email to admin
      const emailSent = await sendContactEmail(contactData);
      
      // Send auto-reply email to the user (optional)
      await sendAutoReplyEmail(contactData).catch(err => {
        console.error('Error sending auto-reply email:', err);
        // Continue even if auto-reply fails
      });
      
      res.status(201).json({
        message: emailSent 
          ? "Contact message sent successfully" 
          : "Contact saved but email delivery failed",
        data: newContact
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      
      console.error('Error sending contact message:', error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Subscription endpoint
  app.post(`${apiPrefix}/subscribe`, async (req, res) => {
    try {
      const subscriptionData = schema.subscriptionSchema.parse(req.body);
      
      // Check if email already exists
      const existingSubscription = await db.query.subscriptions.findFirst({
        where: (subscriptions, { eq }) => eq(subscriptions.email, subscriptionData.email)
      });
      
      if (existingSubscription) {
        return res.status(400).json({ 
          message: "Email already subscribed" 
        });
      }
      
      const [newSubscription] = await db.insert(schema.subscriptions)
        .values(subscriptionData)
        .returning();
      
      res.status(201).json({
        message: "Subscription successful",
        data: newSubscription
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      
      console.error('Error creating subscription:', error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get blog posts
  app.get(`${apiPrefix}/blog`, (req, res) => {
    try {
      // This would typically come from the database
      // For now, we're using mock data that would be loaded from the database
      const blogPosts = storage.getBlogPosts();
      res.json(blogPosts);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
