'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface EventCardProps {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
  icon: string;
  featured?: boolean;
}

export default function EventCard({
  title,
  date,
  time,
  location,
  description,
  category,
  icon,
  featured = false,
}: EventCardProps) {
  return (
    <div
      className={`rounded-lg shadow-md hover:shadow-lg transition-all p-6 h-full flex flex-col ${
        featured
          ? 'bg-primary/5 border-2 border-primary'
          : 'bg-card border border-border'
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-3 flex-1">
          <span className="text-3xl">{icon}</span>
          <div>
            {featured && (
              <Badge className="mb-2 bg-primary text-primary-foreground">
                Featured Event
              </Badge>
            )}
            <h3 className="text-lg font-bold text-foreground">{title}</h3>
          </div>
        </div>
        <Badge variant="outline" className="whitespace-nowrap ml-2">
          {category}
        </Badge>
      </div>

      <p className="text-foreground/80 mb-4 flex-grow text-sm">{description}</p>

      <div className="space-y-3 mb-4 bg-foreground/5 rounded p-4">
        <div className="flex items-center gap-2">
          <span className="text-primary font-bold">📅</span>
          <span className="text-sm text-foreground font-medium">{date}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-primary font-bold">🕐</span>
          <span className="text-sm text-foreground font-medium">{time}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-primary font-bold">📍</span>
          <span className="text-sm text-foreground font-medium">{location}</span>
        </div>
      </div>

      <Button className="w-full bg-primary text-primary-foreground hover:bg-red-700">
        Learn More
      </Button>
    </div>
  );
}
