
import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, BookOpen, Clock, User } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "How to Ace Your Next Job Interview",
    excerpt: "Essential tips and strategies to prepare for and succeed in job interviews across different industries.",
    author: "Sarah Johnson",
    readTime: "5 min read",
    category: "Interview Tips",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80"
  },
  {
    id: 2,
    title: "Building a Strong Professional Network",
    excerpt: "Learn how to expand your professional network and leverage connections for career growth.",
    author: "Michael Chen",
    readTime: "8 min read",
    category: "Networking",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80"
  },
  {
    id: 3,
    title: "Negotiating Your Salary: A Complete Guide",
    excerpt: "Master the art of salary negotiation with proven strategies and real-world examples.",
    author: "Emily Rodriguez",
    readTime: "12 min read",
    category: "Salary",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80"
  },
  {
    id: 4,
    title: "Remote Work Best Practices",
    excerpt: "Tips for staying productive and maintaining work-life balance in a remote work environment.",
    author: "David Kim",
    readTime: "6 min read",
    category: "Remote Work",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80"
  }
];

const CareerAdvice = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Career Advice</h1>
          <p className="text-gray-600 mb-6">Expert insights and tips to advance your career.</p>
          
          {/* Search Bar */}
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input 
              placeholder="Search articles"
              className="pl-12 py-3 bg-white border-gray-200"
            />
          </div>
        </div>
        
        {/* Featured Article */}
        <Card className="mb-8">
          <CardContent className="p-0">
            <div className="md:flex">
              <div 
                className="md:w-1/3 h-48 md:h-auto bg-cover bg-center"
                style={{ backgroundImage: `url(${articles[0].image})` }}
              />
              <div className="md:w-2/3 p-8">
                <div className="text-sm text-blue-600 font-medium mb-2">{articles[0].category}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{articles[0].title}</h2>
                <p className="text-gray-600 mb-4">{articles[0].excerpt}</p>
                <div className="flex items-center text-gray-500 text-sm">
                  <User className="w-4 h-4 mr-1" />
                  <span className="mr-4">{articles[0].author}</span>
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{articles[0].readTime}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Articles Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.slice(1).map((article) => (
            <Card key={article.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${article.image})` }}
                />
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-medium mb-2">{article.category}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-4">{article.author}</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Categories */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Interview Tips", "Networking", "Salary", "Remote Work", "Career Growth", "Skills Development", "Leadership", "Industry Insights"].map((category) => (
              <Card key={category} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-medium text-gray-900">{category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerAdvice;
