import { Wallet as WalletIcon, TrendingUp, ArrowDownLeft, ArrowUpRight, Copy, Check } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Wallet, Transaction } from '../types/quest';
import { useState } from 'react';

interface WalletCardProps {
  wallet: Wallet;
}

export function WalletCard({ wallet }: WalletCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(wallet.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatBTC = (amount: number) => {
    return amount.toFixed(8);
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <Card className="overflow-hidden border-2 border-orange-200 dark:border-orange-800">
      {/* Header with gradient */}
      <div className="relative p-6 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center">
                <WalletIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="m-0 text-sm opacity-90">Mon Wallet Bitcoin</p>
                <p className="m-0 text-xs opacity-75">Géré automatiquement</p>
              </div>
            </div>
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
              <span className="text-2xl">₿</span>
            </div>
          </div>

          {/* Balance */}
          <div className="mb-4">
            <p className="m-0 text-sm opacity-90 mb-1">Solde Total</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl">{formatBTC(wallet.balance)}</span>
              <span className="text-lg opacity-90">BTC</span>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center gap-2 p-3 bg-white/10 backdrop-blur rounded-lg">
            <p className="m-0 text-xs font-mono flex-1 truncate">
              {wallet.address}
            </p>
            <Button
              size="sm"
              variant="ghost"
              className="h-6 px-2 hover:bg-white/20"
              onClick={handleCopyAddress}
            >
              {copied ? (
                <Check className="w-3 h-3" />
              ) : (
                <Copy className="w-3 h-3" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Transactions */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="m-0">Transactions Récentes</h3>
          <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
        </div>

        {wallet.transactions.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <WalletIcon className="w-12 h-12 mx-auto mb-2 opacity-50" />
            <p className="m-0">Aucune transaction pour le moment</p>
            <p className="m-0 text-sm mt-1">
              Complétez des quêtes pour gagner des BTC !
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {wallet.transactions.slice(0, 5).map((tx) => (
              <div
                key={tx.id}
                className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      tx.type === 'receive'
                        ? 'bg-green-100 dark:bg-green-900/30'
                        : 'bg-red-100 dark:bg-red-900/30'
                    }`}
                  >
                    {tx.type === 'receive' ? (
                      <ArrowDownLeft className="w-4 h-4 text-green-600 dark:text-green-400" />
                    ) : (
                      <ArrowUpRight className="w-4 h-4 text-red-600 dark:text-red-400" />
                    )}
                  </div>
                  <div>
                    <p className="m-0 text-sm">{tx.description}</p>
                    <p className="m-0 text-xs text-muted-foreground">
                      {formatDate(tx.timestamp)}
                    </p>
                  </div>
                </div>
                <div
                  className={`${
                    tx.type === 'receive'
                      ? 'text-green-600 dark:text-green-400'
                      : 'text-red-600 dark:text-red-400'
                  }`}
                >
                  <p className="m-0">
                    {tx.type === 'receive' ? '+' : '-'}
                    {formatBTC(tx.amount)} BTC
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}
