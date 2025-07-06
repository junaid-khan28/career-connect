import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/api";
import { useAuth } from "@/hooks/useAuth";

export const useJobApplications = () => {
  const { user } = useAuth();
  
  return useQuery({
    queryKey: ['job-applications', user?.id],
    queryFn: async () => {
      return await apiClient.getApplications();
    },
    enabled: !!user,
  });
};

export const useCreateJobApplication = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  
  return useMutation({
    mutationFn: async ({ jobId, coverLetter, resumeUrl }: {
      jobId: string;
      coverLetter?: string;
      resumeUrl?: string;
    }) => {
      if (!user) throw new Error('User not authenticated');
      
      return await apiClient.createApplication({ jobId, coverLetter, resumeUrl });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['job-applications'] });
    },
  });
};