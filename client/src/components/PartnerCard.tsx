interface PartnerCardProps {
  id: number;
  large?: boolean;
}

export default function PartnerCard({ id, large = false }: PartnerCardProps) {
  return (
    <div className={`grayscale hover:grayscale-0 transition-all ${large ? 'p-4' : ''}`}>
      <div className={`${large ? 'h-24 w-48' : 'h-12 w-24'} bg-wavegray-100 rounded flex items-center justify-center text-wavegray-500`}>
        Partner {id}
      </div>
    </div>
  );
}
