'use client';

import { Badge } from '@/components/ui/badge';

interface ActivityCardProps {
  id: number;
  title: string;
  category: string;
  date: string;
  description: string;
  icon: string;
}

export default function ActivityCard({
  title,
  category,
  date,
  description,
  icon,
}: ActivityCardProps) {
  const categoryColors: { [key: string]: string } = {
    'Press Conference': 'bg-blue-100 text-blue-800',
    'Sports': 'bg-orange-100 text-orange-800',
    'Math & Science Contest': 'bg-green-100 text-green-800',
    'Events': 'bg-purple-100 text-purple-800',
  };

  const categoryColor = categoryColors[category] || 'bg-gray-100 text-gray-800';

  return (
    <div className="bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 h-full flex flex-col">
      <div className="flex items-start gap-4 mb-4">
        <span className="text-4xl">{icon}</span>
        <div className="flex-1">
          <Badge className={categoryColor}>{category}</Badge>
          <h3 className="text-xl font-bold text-foreground mt-2">{title}</h3>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-4">{date}</p>
      <p className="text-foreground/80 flex-grow">{description}</p>
    </div>
  );
}
