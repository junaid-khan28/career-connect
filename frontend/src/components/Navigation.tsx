
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Bell, User, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { AuthModal } from "./AuthModal";
import { useAuth } from "@/hooks/useAuth";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export const Navigation = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <>
      <nav className="bg-white border-b border-gray-200 px-4 lg:px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo - Now links to CareerConnect */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">CC</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">CareerConnect</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/jobs" className="text-gray-700 hover:text-gray-900 font-medium">Jobs</Link>
            <Link to="/companies" className="text-gray-700 hover:text-gray-900 font-medium">Companies</Link>
            <Link to="/salaries" className="text-gray-700 hover:text-gray-900 font-medium">Salaries</Link>
            <Link to="/career-advice" className="text-gray-700 hover:text-gray-900 font-medium">Career Advice</Link>
          </div>

          {/* Search and User Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input 
                  placeholder="Search" 
                  className="pl-10 w-64 bg-gray-50 border-gray-200"
                />
              </div>
            </div>
            
            <Link to="/post-job">
              <Button variant="outline" size="sm">
                Post a Job
              </Button>
            </Link>
            
            {user ? (
              <div className="flex items-center space-x-2">
                <Bell className="w-5 h-5 text-gray-500" />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="w-8 h-8 rounded-full bg-orange-400 text-white">
                      <User className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link to="/dashboard">Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleSignOut}>
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setIsAuthModalOpen(true)}
                className="flex items-center space-x-2"
              >
                <User className="w-4 h-4" />
                <span>Sign In</span>
              </Button>
            )}
          </div>
        </div>
      </nav>
      
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </>
  );
};
