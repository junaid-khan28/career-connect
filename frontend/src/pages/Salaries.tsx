
import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, TrendingUp } from "lucide-react";

const salaryData = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Tech Companies",
    location: "San Francisco, CA",
    salary: "$120,000 - $180,000",
    experience: "3-5 years",
    trend: "up"
  },
  {
    id: 2,
    title: "Data Analyst",
    company: "Various Companies",
    location: "New York, NY",
    salary: "$70,000 - $110,000",
    experience: "2-4 years",
    trend: "up"
  },
  {
    id: 3,
    title: "Product Manager",
    company: "Tech Startups",
    location: "Remote",
    salary: "$130,000 - $200,000",
    experience: "5+ years",
    trend: "up"
  },
  {
    id: 4,
    title: "UX/UI Designer",
    company: "Design Agencies",
    location: "Los Angeles, CA",
    salary: "$80,000 - $130,000",
    experience: "3-5 years",
    trend: "up"
  }
];

const Salaries = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Salary Insights</h1>
          <p className="text-gray-600 mb-6">Explore salary ranges and compensation data for various roles.</p>
          
          {/* Search Bar */}
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input 
              placeholder="Search job titles"
              className="pl-12 py-3 bg-white border-gray-200"
            />
          </div>
        </div>
        
        {/* Salary Cards */}
        <div className="space-y-4">
          {salaryData.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 mb-1">{item.company}</p>
                    <p className="text-gray-500 text-sm">{item.location} • {item.experience}</p>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600 mb-2">{item.salary}</div>
                    <div className="flex items-center text-green-500 text-sm">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      <span>Trending up</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Want to share your salary?</h2>
              <p className="text-gray-600 mb-6">
                Help others by contributing anonymous salary information to our database.
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Add Salary Data
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Salaries;
