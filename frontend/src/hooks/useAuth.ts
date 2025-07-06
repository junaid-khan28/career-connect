import { useEffect, useState } from "react";
import { apiClient } from "@/lib/api";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  bio?: string;
  skills?: string[];
  experienceLevel?: string;
  avatarUrl?: string;
  resumeUrl?: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        apiClient.setToken(token);
        try {
          const response = await apiClient.getCurrentUser();
          setUser(response.user);
        } catch (error) {
          console.error('Auth initialization failed:', error);
          localStorage.removeItem('token');
          apiClient.setToken(null);
        }
      }
      setLoading(false);
    };

    initAuth();
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const response = await apiClient.signIn({ email, password });
      apiClient.setToken(response.token);
      setUser(response.user);
      return { error: null };
    } catch (error: any) {
      return { error: { message: error.message } };
    }
  };

  const signUp = async (email: string, password: string, firstName: string, lastName: string) => {
    try {
      const response = await apiClient.signUp({ firstName, lastName, email, password });
      apiClient.setToken(response.token);
      setUser(response.user);
      return { error: null };
    } catch (error: any) {
      return { error: { message: error.message } };
    }
  };

  const signOut = async () => {
    apiClient.setToken(null);
    setUser(null);
    return { error: null };
  };

  return {
    user,
    loading,
    signIn,
    signUp,
    signOut,
  };
};