'use client';

import { Badge } from '@/components/ui/badge';

interface PostCardProps {
  id: number;
  title: string;
  date: string;
  description: string;
  studentName: string;
  examType: string;
  score?: string;
}

export default function PostCard({
  title,
  date,
  description,
  studentName,
  examType,
  score,
}: PostCardProps) {
  return (
    <div className="bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 h-full flex flex-col border-l-4 border-primary">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{date}</p>
        </div>
        <Badge className="bg-primary text-primary-foreground">
          {examType}
        </Badge>
      </div>

      <p className="text-foreground/80 mb-4 flex-grow">{description}</p>

      <div className="bg-primary/5 rounded p-4 space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-primary font-bold">✓</span>
          <span className="text-foreground font-semibold">{studentName}</span>
        </div>
        {score && (
          <div className="flex items-center gap-2">
            <span className="text-primary font-bold">Score:</span>
            <span className="text-foreground font-semibold">{score}</span>
          </div>
        )}
      </div>
    </div>
  );
}
