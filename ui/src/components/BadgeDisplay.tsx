import { Badge } from '../types/quest';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { CheckCircle2, Lock } from 'lucide-react';

interface BadgeDisplayProps {
  badge: Badge;
  isUnlocked: boolean;
  currentValue: number;
}

export function BadgeDisplay({ badge, isUnlocked, currentValue }: BadgeDisplayProps) {
  const progress = Math.min((currentValue / badge.requirement) * 100, 100);

  return (
    <Card className={`relative ${isUnlocked ? 'border-yellow-500' : 'opacity-60'}`}>
      {isUnlocked && (
        <div className="absolute -top-2 -right-2 bg-yellow-500 text-white rounded-full p-1">
          <CheckCircle2 className="w-4 h-4" />
        </div>
      )}
      
      <CardHeader className="text-center pb-3">
        <div className="text-4xl mb-2">
          {isUnlocked ? badge.icon : <Lock className="w-10 h-10 mx-auto text-muted-foreground" />}
        </div>
        <CardTitle className="m-0 text-base">{badge.name}</CardTitle>
      </CardHeader>
      
      <CardContent className="pt-0">
        <CardDescription className="m-0 text-center text-sm">
          {badge.description}
        </CardDescription>
        
        {!isUnlocked && (
          <div className="mt-3 space-y-1">
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-orange-500 h-2 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="m-0 text-xs text-center text-muted-foreground">
              {currentValue} / {badge.requirement}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
