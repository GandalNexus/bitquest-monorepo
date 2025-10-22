import { Trophy, Coins, LogOut, Wallet } from 'lucide-react';
import { User } from '../types/quest';
import { Button } from './ui/button';
import { Logo } from './Logo';

interface HeaderProps {
  user: User;
  onLogout: () => void;
}

export function Header({ user, onLogout }: HeaderProps) {
  const formatBTC = (amount: number) => {
    return amount.toFixed(8);
  };

  return (
    <header className="border-b border-border bg-card sticky top-0 z-50 backdrop-blur bg-card/95">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo size="md" />
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800">
              <Wallet className="w-4 h-4 text-orange-600 dark:text-orange-400" />
              <span className="text-sm">{formatBTC(user.wallet.balance)} BTC</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Coins className="w-5 h-5 text-orange-500" />
              <span>{user.progress.totalPoints} pts</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-500" />
              <span>{user.progress.badges.length}</span>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={onLogout}
              className="gap-2"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Déconnexion</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}