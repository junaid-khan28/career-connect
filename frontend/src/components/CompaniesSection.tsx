import { useCompanies } from "@/hooks/useCompanies";
import { Link } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";

export const CompaniesSection = () => {
  const { data: companies, isLoading, error } = useCompanies();

  if (isLoading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Companies hiring now</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-32 rounded-lg" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Companies hiring now</h2>
          <p className="text-center text-red-500">Error loading companies. Please try again later.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Companies hiring now</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {companies?.slice(0, 6).map((company) => (
            <Link 
              key={company.id}
              to="/companies"
              className="bg-gradient-to-br from-green-600 to-green-800 rounded-lg p-8 flex items-center justify-center hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2">
                  {company.logoUrl ? (
                    <img 
                      src={company.logoUrl} 
                      alt={company.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  ) : (
                    <span className="text-white font-bold text-lg">
                      {company.name.charAt(0)}
                    </span>
                  )}
                </div>
                <span className="text-white text-sm font-medium">COMPANY</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
