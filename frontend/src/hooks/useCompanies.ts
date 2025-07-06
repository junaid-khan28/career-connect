import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api";

export const useCompanies = () => {
  return useQuery({
    queryKey: ['companies'],
    queryFn: async () => {
      return await apiClient.getCompanies();
    },
  });
};