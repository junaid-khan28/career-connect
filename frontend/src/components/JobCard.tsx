
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface JobCardProps {
  job: {
    id: string;
    title: string;
    company: string;
    location: string;
    image: string;
  };
}

export const JobCard = ({ job }: JobCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex gap-6">
          <div className="w-32 h-20 bg-cover bg-center rounded-lg flex-shrink-0" 
               style={{ backgroundImage: `url(${job.image})` }} />
          
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
            <p className="text-gray-600 mb-1">{job.company}</p>
            <p className="text-gray-500 text-sm mb-4">{job.location}</p>
          </div>
          
          <div className="flex-shrink-0">
            <Link to={`/jobs/${job.id}`}>
              <Button>Apply Now</Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
