import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, FileText, X } from "lucide-react";
import { apiClient } from "@/lib/api";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

interface ResumeUploadProps {
  onResumeUploaded?: (url: string) => void;
  currentResumeUrl?: string;
}

export const ResumeUpload = ({ onResumeUploaded, currentResumeUrl }: ResumeUploadProps) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [uploading, setUploading] = useState(false);
  const [resumeUrl, setResumeUrl] = useState(currentResumeUrl || "");

  const uploadResume = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }

    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to upload your resume.",
        variant: "destructive",
      });
      return;
    }

    const file = event.target.files[0];
    
    // Validate file type
    if (!file.type.includes('pdf') && !file.type.includes('doc') && !file.type.includes('docx')) {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF, DOC, or DOCX file.",
        variant: "destructive",
      });
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload a file smaller than 5MB.",
        variant: "destructive",
      });
      return;
    }

    setUploading(true);

    try {
      const response = await apiClient.uploadResume(file);
      
      setResumeUrl(response.resumeUrl);
      onResumeUploaded?.(response.resumeUrl);

      toast({
        title: "Resume uploaded successfully!",
        description: "Your resume has been saved to your profile.",
        variant: "default",
      });
    } catch (error: any) {
      console.error('Error uploading resume:', error);
      toast({
        title: "Upload failed",
        description: error.message || "There was an error uploading your resume. Please try again.",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  const removeResume = async () => {
    try {
      // Update user profile to remove resume URL
      await apiClient.updateUserProfile({ resumeUrl: null });
      
      setResumeUrl("");
      onResumeUploaded?.("");

      toast({
        title: "Resume removed",
        description: "Your resume has been removed from your profile.",
      });
    } catch (error: any) {
      console.error('Error removing resume:', error);
      toast({
        title: "Error removing resume",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="w-5 h-5" />
          Resume Upload
        </CardTitle>
      </CardHeader>
      <CardContent>
        {resumeUrl ? (
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-green-600" />
              <span className="text-sm text-gray-700">Resume uploaded</span>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(`http://localhost:5000${resumeUrl}`, '_blank')}
              >
                View
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={removeResume}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <Label htmlFor="resume-upload" className="block mb-2">
              Upload your resume (PDF, DOC, DOCX - Max 5MB)
            </Label>
            <Label
              htmlFor="resume-upload"
              className="block border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors cursor-pointer"
            >
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <Input
                id="resume-upload"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={uploadResume}
                disabled={uploading}
                className="hidden"
              />
              <span className="text-sm text-gray-600 hover:text-gray-800">
                {uploading ? "Uploading..." : "Click to upload or drag and drop"}
              </span>
            </Label>
          </div>
        )}
      </CardContent>
    </Card>
  );
};