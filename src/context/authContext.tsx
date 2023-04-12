import { createContext, useEffect, useState } from "react";
import type { AuthResponse } from "@/types/response";

type AuthContextType = {
  user: AuthResponse | null;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthResponse | null>(null);

  useEffect(() => {
    if (typeof sessionStorage === 'undefined') {
      console.log('sessionStorage is not available')
    } else {
      const user = JSON.parse(sessionStorage.getItem('user') || 'null')

      setUser(user)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}