import { Button } from './ui/button';
import { Card } from './ui/card';
import { Sparkles, Trophy, Wallet, Target, Lock, Zap, Users, BookOpen } from 'lucide-react';
import { Logo } from './Logo';

interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1500185497267-d635f9c5e90f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMHN0YXJzJTIwZ2FsYXh5fGVufDF8fHx8MTc2MDY0ODU5NXww&ixlib=rb-4.1.0&q=80&w=1080')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>
      </div>

      {/* Orange gradient overlays */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Floating Bitcoin symbols */}
      <div className="absolute top-20 left-10 text-4xl opacity-10 animate-float">₿</div>
      <div className="absolute top-40 right-20 text-3xl opacity-10 animate-float" style={{ animationDelay: '1s' }}>₿</div>
      <div className="absolute bottom-40 left-1/4 text-5xl opacity-10 animate-float" style={{ animationDelay: '2s' }}>₿</div>
      <div className="absolute bottom-20 right-1/3 text-3xl opacity-10 animate-float" style={{ animationDelay: '1.5s' }}>₿</div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Logo size="xl" />
            <Button 
              onClick={onGetStarted}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              Se connecter
            </Button>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 mb-8 backdrop-blur">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">Plateforme d'apprentissage gamifiée</span>
            </div>

            <h1 className="m-0 mb-6 text-white text-5xl md:text-6xl lg:text-7xl leading-tight">
              Maîtrisez Bitcoin
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent animate-glow">
                en Jouant
              </span>
            </h1>

            <p className="m-0 mb-8 text-xl text-gray-300 max-w-2xl mx-auto">
              Apprenez les fondamentaux de Bitcoin à travers des quêtes interactives, 
              gagnez des récompenses en BTC et devenez un expert de la crypto-monnaie.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button 
                onClick={onGetStarted}
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-2xl shadow-orange-500/50 px-8"
              >
                <Zap className="w-5 h-5 mr-2" />
                Commencer Gratuitement
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                En savoir plus
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl text-orange-400 mb-1">11</div>
                <div className="text-sm text-gray-400">Quêtes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl text-orange-400 mb-1">2600</div>
                <div className="text-sm text-gray-400">Points</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl text-orange-400 mb-1">5</div>
                <div className="text-sm text-gray-400">Badges</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="m-0 mb-4 text-white text-3xl md:text-4xl">
                Pourquoi Bitcoin Quest ?
              </h2>
              <p className="m-0 text-gray-400 max-w-2xl mx-auto">
                Une nouvelle façon d'apprendre Bitcoin, interactive et récompensée
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Feature 1 */}
              <Card className="p-6 bg-white/5 backdrop-blur border-white/10 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/20 flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="m-0 mb-2 text-white">Quêtes Théoriques</h3>
                <p className="m-0 text-sm text-gray-400">
                  Apprenez les fondamentaux de Bitcoin à travers des quiz interactifs
                </p>
              </Card>

              {/* Feature 1b - Technical Quests */}
              <Card className="p-6 bg-white/5 backdrop-blur border-white/10 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="m-0 mb-2 text-white">Quêtes Techniques</h3>
                <p className="m-0 text-sm text-gray-400">
                  Pratiquez avec Bitcoin Lab : créez des transactions, des scripts et explorez la blockchain
                </p>
              </Card>

              {/* Feature 2 */}
              <Card className="p-6 bg-white/5 backdrop-blur border-white/10 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/20 flex items-center justify-center mb-4">
                  <Wallet className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="m-0 mb-2 text-white">Wallet Bitcoin Intégré</h3>
                <p className="m-0 text-sm text-gray-400">
                  Recevez automatiquement un wallet et gagnez des BTC en complétant des quêtes
                </p>
              </Card>

              {/* Feature 3 */}
              <Card className="p-6 bg-white/5 backdrop-blur border-white/10 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/20 flex items-center justify-center mb-4">
                  <Trophy className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="m-0 mb-2 text-white">Système de Badges</h3>
                <p className="m-0 text-sm text-gray-400">
                  Débloquez des badges exclusifs et montrez vos accomplissements
                </p>
              </Card>

              {/* Feature 4 */}
              <Card className="p-6 bg-white/5 backdrop-blur border-white/10 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/20 flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="m-0 mb-2 text-white">Apprentissage Interactif</h3>
                <p className="m-0 text-sm text-gray-400">
                  Des quiz détaillés avec explications pour comprendre chaque concept
                </p>
              </Card>

              {/* Feature 5 */}
              <Card className="p-6 bg-white/5 backdrop-blur border-white/10 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/20 flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="m-0 mb-2 text-white">Connexion Flexible</h3>
                <p className="m-0 text-sm text-gray-400">
                  Connectez-vous avec votre wallet Bitcoin, GitHub, Google ou email
                </p>
              </Card>

              {/* Feature 6 */}
              <Card className="p-6 bg-white/5 backdrop-blur border-white/10 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/20 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="m-0 mb-2 text-white">100% Gratuit</h3>
                <p className="m-0 text-sm text-gray-400">
                  Accès illimité à toutes les quêtes et fonctionnalités sans frais
                </p>
              </Card>
            </div>
          </div>
        </div>

        {/* Wallet Preview Section */}
        <div className="container mx-auto px-4 py-20 border-t border-white/10">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 mb-6">
                  <Wallet className="w-4 h-4" />
                  <span className="text-sm">Wallet Bitcoin</span>
                </div>
                <h2 className="m-0 mb-4 text-white text-3xl md:text-4xl">
                  Votre wallet, vos récompenses
                </h2>
                <p className="m-0 mb-6 text-gray-400">
                  Chaque utilisateur reçoit automatiquement un wallet Bitcoin sécurisé. 
                  Complétez des quêtes pour gagner des BTC et suivez toutes vos transactions en temps réel.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-gray-300">
                    <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-orange-400 text-xs">✓</span>
                    </div>
                    <span>Création automatique lors de l'inscription</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-orange-400 text-xs">✓</span>
                    </div>
                    <span>Récompenses en BTC pour chaque quête complétée</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-orange-400 text-xs">✓</span>
                    </div>
                    <span>Historique complet de vos transactions</span>
                  </li>
                </ul>
              </div>
              
              {/* Wallet Card Preview */}
              <div className="relative">
                <Card className="p-6 bg-gradient-to-br from-orange-500/10 to-orange-600/10 backdrop-blur border-orange-500/30">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                        <Wallet className="w-5 h-5 text-orange-400" />
                      </div>
                      <div>
                        <p className="m-0 text-sm text-white">Mon Wallet Bitcoin</p>
                        <p className="m-0 text-xs text-gray-400">Géré automatiquement</p>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                      <span className="text-xl">₿</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="m-0 text-xs text-gray-400 mb-1">Solde Total</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl text-white">0.00014000</span>
                      <span className="text-lg text-gray-300">BTC</span>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                    <p className="m-0 text-xs font-mono text-gray-400 truncate">
                      1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa
                    </p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="flex items-center justify-between mb-3">
                      <p className="m-0 text-sm text-white">Dernière transaction</p>
                      <span className="text-xs text-green-400">+0.00001000 BTC</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 p-2 bg-white/5 rounded">
                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                          <span className="text-xs text-green-400">↓</span>
                        </div>
                        <span className="text-xs text-gray-400 flex-1">Récompense pour "Qu'est-ce que Bitcoin?"</span>
                      </div>
                    </div>
                  </div>
                </Card>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-600/20 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* How it Works Section */}
        <div className="container mx-auto px-4 py-20 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="m-0 mb-4 text-white text-3xl md:text-4xl">
                Comment ça marche ?
              </h2>
              <p className="m-0 text-gray-400">
                Devenez un expert Bitcoin en 3 étapes simples
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mx-auto mb-4 shadow-2xl shadow-orange-500/50">
                  <span className="text-2xl">1</span>
                </div>
                <h3 className="m-0 mb-2 text-white">Créez votre compte</h3>
                <p className="m-0 text-sm text-gray-400">
                  Inscription gratuite et création automatique de votre wallet Bitcoin
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mx-auto mb-4 shadow-2xl shadow-orange-500/50">
                  <span className="text-2xl">2</span>
                </div>
                <h3 className="m-0 mb-2 text-white">Complétez des quêtes</h3>
                <p className="m-0 text-sm text-gray-400">
                  Répondez aux quiz et apprenez les concepts Bitcoin pas à pas
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mx-auto mb-4 shadow-2xl shadow-orange-500/50">
                  <span className="text-2xl">3</span>
                </div>
                <h3 className="m-0 mb-2 text-white">Gagnez des récompenses</h3>
                <p className="m-0 text-sm text-gray-400">
                  Récoltez des points, des badges et des BTC pour vos accomplissements
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Topics Section */}
        <div className="container mx-auto px-4 py-20 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="m-0 mb-4 text-white text-3xl md:text-4xl">
              Tout ce que vous devez savoir sur Bitcoin
            </h2>
            <p className="m-0 mb-12 text-gray-400">
              Des bases jusqu'aux concepts avancés
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-6 rounded-xl bg-white/5 backdrop-blur border border-white/10">
                <div className="text-3xl mb-2">📚</div>
                <p className="m-0 text-sm text-white">Fondamentaux</p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 backdrop-blur border border-white/10">
                <div className="text-3xl mb-2">🔐</div>
                <p className="m-0 text-sm text-white">Sécurité</p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 backdrop-blur border border-white/10">
                <div className="text-3xl mb-2">⚡</div>
                <p className="m-0 text-sm text-white">Lightning</p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 backdrop-blur border border-white/10">
                <div className="text-3xl mb-2">⛏️</div>
                <p className="m-0 text-sm text-white">Minage</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 py-20 border-t border-white/10">
          <div className="max-w-3xl mx-auto">
            <Card className="p-12 bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur border-orange-500/30 text-center">
              <h2 className="m-0 mb-4 text-white text-3xl md:text-4xl">
                Prêt à devenir un expert Bitcoin ?
              </h2>
              <p className="m-0 mb-8 text-gray-300">
                Rejoignez Bitcoin Quest dès maintenant et commencez votre voyage d'apprentissage
              </p>
              <Button 
                onClick={onGetStarted}
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-2xl shadow-orange-500/50 px-8"
              >
                <Zap className="w-5 h-5 mr-2" />
                Commencer Maintenant
              </Button>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-white/10 py-8">
          <div className="container mx-auto px-4">
            <div className="text-center text-gray-400">
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
    </div>
  );
}