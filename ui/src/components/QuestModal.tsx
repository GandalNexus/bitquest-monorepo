import { useState } from 'react';
import { Quest, Question } from '../types/quest';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { CheckCircle2, XCircle, ChevronRight } from 'lucide-react';

interface QuestModalProps {
  quest: Quest | null;
  isOpen: boolean;
  onClose: () => void;
  onComplete: (questId: string, points: number) => void;
}

export function QuestModal({ quest, isOpen, onClose, onComplete }: QuestModalProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  if (!quest) return null;

  const currentQuestion: Question = quest.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quest.questions.length) * 100;
  const isLastQuestion = currentQuestionIndex === quest.questions.length - 1;
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

  const handleAnswerSelect = (index: number) => {
    if (showExplanation) return;
    setSelectedAnswer(index);
    setShowExplanation(true);
    
    if (index === currentQuestion.correctAnswer) {
      setCorrectAnswers(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (isLastQuestion) {
      const earnedPoints = Math.round((correctAnswers / quest.questions.length) * quest.points);
      setIsCompleted(true);
      if (correctAnswers >= quest.questions.length * 0.7) {
        onComplete(quest.id, earnedPoints);
      }
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handleClose = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setCorrectAnswers(0);
    setIsCompleted(false);
    onClose();
  };

  const earnedPoints = Math.round((correctAnswers / quest.questions.length) * quest.points);
  const passed = correctAnswers >= quest.questions.length * 0.7;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        {!isCompleted ? (
          <>
            <DialogHeader>
              <DialogTitle className="m-0">{quest.title}</DialogTitle>
              <DialogDescription className="m-0">
                Question {currentQuestionIndex + 1} sur {quest.questions.length}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6 py-4">
              <Progress value={progress} className="w-full" />

              <div className="space-y-4">
                <h3 className="m-0">{currentQuestion.question}</h3>

                <div className="space-y-3">
                  {currentQuestion.options.map((option, index) => {
                    const isSelected = selectedAnswer === index;
                    const isCorrectAnswer = index === currentQuestion.correctAnswer;
                    
                    let buttonClass = 'w-full justify-start text-left h-auto py-4 px-4';
                    
                    if (showExplanation) {
                      if (isCorrectAnswer) {
                        buttonClass += ' bg-green-100 dark:bg-green-900/30 border-green-500 hover:bg-green-100 dark:hover:bg-green-900/30';
                      } else if (isSelected && !isCorrect) {
                        buttonClass += ' bg-red-100 dark:bg-red-900/30 border-red-500 hover:bg-red-100 dark:hover:bg-red-900/30';
                      }
                    }

                    return (
                      <Button
                        key={index}
                        variant={isSelected && !showExplanation ? "default" : "outline"}
                        className={buttonClass}
                        onClick={() => handleAnswerSelect(index)}
                        disabled={showExplanation}
                      >
                        <div className="flex items-center justify-between w-full gap-3">
                          <span>{option}</span>
                          {showExplanation && (
                            <>
                              {isCorrectAnswer && (
                                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 shrink-0" />
                              )}
                              {isSelected && !isCorrect && (
                                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0" />
                              )}
                            </>
                          )}
                        </div>
                      </Button>
                    );
                  })}
                </div>

                {showExplanation && (
                  <div className={`p-4 rounded-lg ${isCorrect ? 'bg-green-50 dark:bg-green-900/20' : 'bg-orange-50 dark:bg-orange-900/20'}`}>
                    <p className="m-0">
                      <span className="mr-2">💡</span>
                      {currentQuestion.explanation}
                    </p>
                  </div>
                )}
              </div>

              {showExplanation && (
                <div className="flex justify-end">
                  <Button onClick={handleNext}>
                    {isLastQuestion ? 'Voir les résultats' : 'Question suivante'}
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="m-0">
                {passed ? '🎉 Félicitations!' : '📚 Continuez à apprendre!'}
              </DialogTitle>
              <DialogDescription className="m-0">
                Vous avez terminé la quête
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6 py-4">
              <div className="text-center space-y-4">
                <div className="text-6xl">
                  {passed ? '🏆' : '📖'}
                </div>
                
                <div className="space-y-2">
                  <p className="m-0">
                    Score: {correctAnswers} / {quest.questions.length}
                  </p>
                  <p className="m-0">
                    Points gagnés: <span className="text-orange-600 dark:text-orange-400">{passed ? earnedPoints : 0}</span>
                  </p>
                </div>

                {!passed && (
                  <p className="m-0 text-muted-foreground">
                    Il vous faut au moins {Math.ceil(quest.questions.length * 0.7)} bonnes réponses pour valider cette quête.
                  </p>
                )}
              </div>

              <div className="flex gap-3">
                <Button variant="outline" onClick={handleClose} className="flex-1">
                  Fermer
                </Button>
                <Button onClick={() => {
                  setCurrentQuestionIndex(0);
                  setSelectedAnswer(null);
                  setShowExplanation(false);
                  setCorrectAnswers(0);
                  setIsCompleted(false);
                }} className="flex-1">
                  Réessayer
                </Button>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
