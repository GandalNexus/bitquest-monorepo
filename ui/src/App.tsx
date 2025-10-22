import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuestCard } from './components/QuestCard';
import { TechnicalQuestCard } from './components/TechnicalQuestCard';
import { QuestModal } from './components/QuestModal';
import { BadgeDisplay } from './components/BadgeDisplay';
import { AuthPage } from './components/AuthPage';
import { LandingPage } from './components/LandingPage';
import { ThemeProvider } from './components/ThemeProvider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Toaster } from './components/ui/sonner';
import { quests, badges } from './data/quests';
import { Quest, User } from './types/quest';
import {
  createUser,
  loginUser,
  getCurrentUser,
  setCurrentUser,
  logoutUser,
  updateUser,
  addBTCReward,
} from './utils/auth';
import { toast } from 'sonner@2.0.3';

export default function App() {
  const [currentUser, setUser] = useState<User | null>(null);
  const [selectedQuest, setSelectedQuest] = useState<Quest | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showAuth, setShowAuth] = useState(false);

  // Check for logged in user on mount
  useEffect(() => {
    const user = getCurrentUser();
    setUser(user);
    setIsLoading(false);
  }, []);

  const handleLogin = (email: string, password: string) => {
    const user = loginUser(email, password);
    if (user) {
      setCurrentUser(user);
      setUser(user);
      toast.success(`Bienvenue ${user.username} !`);
    } else {
      toast.error('Email ou mot de passe incorrect');
    }
  };

  const handleSignup = (email: string, username: string, password: string) => {
    const user = createUser(email, username, password);
    if (user) {
      setCurrentUser(user);
      setUser(user);
      toast.success(`Compte créé avec succès ! Votre wallet a été généré.`);
    } else {
      toast.error('Cet email est déjà utilisé');
    }
  };

  const handleLogout = () => {
    logoutUser();
    setUser(null);
    toast.info('Vous êtes déconnecté');
  };

  const handleQuestComplete = (questId: string, points: number) => {
    if (!currentUser) return;

    // Update progress
    const newCompletedQuests = currentUser.progress.completedQuests.includes(questId)
      ? currentUser.progress.completedQuests
      : [...currentUser.progress.completedQuests, questId];

    const newTotalPoints = currentUser.progress.totalPoints + points;

    // Check which badges to unlock
    const newBadges = badges
      .filter(badge => {
        if (currentUser.progress.badges.includes(badge.id)) return false;

        if (badge.id === 'first-steps' && newCompletedQuests.length >= 1) return true;
        if (badge.id === 'bitcoin-explorer' && newCompletedQuests.length >= 3) return true;
        if (badge.id === 'crypto-master' && newCompletedQuests.length >= 7) return true;
        if (badge.id === 'point-collector' && newTotalPoints >= 500) return true;
        if (badge.id === 'bitcoin-expert' && newTotalPoints >= 1000) return true;

        return false;
      })
      .map(badge => badge.id);

    const updatedProgress = {
      ...currentUser.progress,
      completedQuests: newCompletedQuests,
      totalPoints: newTotalPoints,
      badges: [...currentUser.progress.badges, ...newBadges],
    };

    // Calculate BTC reward (small amounts for demo)
    const btcReward = points * 0.00000001; // 1 satoshi per point
    
    // Update user with new progress
    let updatedUser = {
      ...currentUser,
      progress: updatedProgress,
    };

    // Add BTC reward
    updatedUser = addBTCReward(updatedUser, btcReward, `Récompense pour "${quests.find(q => q.id === questId)?.title}"`);
    setUser(updatedUser);

    // Show notifications
    toast.success(`+${points} points gagnés ! +${btcReward.toFixed(8)} BTC`);
    
    if (newBadges.length > 0) {
      newBadges.forEach(badgeId => {
        const badge = badges.find(b => b.id === badgeId);
        if (badge) {
          toast.success(`🏆 Nouveau badge débloqué : ${badge.name}`, {
            duration: 5000,
          });
        }
      });
    }
  };

  const handleStartQuest = (quest: Quest) => {
    setSelectedQuest(quest);
    setIsModalOpen(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center mx-auto mb-4 shadow-2xl shadow-orange-500/50 animate-pulse">
            <span className="text-3xl">₿</span>
          </div>
          <p className="m-0 text-muted-foreground">Chargement...</p>
        </div>
      </div>
    );
  }

  // Show landing page if not authenticated and auth not requested
  if (!currentUser && !showAuth) {
    return (
      <ThemeProvider defaultTheme="dark">
        <LandingPage onGetStarted={() => setShowAuth(true)} />
      </ThemeProvider>
    );
  }

  // Show auth page if not logged in
  if (!currentUser) {
    return (
      <ThemeProvider defaultTheme="dark">
        <AuthPage 
          onLogin={handleLogin} 
          onSignup={handleSignup}
          onBack={() => setShowAuth(false)}
        />
      </ThemeProvider>
    );
  }

  // Filter quests by type
  const theoreticalQuests = quests.filter(q => q.type === 'theoretical');
  const technicalQuests = quests.filter(q => q.type === 'technical');

  const beginnerQuests = quests.filter(q => q.difficulty === 'beginner');
  const intermediateQuests = quests.filter(q => q.difficulty === 'intermediate');
  const advancedQuests = quests.filter(q => q.difficulty === 'advanced');

  const isQuestLocked = (quest: Quest) => {
    if (quest.difficulty === 'beginner') return false;
    if (quest.difficulty === 'intermediate') {
      return !beginnerQuests.every(q => currentUser.progress.completedQuests.includes(q.id));
    }
    if (quest.difficulty === 'advanced') {
      return !intermediateQuests.every(q => currentUser.progress.completedQuests.includes(q.id));
    }
    return false;
  };

  return (
    <ThemeProvider defaultTheme="dark">
      <Toaster position="top-right" richColors />
      <div className="min-h-screen bg-background">
        <Header user={currentUser} onLogout={handleLogout} />

        <Hero user={currentUser} />

        <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="quests" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="quests">Quêtes</TabsTrigger>
            <TabsTrigger value="badges">Badges</TabsTrigger>
          </TabsList>

          <TabsContent value="quests" className="space-y-12">
            {/* Theoretical Quests Section */}
            <div>
              <div className="mb-8 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 mb-4">
                  <span>📚</span>
                  <span>Quêtes Théoriques</span>
                </div>
                <h2 className="m-0 mb-2">Apprenez les Fondamentaux du Bitcoin</h2>
                <p className="m-0 text-muted-foreground">
                  Découvrez Bitcoin à travers des quiz interactifs organisés par niveau de difficulté
                </p>
              </div>

              {/* Beginner Quests */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <span>🌱</span>
                  </div>
                  <h3 className="m-0">Niveau Débutant</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {theoreticalQuests.filter(q => q.difficulty === 'beginner').map(quest => (
                    <QuestCard
                      key={quest.id}
                      quest={quest}
                      isCompleted={currentUser.progress.completedQuests.includes(quest.id)}
                      isLocked={false}
                      onStart={() => handleStartQuest(quest)}
                      walletBalance={currentUser.wallet.balance}
                    />
                  ))}
                </div>
              </div>

              {/* Intermediate Quests */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                    <span>🔥</span>
                  </div>
                  <h3 className="m-0">Niveau Intermédiaire</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {theoreticalQuests.filter(q => q.difficulty === 'intermediate').map(quest => (
                    <QuestCard
                      key={quest.id}
                      quest={quest}
                      isCompleted={currentUser.progress.completedQuests.includes(quest.id)}
                      isLocked={isQuestLocked(quest)}
                      onStart={() => handleStartQuest(quest)}
                      walletBalance={currentUser.wallet.balance}
                    />
                  ))}
                </div>
              </div>

              {/* Advanced Quests */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <span>💎</span>
                  </div>
                  <h3 className="m-0">Niveau Avancé</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {theoreticalQuests.filter(q => q.difficulty === 'advanced').map(quest => (
                    <QuestCard
                      key={quest.id}
                      quest={quest}
                      isCompleted={currentUser.progress.completedQuests.includes(quest.id)}
                      isLocked={isQuestLocked(quest)}
                      onStart={() => handleStartQuest(quest)}
                      walletBalance={currentUser.wallet.balance}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Technical Quests Section */}
            <div className="pt-12 border-t border-border">
              <div className="mb-8 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 mb-4">
                  <span>⚡</span>
                  <span>Quêtes Techniques</span>
                </div>
                <h2 className="m-0 mb-2">Mettez en Pratique vos Connaissances</h2>
                <p className="m-0 text-muted-foreground">
                  Utilisez Bitcoin Lab pour créer, tester et explorer le réseau Bitcoin de manière pratique
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {technicalQuests.map(quest => (
                  <TechnicalQuestCard
                    key={quest.id}
                    quest={quest}
                    isCompleted={currentUser.progress.completedQuests.includes(quest.id)}
                    isLocked={isQuestLocked(quest)}
                    onStartQuest={handleStartQuest}
                  />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="badges">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6 text-center">
                <h2 className="m-0 mb-2">Vos Accomplissements</h2>
                <p className="m-0 text-muted-foreground">
                  Collectionnez des badges en complétant des quêtes et en gagnant des points
                </p>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {badges.map(badge => {
                  const isUnlocked = currentUser.progress.badges.includes(badge.id);
                  let currentValue = 0;

                  if (badge.id.includes('steps') || badge.id.includes('explorer') || badge.id.includes('master')) {
                    currentValue = currentUser.progress.completedQuests.length;
                  } else {
                    currentValue = currentUser.progress.totalPoints;
                  }

                  return (
                    <BadgeDisplay
                      key={badge.id}
                      badge={badge}
                      isUnlocked={isUnlocked}
                      currentValue={currentValue}
                    />
                  );
                })}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <QuestModal
        quest={selectedQuest}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedQuest(null);
        }}
        onComplete={handleQuestComplete}
      />

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p className="m-0">
              Bitcoin Quest - Apprenez Bitcoin de manière interactive et amusante
            </p>
            <p className="m-0 text-sm mt-2">
              Propulsé par la passion pour l'éducation Bitcoin
            </p>
          </div>
        </div>
      </footer>
      </div>
    </ThemeProvider>
  );
}
