'use client';

interface FacilityCardProps {
  id: number;
  name: string;
  icon: string;
  description: string;
  features: string[];
  capacity?: string;
}

export default function FacilityCard({
  name,
  icon,
  description,
  features,
  capacity,
}: FacilityCardProps) {
  return (
    <div className="bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden h-full flex flex-col">
      <div className="bg-primary/10 p-8 flex items-center justify-center">
        <span className="text-6xl">{icon}</span>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
        <p className="text-foreground/80 mb-4 text-sm">{description}</p>

        <div className="mb-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold mb-2">
            Key Features
          </p>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="text-sm text-foreground flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {capacity && (
          <div className="mt-auto pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">Capacity:</span> {capacity}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
