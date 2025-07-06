import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api";

export const useSkills = () => {
  return useQuery({
    queryKey: ['skills'],
    queryFn: async () => {
      return await apiClient.getSkills();
    },
  });
};

export const useUserSkills = () => {
  return useQuery({
    queryKey: ['user-skills'],
    queryFn: async () => {
      // This would need to be implemented in the backend
      return [];
    },
    enabled: false,
  });
};