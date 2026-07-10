import { useState, useEffect, createContext } from "react";
import { auth } from "@/firebase/firebaseConfig"
import { signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  }
  const register = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);

  }
  const logout = async () => {
    await signOut(auth);
  }
  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
