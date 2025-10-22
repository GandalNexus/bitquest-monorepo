/**
 * Configuration des providers d'authentification
 * 
 * Ce fichier contient les configurations pour les différents providers
 * d'authentification supportés par Bitcoin Quest.
 */

export type AuthProvider = 'email' | 'wallet' | 'github' | 'google';

export interface WalletProvider {
  name: string;
  connectWallet: () => Promise<{ address: string; balance: number }>;
}

export interface OAuth2Provider {
  name: string;
  clientId?: string;
  redirectUri?: string;
  authUrl: string;
}

// Configuration pour les wallets Bitcoin
export const walletProviders: Record<string, WalletProvider> = {
  metamask: {
    name: 'MetaMask',
    connectWallet: async () => {
      // Placeholder pour l'intégration future
      throw new Error('Wallet connection not yet implemented');
    },
  },
  phantom: {
    name: 'Phantom',
    connectWallet: async () => {
      throw new Error('Wallet connection not yet implemented');
    },
  },
};

// Configuration pour OAuth2 (GitHub, Google)
export const oauth2Providers: Record<string, OAuth2Provider> = {
  github: {
    name: 'GitHub',
    authUrl: 'https://github.com/login/oauth/authorize',
    // clientId et redirectUri seraient configurés en production
  },
  google: {
    name: 'Google',
    authUrl: 'https://accounts.google.com/o/oauth2/v2/auth',
    // clientId et redirectUri seraient configurés en production
  },
};

/**
 * Fonction helper pour se connecter avec un wallet
 * @param provider - Le provider de wallet à utiliser
 * @returns Les informations du wallet (adresse et balance)
 */
export async function connectWallet(provider: keyof typeof walletProviders): Promise<{ address: string; balance: number }> {
  const walletProvider = walletProviders[provider];
  if (!walletProvider) {
    throw new Error(`Unknown wallet provider: ${provider}`);
  }
  
  return walletProvider.connectWallet();
}

/**
 * Fonction helper pour générer l'URL d'authentification OAuth2
 * @param provider - Le provider OAuth2 (github ou google)
 * @param state - État de sécurité pour la requête OAuth
 * @returns L'URL d'authentification
 */
export function getOAuth2Url(provider: keyof typeof oauth2Providers, state: string): string {
  const oauth2Provider = oauth2Providers[provider];
  if (!oauth2Provider) {
    throw new Error(`Unknown OAuth2 provider: ${provider}`);
  }
  
  const params = new URLSearchParams({
    client_id: oauth2Provider.clientId || 'YOUR_CLIENT_ID',
    redirect_uri: oauth2Provider.redirectUri || window.location.origin + '/auth/callback',
    state,
    scope: provider === 'github' ? 'read:user user:email' : 'email profile',
  });
  
  return `${oauth2Provider.authUrl}?${params.toString()}`;
}
