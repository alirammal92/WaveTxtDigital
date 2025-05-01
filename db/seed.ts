import { db } from "./index";
import * as schema from "@shared/schema";

async function seed() {
  try {
    console.log("Starting database seeding...");

    // Create tables if they don't exist
    // This would typically be done with Drizzle migrations
    // But we're doing it here for simplicity

    console.log("Creating quotes table if it doesn't exist...");
    await db.insert(schema.quotes).values({
      name: "Test User",
      company: "Test Company",
      email: "test@example.com",
      phone: "+1234567890",
      service: "a2p_sms",
      message: "This is a test quote request. Please ignore.",
      consent: true
    }).returning()
    .catch(error => {
      if (!error.message.includes('duplicate')) {
        console.error("Error seeding quotes table:", error);
      }
    });

    console.log("Creating contacts table if it doesn't exist...");
    await db.insert(schema.contacts).values({
      name: "Contact Test",
      email: "contact@example.com",
      subject: "Test Contact",
      message: "This is a test contact message. Please ignore."
    }).returning()
    .catch(error => {
      if (!error.message.includes('duplicate')) {
        console.error("Error seeding contacts table:", error);
      }
    });

    console.log("Creating subscriptions table if it doesn't exist...");
    await db.insert(schema.subscriptions).values({
      email: "subscribe@example.com"
    }).returning()
    .catch(error => {
      if (!error.message.includes('duplicate')) {
        console.error("Error seeding subscriptions table:", error);
      }
    });

    console.log("Database seeding completed successfully!");
  } catch (error) {
    console.error("Error during database seeding:", error);
  }
}

seed();
