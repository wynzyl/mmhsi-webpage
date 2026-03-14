'use client';

import { Badge } from '@/components/ui/badge';

interface GraduateCardProps {
  id: number;
  name: string;
  graduationYear: number;
  university: string;
  course: string;
  achievement: string;
}

export default function GraduateCard({
  name,
  graduationYear,
  university,
  course,
  achievement,
}: GraduateCardProps) {
  return (
    <div className="bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-foreground">{name}</h3>
        <Badge variant="default" className="bg-primary text-primary-foreground">
          {graduationYear}
        </Badge>
      </div>
      
      <div className="space-y-3 flex-grow">
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wide">University</p>
          <p className="text-foreground font-semibold">{university}</p>
        </div>
        
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wide">Course</p>
          <p className="text-foreground">{course}</p>
        </div>
        
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wide">Achievement</p>
          <p className="text-foreground text-sm">{achievement}</p>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-border">
        <p className="text-xs text-muted-foreground">
          🎓 Class of {graduationYear}
        </p>
      </div>
    </div>
  );
}
