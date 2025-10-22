import { User, Wallet, UserProgress } from '../types/quest';

const USERS_KEY = 'bitcoin-quest-users';
const CURRENT_USER_KEY = 'bitcoin-quest-current-user';

// Generate a Bitcoin-like address (simplified for demo)
export function generateBitcoinAddress(): string {
  const chars = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
  let address = '1'; // Bitcoin addresses start with 1, 3, or bc1
  for (let i = 0; i < 33; i++) {
    address += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return address;
}

// Generate a unique user ID
function generateUserId(): string {
  return `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Get all users from localStorage
function getAllUsers(): User[] {
  const usersJson = localStorage.getItem(USERS_KEY);
  return usersJson ? JSON.parse(usersJson) : [];
}

// Save all users to localStorage
function saveAllUsers(users: User[]): void {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

// Create a new user with wallet
export function createUser(email: string, username: string, password: string): User | null {
  const users = getAllUsers();
  
  // Check if user already exists
  if (users.some(u => u.email === email)) {
    return null;
  }

  const initialProgress: UserProgress = {
    completedQuests: [],
    totalPoints: 0,
    badges: [],
    currentStreak: 0,
  };

  const wallet: Wallet = {
    address: generateBitcoinAddress(),
    balance: 0,
    transactions: [],
  };

  const newUser: User = {
    id: generateUserId(),
    email,
    username,
    wallet,
    progress: initialProgress,
    createdAt: Date.now(),
  };

  // Store password hash (simplified - in production use proper hashing)
  const userWithPassword = { ...newUser, passwordHash: btoa(password) };
  users.push(userWithPassword as any);
  saveAllUsers(users);

  return newUser;
}

// Login user
export function loginUser(email: string, password: string): User | null {
  const users = getAllUsers();
  const user = users.find(
    u => u.email === email && (u as any).passwordHash === btoa(password)
  );

  if (!user) {
    return null;
  }

  // Remove password hash from returned user
  const { passwordHash, ...userWithoutPassword } = user as any;
  return userWithoutPassword;
}

// Get current user
export function getCurrentUser(): User | null {
  const userJson = localStorage.getItem(CURRENT_USER_KEY);
  return userJson ? JSON.parse(userJson) : null;
}

// Set current user
export function setCurrentUser(user: User | null): void {
  if (user) {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(CURRENT_USER_KEY);
  }
}

// Update user data
export function updateUser(user: User): void {
  const users = getAllUsers();
  const index = users.findIndex(u => u.id === user.id);
  
  if (index !== -1) {
    // Preserve password hash
    const passwordHash = (users[index] as any).passwordHash;
    users[index] = { ...user, passwordHash } as any;
    saveAllUsers(users);
    setCurrentUser(user);
  }
}

// Logout user
export function logoutUser(): void {
  setCurrentUser(null);
}

// Add BTC reward to wallet
export function addBTCReward(user: User, amount: number, description: string): User {
  const newTransaction = {
    id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    type: 'receive' as const,
    amount,
    timestamp: Date.now(),
    description,
  };

  const updatedUser = {
    ...user,
    wallet: {
      ...user.wallet,
      balance: user.wallet.balance + amount,
      transactions: [newTransaction, ...user.wallet.transactions],
    },
  };

  updateUser(updatedUser);
  return updatedUser;
}
