import { Quest } from '../types/quest';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { CheckCircle2, Lock, Play, Wallet } from 'lucide-react';

interface QuestCardProps {
  quest: Quest;
  isCompleted: boolean;
  isLocked: boolean;
  onStart: () => void;
  walletBalance?: number;
}

export function QuestCard({ quest, isCompleted, isLocked, onStart, walletBalance = 0 }: QuestCardProps) {
  const difficultyColors = {
    beginner: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    intermediate: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
    advanced: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  };

  const difficultyLabels = {
    beginner: 'Débutant',
    intermediate: 'Intermédiaire',
    advanced: 'Avancé',
  };

  // Check wallet requirements
  const walletRequirementMet = !quest.walletRequirement || 
    (quest.walletRequirement.minBalance ? walletBalance >= quest.walletRequirement.minBalance : true);

  const effectivelyLocked = isLocked || !walletRequirementMet;

  return (
    <Card className={`relative transition-all hover:shadow-lg ${effectivelyLocked ? 'opacity-60' : ''} ${isCompleted ? 'border-green-500' : ''}`}>
      {isCompleted && (
        <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-1">
          <CheckCircle2 className="w-5 h-5" />
        </div>
      )}
      
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="m-0">{quest.title}</CardTitle>
          <Badge className={difficultyColors[quest.difficulty]}>
            {difficultyLabels[quest.difficulty]}
          </Badge>
        </div>
        <CardDescription className="m-0">{quest.description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <span>📚</span>
              <span>{quest.questions.length} questions</span>
            </div>
            <div className="flex items-center gap-1">
              <span>⭐</span>
              <span>{quest.points} points</span>
            </div>
          </div>
          
          {quest.walletRequirement && (
            <div className={`flex items-center gap-2 text-sm p-2 rounded-lg ${
              walletRequirementMet 
                ? 'bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-400' 
                : 'bg-orange-50 dark:bg-orange-950/30 text-orange-700 dark:text-orange-400'
            }`}>
              <Wallet className="w-4 h-4" />
              <span>
                {quest.walletRequirement.minBalance && 
                  `Requiert: ${quest.walletRequirement.minBalance.toFixed(8)} BTC`}
              </span>
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter>
        <Button 
          onClick={onStart} 
          disabled={effectivelyLocked}
          className="w-full"
          variant={isCompleted ? "outline" : "default"}
        >
          {effectivelyLocked ? (
            <>
              <Lock className="w-4 h-4 mr-2" />
              {!walletRequirementMet ? 'Solde insuffisant' : 'Verrouillé'}
            </>
          ) : isCompleted ? (
            <>
              <CheckCircle2 className="w-4 h-4 mr-2" />
              Refaire
            </>
          ) : (
            <>
              <Play className="w-4 h-4 mr-2" />
              Commencer
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
