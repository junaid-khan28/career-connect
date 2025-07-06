
import { useParams } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ApplicationModal } from "@/components/ApplicationModal";
import { useJob } from "@/hooks/useJobs";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import { AuthModal } from "@/components/AuthModal";

const JobDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: job, isLoading, error } = useJob(id!);
  const { user } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleApplyClick = () => {
    if (!user) {
      setShowAuthModal(true);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Skeleton className="h-6 w-64 mb-6" />
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <Skeleton className="h-8 w-3/4 mb-2" />
                  <Skeleton className="h-6 w-1/2 mb-6" />
                  <Skeleton className="h-64 w-full" />
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <Skeleton className="h-12 w-full mb-4" />
                  <Skeleton className="h-4 w-3/4" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 py-8">
          <p className="text-center text-red-500">Error loading job details. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-6">
            Jobs / {job.companies?.industry || 'General'} / {job.title}
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
                  <p className="text-lg text-gray-600 mb-6">
                    {job.companies?.name} • {job.location}
                    {job.remote && " • Remote"}
                  </p>
                  
                  {/* Tabs */}
                  <div className="border-b border-gray-200 mb-8">
                    <nav className="flex space-x-8">
                      <button className="border-b-2 border-black pb-2 text-sm font-medium">About</button>
                      <button className="text-gray-500 pb-2 text-sm font-medium">Reviews</button>
                      <button className="text-gray-500 pb-2 text-sm font-medium">Salaries</button>
                    </nav>
                  </div>
                  
                  {/* Job Description */}
                  <div className="space-y-8">
                    <section>
                      <h2 className="text-xl font-semibold text-gray-900 mb-4">About the job</h2>
                      <p className="text-gray-700 leading-relaxed">
                        {job.description}
                      </p>
                    </section>
                    
                    {job.responsibilities && (
                      <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Responsibilities</h2>
                        <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                          {job.responsibilities}
                        </div>
                      </section>
                    )}
                    
                    {job.requirements && (
                      <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Requirements</h2>
                        <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                          {job.requirements}
                        </div>
                      </section>
                    )}

                    {job.required_skills && job.required_skills.length > 0 && (
                      <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Required Skills</h2>
                        <div className="flex flex-wrap gap-2">
                          {job.required_skills.map((skill, index) => (
                            <span 
                              key={index}
                              className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </section>
                    )}
                    
                    {job.companies?.description && (
                      <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">About {job.companies.name}</h2>
                        <p className="text-gray-700 leading-relaxed">
                          {job.companies.description}
                        </p>
                      </section>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 text-center">
                  {user ? (
                    <ApplicationModal jobId={job.id} jobTitle={job.title}>
                      <Button size="lg" className="w-full mb-4">
                        Apply Now
                      </Button>
                    </ApplicationModal>
                  ) : (
                    <Button size="lg" className="w-full mb-4" onClick={handleApplyClick}>
                      Apply Now
                    </Button>
                  )}
                  <p className="text-sm text-gray-500">
                    Join our team and make an impact
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Job Details</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Location:</span>
                      <span className="text-gray-900">{job.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Type:</span>
                      <span className="text-gray-900">{job.job_type || 'Full-time'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Experience:</span>
                      <span className="text-gray-900">{job.experience_level}</span>
                    </div>
                    {job.salary_min && job.salary_max && (
                      <div className="flex justify-between">
                        <span className="text-gray-500">Salary:</span>
                        <span className="text-gray-900">
                          ${job.salary_min.toLocaleString()} - ${job.salary_max.toLocaleString()}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-gray-500">Posted:</span>
                      <span className="text-gray-900">
                        {new Date(job.created_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
      />
    </>
  );
};

export default JobDetail;
