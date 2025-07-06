import { Navigation } from "@/components/Navigation";
import { JobFilters } from "@/components/JobFilters";
import { JobCard } from "@/components/JobCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useJobs } from "@/hooks/useJobs";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";

const Jobs = () => {
  const { data: jobs, isLoading, error } = useJobs();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = jobs?.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.companies?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <div className="w-80 flex-shrink-0">
            <JobFilters />
          </div>
          
          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Job Openings</h1>
              <p className="text-gray-600 mb-6">Explore opportunities that match your skills and experience.</p>
              
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input 
                  placeholder="Search for jobs"
                  className="pl-12 py-3 bg-white border-gray-200"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            {/* Job Listings */}
            <div className="space-y-6">
              {isLoading ? (
                // Loading skeleton
                Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow">
                    <div className="flex gap-6">
                      <Skeleton className="w-32 h-20 rounded-lg" />
                      <div className="flex-1">
                        <Skeleton className="h-6 w-3/4 mb-2" />
                        <Skeleton className="h-4 w-1/2 mb-1" />
                        <Skeleton className="h-4 w-1/3 mb-4" />
                      </div>
                      <Skeleton className="w-24 h-10" />
                    </div>
                  </div>
                ))
              ) : error ? (
                <p className="text-center text-red-500">Error loading jobs. Please try again later.</p>
              ) : filteredJobs?.length === 0 ? (
                <p className="text-center text-gray-500">No jobs found matching your search.</p>
              ) : (
                filteredJobs?.map((job) => (
                  <JobCard 
                    key={job._id || job.id} 
                    job={{
                      id: job._id || job.id,
                      title: job.title,
                      company: job.companies?.name || 'Unknown Company',
                      location: job.location || 'Remote',
                      image: job.companies?.logoUrl || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80'
                    }}
                  />
                ))
              )}
            </div>
            
            {/* Pagination */}
            {filteredJobs && filteredJobs.length > 0 && (
              <div className="flex justify-center items-center space-x-2 mt-12">
                <button className="px-3 py-2 text-gray-500">‹</button>
                <button className="px-3 py-2 bg-blue-600 text-white rounded">1</button>
                <button className="px-3 py-2 text-gray-500 hover:bg-gray-100 rounded">2</button>
                <button className="px-3 py-2 text-gray-500 hover:bg-gray-100 rounded">3</button>
                <button className="px-3 py-2 text-gray-500 hover:bg-gray-100 rounded">4</button>
                <button className="px-3 py-2 text-gray-500 hover:bg-gray-100 rounded">5</button>
                <button className="px-3 py-2 text-gray-500">›</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
