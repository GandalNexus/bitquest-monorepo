import { Quest, Badge } from '../types/quest';

export const quests: Quest[] = [
  // THEORETICAL QUESTS
  {
    id: 'btc-basics-1',
    title: 'Qu\'est-ce que Bitcoin?',
    description: 'Découvrez les fondamentaux de Bitcoin et sa création',
    difficulty: 'beginner',
    points: 100,
    category: 'Fondamentaux',
    type: 'theoretical',
    questions: [
      {
        id: 'q1',
        question: 'Qui est le créateur de Bitcoin?',
        options: ['Satoshi Nakamoto', 'Vitalik Buterin', 'Elon Musk', 'Bill Gates'],
        correctAnswer: 0,
        explanation: 'Bitcoin a été créé par Satoshi Nakamoto en 2008. Son identité réelle reste inconnue.'
      },
      {
        id: 'q2',
        question: 'En quelle année le livre blanc de Bitcoin a-t-il été publié?',
        options: ['2006', '2007', '2008', '2009'],
        correctAnswer: 2,
        explanation: 'Le livre blanc de Bitcoin a été publié le 31 octobre 2008.'
      },
      {
        id: 'q3',
        question: 'Quel est le nombre maximum de bitcoins qui peuvent exister?',
        options: ['10 millions', '21 millions', '50 millions', 'Illimité'],
        correctAnswer: 1,
        explanation: 'Bitcoin a une offre maximale fixée à 21 millions de pièces.'
      }
    ]
  },
  {
    id: 'btc-basics-2',
    title: 'Blockchain et Minage',
    description: 'Comprenez comment fonctionne la blockchain Bitcoin',
    difficulty: 'beginner',
    points: 150,
    category: 'Fondamentaux',
    type: 'theoretical',
    questions: [
      {
        id: 'q1',
        question: 'Qu\'est-ce que la blockchain?',
        options: [
          'Un type de cryptomonnaie',
          'Un registre distribué de transactions',
          'Un logiciel de minage',
          'Un portefeuille numérique'
        ],
        correctAnswer: 1,
        explanation: 'La blockchain est un registre distribué qui enregistre toutes les transactions Bitcoin de manière sécurisée et transparente.'
      },
      {
        id: 'q2',
        question: 'Qu\'est-ce que le minage de Bitcoin?',
        options: [
          'Acheter du Bitcoin',
          'Valider des transactions et créer de nouveaux blocs',
          'Vendre du Bitcoin',
          'Échanger du Bitcoin'
        ],
        correctAnswer: 1,
        explanation: 'Le minage est le processus de validation des transactions et de création de nouveaux blocs sur la blockchain.'
      },
      {
        id: 'q3',
        question: 'Combien de temps faut-il en moyenne pour créer un nouveau bloc?',
        options: ['1 minute', '5 minutes', '10 minutes', '30 minutes'],
        correctAnswer: 2,
        explanation: 'Un nouveau bloc Bitcoin est créé environ toutes les 10 minutes.'
      }
    ]
  },
  {
    id: 'btc-basics-3',
    title: 'Premiers Gains',
    description: 'Comprenez comment recevoir des bitcoins',
    difficulty: 'beginner',
    points: 150,
    category: 'Fondamentaux',
    type: 'theoretical',
    walletRequirement: {
      minBalance: 0.00000001,
    },
    questions: [
      {
        id: 'q1',
        question: 'Comment pouvez-vous recevoir des bitcoins?',
        options: [
          'En donnant votre clé privée',
          'En partageant votre adresse publique',
          'En envoyant un email',
          'En appelant un numéro'
        ],
        correctAnswer: 1,
        explanation: 'Vous recevez des bitcoins en partageant votre adresse publique (wallet address) avec l\'expéditeur.'
      },
      {
        id: 'q2',
        question: 'Qu\'est-ce qu\'une adresse Bitcoin?',
        options: [
          'Votre adresse email',
          'Un identifiant unique pour recevoir des BTC',
          'Votre adresse physique',
          'Un mot de passe'
        ],
        correctAnswer: 1,
        explanation: 'Une adresse Bitcoin est un identifiant unique qui permet de recevoir des bitcoins.'
      },
      {
        id: 'q3',
        question: 'Combien coûte la création d\'une adresse Bitcoin?',
        options: ['10 BTC', '1 BTC', '0.1 BTC', 'C\'est gratuit'],
        correctAnswer: 3,
        explanation: 'La création d\'une adresse Bitcoin est totalement gratuite.'
      }
    ]
  },
  {
    id: 'btc-intermediate-1',
    title: 'Portefeuilles et Clés',
    description: 'Maîtrisez les concepts de clés privées et publiques',
    difficulty: 'intermediate',
    points: 200,
    category: 'Sécurité',
    type: 'theoretical',
    questions: [
      {
        id: 'q1',
        question: 'Qu\'est-ce qu\'une clé privée?',
        options: [
          'L\'adresse de votre portefeuille',
          'Le code secret pour accéder à vos bitcoins',
          'Votre nom d\'utilisateur',
          'Le mot de passe de votre email'
        ],
        correctAnswer: 1,
        explanation: 'La clé privée est le code secret qui permet de signer des transactions et de contrôler vos bitcoins.'
      },
      {
        id: 'q2',
        question: 'Que signifie "Not your keys, not your coins"?',
        options: [
          'Les clés sont inutiles',
          'Si vous ne contrôlez pas vos clés privées, vous ne possédez pas vraiment vos bitcoins',
          'Les clés sont optionnelles',
          'Les clés peuvent être partagées'
        ],
        correctAnswer: 1,
        explanation: 'Ce dicton souligne l\'importance de contrôler ses propres clés privées plutôt que de les confier à un tiers.'
      },
      {
        id: 'q3',
        question: 'Qu\'est-ce qu\'un portefeuille hardware?',
        options: [
          'Un portefeuille en cuir',
          'Un dispositif physique qui stocke vos clés de manière sécurisée',
          'Un portefeuille logiciel',
          'Un site web'
        ],
        correctAnswer: 1,
        explanation: 'Un portefeuille hardware est un dispositif physique conçu pour stocker vos clés privées de manière sécurisée, hors ligne.'
      }
    ]
  },
  {
    id: 'btc-intermediate-2',
    title: 'Transactions Bitcoin',
    description: 'Apprenez comment fonctionnent les transactions',
    difficulty: 'intermediate',
    points: 200,
    category: 'Technique',
    type: 'theoretical',
    questions: [
      {
        id: 'q1',
        question: 'Qu\'est-ce que les frais de transaction?',
        options: [
          'Une taxe gouvernementale',
          'La rémunération des mineurs',
          'Un coût fixe de 1 BTC',
          'Gratuit'
        ],
        correctAnswer: 1,
        explanation: 'Les frais de transaction sont payés aux mineurs pour valider et inclure votre transaction dans un bloc.'
      },
      {
        id: 'q2',
        question: 'Combien de confirmations sont généralement recommandées pour une transaction importante?',
        options: ['1', '3', '6', '12'],
        correctAnswer: 2,
        explanation: 'Pour les transactions importantes, il est recommandé d\'attendre au moins 6 confirmations pour réduire le risque de double dépense.'
      },
      {
        id: 'q3',
        question: 'Qu\'est-ce qu\'une UTXO?',
        options: [
          'Un type de portefeuille',
          'Une sortie de transaction non dépensée',
          'Un algorithme de minage',
          'Un exchange'
        ],
        correctAnswer: 1,
        explanation: 'UTXO (Unspent Transaction Output) est une sortie de transaction qui n\'a pas encore été dépensée et peut être utilisée comme entrée pour une nouvelle transaction.'
      }
    ]
  },
  {
    id: 'btc-advanced-1',
    title: 'Lightning Network',
    description: 'Explorez les solutions de scalabilité de Bitcoin',
    difficulty: 'advanced',
    points: 300,
    category: 'Avancé',
    type: 'theoretical',
    questions: [
      {
        id: 'q1',
        question: 'Qu\'est-ce que le Lightning Network?',
        options: [
          'Un nouveau type de bitcoin',
          'Une solution de seconde couche pour des transactions rapides',
          'Un concurrent de Bitcoin',
          'Un site web'
        ],
        correctAnswer: 1,
        explanation: 'Le Lightning Network est un protocole de seconde couche qui permet des transactions Bitcoin instantanées et à faible coût.'
      },
      {
        id: 'q2',
        question: 'Quel est le principal avantage du Lightning Network?',
        options: [
          'Plus de bitcoins',
          'Transactions quasi-instantanées et frais réduits',
          'Minage plus facile',
          'Anonymat total'
        ],
        correctAnswer: 1,
        explanation: 'Le Lightning Network permet des transactions presque instantanées avec des frais très faibles, idéal pour les micro-paiements.'
      },
      {
        id: 'q3',
        question: 'Comment fonctionnent les canaux de paiement Lightning?',
        options: [
          'Directement sur la blockchain principale',
          'Via des canaux bidirectionnels hors chaîne',
          'Par email',
          'Via des banques'
        ],
        correctAnswer: 1,
        explanation: 'Les canaux Lightning sont des canaux de paiement bidirectionnels qui permettent des transactions hors chaîne, seules les ouvertures et fermetures de canaux sont enregistrées sur la blockchain principale.'
      }
    ]
  },
  {
    id: 'btc-advanced-2',
    title: 'Sécurité Avancée',
    description: 'Maîtrisez les concepts de sécurité Bitcoin',
    difficulty: 'advanced',
    points: 300,
    category: 'Sécurité',
    type: 'theoretical',
    questions: [
      {
        id: 'q1',
        question: 'Qu\'est-ce qu\'un portefeuille multi-signature?',
        options: [
          'Un portefeuille avec plusieurs mots de passe',
          'Un portefeuille nécessitant plusieurs clés pour signer une transaction',
          'Un portefeuille avec plusieurs cryptomonnaies',
          'Un portefeuille partagé'
        ],
        correctAnswer: 1,
        explanation: 'Un portefeuille multi-signature nécessite plusieurs clés privées pour autoriser une transaction, augmentant ainsi la sécurité.'
      },
      {
        id: 'q2',
        question: 'Qu\'est-ce qu\'une phrase de récupération (seed phrase)?',
        options: [
          'Votre mot de passe',
          'Une série de mots permettant de restaurer votre portefeuille',
          'Votre adresse email',
          'Votre numéro de téléphone'
        ],
        correctAnswer: 1,
        explanation: 'La phrase de récupération est une série de 12 ou 24 mots qui permet de restaurer l\'accès à votre portefeuille en cas de perte.'
      },
      {
        id: 'q3',
        question: 'Qu\'est-ce qu\'une attaque de 51%?',
        options: [
          'Voler 51% des bitcoins',
          'Contrôler 51% de la puissance de calcul du réseau',
          'Acheter 51% des bitcoins',
          'Pirater 51% des portefeuilles'
        ],
        correctAnswer: 1,
        explanation: 'Une attaque de 51% se produit quand un acteur contrôle plus de 50% de la puissance de calcul du réseau, lui permettant théoriquement de manipuler la blockchain.'
      }
    ]
  },
  
  // TECHNICAL QUESTS (Bitcoin Lab)
  {
    id: 'btc-tech-1',
    title: 'Créer une Transaction Bitcoin',
    description: 'Apprenez à créer et broadcaster une transaction sur le testnet Bitcoin',
    difficulty: 'intermediate',
    points: 250,
    category: 'Pratique',
    type: 'technical',
    externalLink: {
      platform: 'Bitcoin Lab',
      url: 'https://bitcoinlab.network/lab/transaction-builder',
      instructions: 'Utilisez Bitcoin Lab pour créer une transaction raw, signez-la et broadcastez-la sur le testnet. Une fois terminé, revenez ici pour valider vos connaissances.'
    },
    questions: [
      {
        id: 'q1',
        question: 'Quels sont les éléments essentiels d\'une transaction Bitcoin?',
        options: [
          'Seulement l\'adresse du destinataire',
          'Inputs, outputs, et signature',
          'Seulement le montant',
          'Email et mot de passe'
        ],
        correctAnswer: 1,
        explanation: 'Une transaction Bitcoin contient des inputs (UTXO à dépenser), des outputs (nouvelles UTXO) et une signature cryptographique pour prouver la propriété.'
      },
      {
        id: 'q2',
        question: 'Qu\'est-ce qu\'une transaction raw?',
        options: [
          'Une transaction non cryptée',
          'Une transaction sérialisée en format hexadécimal',
          'Une transaction gratuite',
          'Une transaction rapide'
        ],
        correctAnswer: 1,
        explanation: 'Une raw transaction est une transaction sérialisée en format hexadécimal, prête à être broadcastée au réseau.'
      },
      {
        id: 'q3',
        question: 'Pourquoi utiliser le testnet Bitcoin?',
        options: [
          'C\'est plus rapide',
          'Pour tester sans risquer de vrais bitcoins',
          'C\'est obligatoire',
          'C\'est moins cher'
        ],
        correctAnswer: 1,
        explanation: 'Le testnet permet de tester des transactions et applications sans risquer de perdre de vrais bitcoins, utilisant des coins de test sans valeur.'
      }
    ]
  },
  {
    id: 'btc-tech-2',
    title: 'Créer un Smart Contract Bitcoin',
    description: 'Explorez les scripts Bitcoin et créez un contrat simple',
    difficulty: 'advanced',
    points: 350,
    category: 'Pratique',
    type: 'technical',
    externalLink: {
      platform: 'Bitcoin Lab',
      url: 'https://bitcoinlab.network/lab/script-playground',
      instructions: 'Créez un script Bitcoin simple (P2SH) sur Bitcoin Lab. Testez le verrouillage et déverrouillage de fonds avec des conditions spécifiques.'
    },
    questions: [
      {
        id: 'q1',
        question: 'Qu\'est-ce que Bitcoin Script?',
        options: [
          'Un langage de programmation complet',
          'Un langage de script simple basé sur la pile',
          'Un framework JavaScript',
          'Un système d\'exploitation'
        ],
        correctAnswer: 1,
        explanation: 'Bitcoin Script est un langage de programmation simple, basé sur la pile, utilisé pour définir les conditions de dépense des bitcoins.'
      },
      {
        id: 'q2',
        question: 'Qu\'est-ce qu\'une adresse P2SH?',
        options: [
          'Pay to Script Hash - permet des scripts complexes',
          'Pay to Simple Hash',
          'Public to Secret Hash',
          'Private to Secure Hash'
        ],
        correctAnswer: 0,
        explanation: 'P2SH (Pay to Script Hash) permet de créer des adresses pour des scripts complexes comme les multi-signatures ou les timelocks.'
      },
      {
        id: 'q3',
        question: 'Quel opcode permet de vérifier une signature?',
        options: [
          'OP_VERIFY',
          'OP_CHECKSIG',
          'OP_HASH',
          'OP_SIGN'
        ],
        correctAnswer: 1,
        explanation: 'OP_CHECKSIG vérifie qu\'une signature correspond à une clé publique donnée dans le script Bitcoin.'
      }
    ]
  },
  {
    id: 'btc-tech-3',
    title: 'Explorer la Blockchain',
    description: 'Utilisez un explorateur de blockchain pour analyser des transactions réelles',
    difficulty: 'beginner',
    points: 150,
    category: 'Pratique',
    type: 'technical',
    externalLink: {
      platform: 'Bitcoin Lab',
      url: 'https://bitcoinlab.network/lab/blockchain-explorer',
      instructions: 'Explorez des blocs et transactions réels sur Bitcoin Lab. Analysez la structure d\'un bloc et les détails d\'une transaction.'
    },
    questions: [
      {
        id: 'q1',
        question: 'Que contient le header d\'un bloc Bitcoin?',
        options: [
          'Seulement les transactions',
          'Version, hash du bloc précédent, merkle root, timestamp, difficulty, nonce',
          'Seulement l\'adresse du mineur',
          'Le prix du Bitcoin'
        ],
        correctAnswer: 1,
        explanation: 'Le header d\'un bloc contient les métadonnées essentielles : version, hash du bloc précédent, merkle root, timestamp, target de difficulté et nonce.'
      },
      {
        id: 'q2',
        question: 'Qu\'est-ce qu\'un merkle tree?',
        options: [
          'Un type d\'arbre Bitcoin',
          'Une structure de données permettant de vérifier efficacement les transactions',
          'Un wallet',
          'Un exchange'
        ],
        correctAnswer: 1,
        explanation: 'Un merkle tree est une structure de données en arbre qui permet de vérifier efficacement l\'inclusion de transactions dans un bloc.'
      },
      {
        id: 'q3',
        question: 'Que signifie la "hauteur" d\'un bloc?',
        options: [
          'Sa taille en octets',
          'Sa position dans la chaîne depuis le bloc genesis',
          'Le nombre de transactions',
          'Le montant total'
        ],
        correctAnswer: 1,
        explanation: 'La hauteur d\'un bloc indique sa position dans la blockchain, le bloc genesis ayant une hauteur de 0.'
      }
    ]
  },
  {
    id: 'btc-tech-4',
    title: 'Lightning Network en Action',
    description: 'Créez et utilisez un canal Lightning',
    difficulty: 'advanced',
    points: 400,
    category: 'Pratique',
    type: 'technical',
    externalLink: {
      platform: 'Bitcoin Lab',
      url: 'https://bitcoinlab.network/lab/lightning-network',
      instructions: 'Créez un canal Lightning sur le testnet avec Bitcoin Lab. Effectuez des paiements instantanés et observez comment les canaux fonctionnent.'
    },
    questions: [
      {
        id: 'q1',
        question: 'Comment ouvre-t-on un canal Lightning?',
        options: [
          'Par email',
          'En créant une transaction de financement on-chain',
          'Automatiquement',
          'Via une application mobile'
        ],
        correctAnswer: 1,
        explanation: 'Un canal Lightning s\'ouvre en créant une transaction de financement on-chain qui verrouille des bitcoins dans une adresse multisig 2-of-2.'
      },
      {
        id: 'q2',
        question: 'Que sont les HTLCs dans Lightning?',
        options: [
          'Hash Time-Locked Contracts - permettent le routage sécurisé',
          'Hardware Lightning Chips',
          'High Transaction Load Channels',
          'Hot Transaction Lightning Coins'
        ],
        correctAnswer: 0,
        explanation: 'Les HTLCs (Hash Time-Locked Contracts) permettent le routage sécurisé des paiements à travers plusieurs canaux Lightning.'
      },
      {
        id: 'q3',
        question: 'Combien coûte une transaction dans un canal Lightning?',
        options: [
          'Même coût qu\'on-chain',
          'Très faible - quelques satoshis',
          'Gratuit toujours',
          '10 BTC'
        ],
        correctAnswer: 1,
        explanation: 'Les transactions Lightning ont des frais très faibles (fractions de satoshi) car elles ne nécessitent pas de validation on-chain.'
      }
    ]
  }
];

export const badges: Badge[] = [
  {
    id: 'first-steps',
    name: 'Premiers Pas',
    description: 'Complétez votre première quête',
    icon: '🎯',
    requirement: 1
  },
  {
    id: 'bitcoin-explorer',
    name: 'Explorateur Bitcoin',
    description: 'Complétez 3 quêtes',
    icon: '🔍',
    requirement: 3
  },
  {
    id: 'crypto-master',
    name: 'Maître Crypto',
    description: 'Complétez toutes les quêtes',
    icon: '🏆',
    requirement: 11
  },
  {
    id: 'point-collector',
    name: 'Collectionneur de Points',
    description: 'Gagnez 500 points',
    icon: '⭐',
    requirement: 500
  },
  {
    id: 'bitcoin-expert',
    name: 'Expert Bitcoin',
    description: 'Gagnez 1000 points',
    icon: '💎',
    requirement: 1000
  }
];
