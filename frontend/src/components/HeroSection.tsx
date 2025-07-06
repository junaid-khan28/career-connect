
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-100 to-gray-200 py-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")`
        }}
      />
      
      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          Find the right job or internship for you
        </h1>
        <p className="text-xl text-white mb-8 drop-shadow">
          Search from millions of job openings from companies of all sizes, from startups to Fortune 500s.
        </p>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto">
          <div className="flex bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                placeholder="Job title or keyword"
                className="pl-12 pr-4 py-4 border-0 text-lg focus:ring-0 focus:outline-none"
              />
            </div>
            <Button className="px-8 py-4 text-lg bg-blue-600 hover:bg-blue-700">
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
