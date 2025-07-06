import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Users } from "lucide-react";
import { useCompanies } from "@/hooks/useCompanies";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";

const Companies = () => {
  const { data: companies, isLoading, error } = useCompanies();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCompanies = companies?.filter(company => 
    company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.industry?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.location?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Companies</h1>
          <p className="text-gray-600 mb-6">Discover companies and explore career opportunities.</p>
          
          {/* Search Bar */}
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input 
              placeholder="Search companies"
              className="pl-12 py-3 bg-white border-gray-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        {/* Companies Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Skeleton className="w-16 h-16 rounded-lg" />
                    <div className="flex-1">
                      <Skeleton className="h-6 w-3/4 mb-2" />
                      <Skeleton className="h-4 w-1/2 mb-2" />
                      <Skeleton className="h-4 w-1/3 mb-3" />
                      <Skeleton className="h-16 w-full mb-3" />
                      <Skeleton className="h-4 w-2/3" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : error ? (
            <p className="col-span-full text-center text-red-500">Error loading companies. Please try again later.</p>
          ) : filteredCompanies?.length === 0 ? (
            <p className="col-span-full text-center text-gray-500">No companies found matching your search.</p>
          ) : (
            filteredCompanies?.map((company) => (
              <Card key={company.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div 
                      className="w-16 h-16 bg-cover bg-center rounded-lg flex-shrink-0 flex items-center justify-center bg-gray-200"
                      style={company.logoUrl ? { backgroundImage: `url(${company.logoUrl})` } : {}}
                    >
                      {!company.logoUrl && (
                        <span className="text-gray-600 font-semibold text-lg">
                          {company.name.charAt(0)}
                        </span>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{company.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">{company.industry}</p>
                      <div className="flex items-center text-gray-500 text-sm mb-3">
                        <Users className="w-4 h-4 mr-1" />
                        <span>{company.sizeRange || 'Size not specified'}</span>
                      </div>
                      <p className="text-gray-700 text-sm mb-3 line-clamp-3">{company.description}</p>
                      <p className="text-gray-500 text-sm">{company.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Companies;
