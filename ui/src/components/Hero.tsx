import { User } from '../types/quest';
import { WalletCard } from './WalletCard';

interface HeroProps {
  user: User;
}

export function Hero({ user }: HeroProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Welcome Section */}
          <div className="space-y-6">
            <div>
              <h2 className="m-0 mb-2">Tableau de bord</h2>
              <p className="m-0 text-muted-foreground">
                Suivez votre progression et gérez votre wallet Bitcoin
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-card border border-border">
                <p className="m-0 text-sm text-muted-foreground mb-1">Points totaux</p>
                <p className="m-0 text-2xl text-orange-600 dark:text-orange-400">
                  {user.progress.totalPoints}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <p className="m-0 text-sm text-muted-foreground mb-1">Quêtes complétées</p>
                <p className="m-0 text-2xl text-orange-600 dark:text-orange-400">
                  {user.progress.completedQuests.length}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <p className="m-0 text-sm text-muted-foreground mb-1">Badges débloqués</p>
                <p className="m-0 text-2xl text-yellow-600 dark:text-yellow-400">
                  {user.progress.badges.length}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <p className="m-0 text-sm text-muted-foreground mb-1">Niveau</p>
                <p className="m-0 text-2xl text-blue-600 dark:text-blue-400">
                  {user.progress.completedQuests.length < 2
                    ? 'Débutant'
                    : user.progress.completedQuests.length < 4
                    ? 'Intermédiaire'
                    : 'Avancé'}
                </p>
              </div>
            </div>
          </div>

          {/* Wallet Card */}
          <div>
            <WalletCard wallet={user.wallet} />
          </div>
        </div>
      </div>
    </div>
  );
}
