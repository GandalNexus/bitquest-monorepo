import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Separator } from './ui/separator';
import { Wallet, ArrowLeft, Github } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { Logo } from './Logo';

interface AuthPageProps {
  onLogin: (email: string, password: string) => void;
  onSignup: (email: string, username: string, password: string) => void;
  onBack?: () => void;
}

export function AuthPage({ onLogin, onSignup, onBack }: AuthPageProps) {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupUsername, setSignupUsername] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginEmail && loginPassword) {
      onLogin(loginEmail, loginPassword);
    }
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (signupEmail && signupUsername && signupPassword) {
      onSignup(signupEmail, signupUsername, signupPassword);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with space theme */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1500185497267-d635f9c5e90f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMHN0YXJzJTIwZ2FsYXh5fGVufDF8fHx8MTc2MDY0ODU5NXww&ixlib=rb-4.1.0&q=80&w=1080')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      </div>

      {/* Orange gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-orange-500/20 via-transparent to-orange-600/10"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        {/* Back Button */}
        {onBack && (
          <div className="absolute top-6 left-6">
            <Button
              variant="ghost"
              onClick={onBack}
              className="text-white hover:bg-white/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour
            </Button>
          </div>
        )}

        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <Logo size="2xl" />
          </div>
          <p className="m-0 text-gray-300 text-lg">
            Apprenez Bitcoin, gagnez des badges, maîtrisez la crypto
          </p>
        </div>

        {/* Auth Card */}
        <Card className="w-full max-w-md bg-card/95 backdrop-blur border-border shadow-2xl">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Connexion</TabsTrigger>
              <TabsTrigger value="signup">Inscription</TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="p-6">
              {/* Social Login Options */}
              <div className="space-y-3 mb-6">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full border-orange-500/30 hover:bg-orange-500/10"
                  onClick={() => {
                    toast.info('Connexion via wallet Bitcoin - Fonctionnalité en développement');
                  }}
                >
                  <Wallet className="w-4 h-4 mr-2" />
                  Connecter avec un Wallet Bitcoin
                </Button>
                
                <Button
                  type="button"
                  variant="outline"
                  className="w-full border-white/20 hover:bg-white/10"
                  onClick={() => {
                    toast.info('Connexion via GitHub - Fonctionnalité en développement');
                  }}
                >
                  <Github className="w-4 h-4 mr-2" />
                  Continuer avec GitHub
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  className="w-full border-white/20 hover:bg-white/10"
                  onClick={() => {
                    toast.info('Connexion via Google - Fonctionnalité en développement');
                  }}
                >
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Continuer avec Google
                </Button>
              </div>

              <div className="relative mb-6">
                <Separator />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 text-xs text-muted-foreground">
                  ou avec email
                </span>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label htmlFor="login-email" className="block mb-2">
                    Email
                  </label>
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="votre@email.com"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="login-password" className="block mb-2">
                    Mot de passe
                  </label>
                  <Input
                    id="login-password"
                    type="password"
                    placeholder="••••••••"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                  Se connecter
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="signup" className="p-6">
              {/* Social Signup Options */}
              <div className="space-y-3 mb-6">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full border-orange-500/30 hover:bg-orange-500/10"
                  onClick={() => {
                    toast.info('Inscription via wallet Bitcoin - Fonctionnalité en développement');
                  }}
                >
                  <Wallet className="w-4 h-4 mr-2" />
                  S'inscrire avec un Wallet Bitcoin
                </Button>
                
                <Button
                  type="button"
                  variant="outline"
                  className="w-full border-white/20 hover:bg-white/10"
                  onClick={() => {
                    toast.info('Inscription via GitHub - Fonctionnalité en développement');
                  }}
                >
                  <Github className="w-4 h-4 mr-2" />
                  Continuer avec GitHub
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  className="w-full border-white/20 hover:bg-white/10"
                  onClick={() => {
                    toast.info('Inscription via Google - Fonctionnalité en développement');
                  }}
                >
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Continuer avec Google
                </Button>
              </div>

              <div className="relative mb-6">
                <Separator />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 text-xs text-muted-foreground">
                  ou avec email
                </span>
              </div>

              <form onSubmit={handleSignup} className="space-y-4">
                <div>
                  <label htmlFor="signup-email" className="block mb-2">
                    Email
                  </label>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="votre@email.com"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="signup-username" className="block mb-2">
                    Nom d'utilisateur
                  </label>
                  <Input
                    id="signup-username"
                    type="text"
                    placeholder="satoshi"
                    value={signupUsername}
                    onChange={(e) => setSignupUsername(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="signup-password" className="block mb-2">
                    Mot de passe
                  </label>
                  <Input
                    id="signup-password"
                    type="password"
                    placeholder="••••••••"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-800">
                  <div className="flex items-start gap-2">
                    <Wallet className="w-5 h-5 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                    <p className="m-0 text-sm text-orange-900 dark:text-orange-100">
                      Un wallet Bitcoin sera créé automatiquement lors de votre inscription
                    </p>
                  </div>
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                  Créer un compte
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </Card>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl w-full">
          <div className="text-center p-6 rounded-xl bg-white/10 backdrop-blur border border-white/20">
            <div className="text-3xl mb-2">🎯</div>
            <h3 className="m-0 mb-2 text-white">Quêtes Interactives</h3>
            <p className="m-0 text-sm text-gray-300">
              Apprenez en complétant des défis progressifs
            </p>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/10 backdrop-blur border border-white/20">
            <div className="text-3xl mb-2">💰</div>
            <h3 className="m-0 mb-2 text-white">Wallet Bitcoin</h3>
            <p className="m-0 text-sm text-gray-300">
              Recevez un wallet pour vos accomplissements
            </p>
          </div>
          <div className="text-center p-6 rounded-xl bg-white/10 backdrop-blur border border-white/20">
            <div className="text-3xl mb-2">🏆</div>
            <h3 className="m-0 mb-2 text-white">Badges & Récompenses</h3>
            <p className="m-0 text-sm text-gray-300">
              Débloquez des badges en progressant
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}