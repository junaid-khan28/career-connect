import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api";

export const useJobs = () => {
  return useQuery({
    queryKey: ['jobs'],
    queryFn: async () => {
      return await apiClient.getJobs();
    },
  });
};

export const useFeaturedJobs = () => {
  return useQuery({
    queryKey: ['featured-jobs'],
    queryFn: async () => {
      return await apiClient.getJobs({ featured: true, limit: 3 });
    },
  });
};

export const useJob = (id: string) => {
  return useQuery({
    queryKey: ['job', id],
    queryFn: async () => {
      return await apiClient.getJob(id);
    },
  });
};