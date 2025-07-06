import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ResumeUpload } from "@/components/ResumeUpload";
import { useCreateJobApplication } from "@/hooks/useJobApplications";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

interface ApplicationModalProps {
  jobId: string;
  jobTitle: string;
  children: React.ReactNode;
}

export const ApplicationModal = ({ jobId, jobTitle, children }: ApplicationModalProps) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [coverLetter, setCoverLetter] = useState("");
  const [resumeUrl, setResumeUrl] = useState("");
  
  const createApplication = useCreateJobApplication();

  const handleSubmit = async () => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to apply for jobs.",
        variant: "destructive",
      });
      return;
    }

    if (!resumeUrl) {
      toast({
        title: "Resume required",
        description: "Please upload your resume before submitting your application.",
        variant: "destructive",
      });
      return;
    }

    try {
      console.log('Submitting application with:', { jobId, coverLetter, resumeUrl });
      await createApplication.mutateAsync({
        jobId,
        coverLetter: coverLetter || undefined,
        resumeUrl: resumeUrl || undefined,
      });

      toast({
        title: "Application submitted!",
        description: "Your application has been sent to the employer.",
      });

      setOpen(false);
      setCoverLetter("");
      setResumeUrl("");
    } catch (error: any) {
      console.error('Error submitting application:', error);
      let description = error?.message || error?.toString() || "There was an error submitting your application. Please try again.";
      if (error?.response) {
        // If error is a fetch Response object
        error.response.json().then((data: any) => {
          if (data?.message) {
            description = data.message;
          } else if (data?.errors && Array.isArray(data.errors)) {
            description = data.errors.map((e: any) => e.msg).join("; ");
          }
          toast({
            title: "Application failed",
            description,
            variant: "destructive",
          });
        });
      } else if (error?.errors && Array.isArray(error.errors)) {
        description = error.errors.map((e: any) => e.msg).join("; ");
        toast({
          title: "Application failed",
          description,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Application failed",
          description,
          variant: "destructive",
        });
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Apply for {jobTitle}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <ResumeUpload 
            onResumeUploaded={setResumeUrl}
            currentResumeUrl={resumeUrl}
          />
          
          <div>
            <Label htmlFor="cover-letter">Cover Letter (Optional)</Label>
            <Textarea
              id="cover-letter"
              placeholder="Tell the employer why you're interested in this position and what makes you a great fit..."
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
              className="min-h-[120px] mt-2"
            />
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button 
              onClick={handleSubmit}
              disabled={createApplication.isPending}
              className="flex-1"
            >
              {createApplication.isPending ? "Submitting..." : "Submit Application"}
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
