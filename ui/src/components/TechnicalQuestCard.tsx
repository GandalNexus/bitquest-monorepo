import { Quest } from '../types/quest';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Zap, Lock } from 'lucide-react';

interface TechnicalQuestCardProps {
  quest: Quest;
  isLocked: boolean;
  isCompleted: boolean;
  onStartQuest: (quest: Quest) => void;
}

export function TechnicalQuestCard({ quest, isLocked, isCompleted, onStartQuest }: TechnicalQuestCardProps) {
  const getDifficultyColor = () => {
    switch (quest.difficulty) {
      case 'beginner': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'intermediate': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'advanced': return 'bg-red-500/20 text-red-300 border-red-500/30';
    }
  };

  const getDifficultyLabel = () => {
    switch (quest.difficulty) {
      case 'beginner': return 'Débutant';
      case 'intermediate': return 'Intermédiaire';
      case 'advanced': return 'Avancé';
    }
  };

  return (
    <Card className={`p-6 bg-gradient-to-br hover:shadow-xl transition-all duration-300 ${
      isLocked 
        ? 'from-gray-900/50 to-gray-800/50 border-gray-700/50 opacity-70' 
        : isCompleted
        ? 'from-green-900/30 to-green-800/30 border-green-500/30'
        : 'from-purple-900/30 to-purple-800/30 border-purple-500/30 hover:border-purple-400/50'
    }`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Badge className={getDifficultyColor()}>
              {getDifficultyLabel()}
            </Badge>
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
              Pratique
            </Badge>
            {quest.externalLink && (
              <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                <ExternalLink className="w-3 h-3 mr-1" />
                {quest.externalLink.platform}
              </Badge>
            )}
          </div>
          
          <h3 className="m-0 mb-2 text-white flex items-center gap-2">
            {isLocked && <Lock className="w-4 h-4 text-gray-400" />}
            {quest.title}
          </h3>
          
          <p className="m-0 text-sm text-gray-300 mb-3">
            {quest.description}
          </p>

          {quest.externalLink && !isLocked && (
            <div className="p-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-lg mb-3">
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <ExternalLink className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <p className="m-0 text-sm text-blue-300 mb-1">
                    🔬 Exercice pratique sur {quest.externalLink.platform}
                  </p>
                  <p className="m-0 text-xs text-gray-400">
                    {quest.externalLink.instructions}
                  </p>
                </div>
              </div>
            </div>
          )}

          {quest.walletRequirement && (
            <div className="flex items-center gap-2 text-xs text-yellow-400 mb-3">
              <Zap className="w-4 h-4" />
              {quest.walletRequirement.minBalance && (
                <span>Solde minimum requis: {quest.walletRequirement.minBalance} BTC</span>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="text-orange-400 text-lg">+{quest.points}</div>
            <div className="text-xs text-gray-400">Points</div>
          </div>
          <div className="text-center">
            <div className="text-purple-400 text-lg">{quest.questions.length}</div>
            <div className="text-xs text-gray-400">Questions</div>
          </div>
        </div>

        {isCompleted ? (
          <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
            ✓ Complétée
          </Badge>
        ) : isLocked ? (
          <Button disabled className="bg-gray-700 cursor-not-allowed">
            <Lock className="w-4 h-4 mr-2" />
            Verrouillée
          </Button>
        ) : (
          <div className="flex gap-2">
            {quest.externalLink && (
              <Button
                onClick={() => window.open(quest.externalLink!.url, '_blank')}
                variant="outline"
                className="border-blue-500/30 text-blue-300 hover:bg-blue-500/20"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Ouvrir Lab
              </Button>
            )}
            <Button
              onClick={() => onStartQuest(quest)}
              className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white"
            >
              Commencer
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
}
