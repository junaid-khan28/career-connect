
import { Navigation } from "@/components/Navigation";
import { Sidebar } from "@/components/Sidebar";
import { ApplicationsTable } from "@/components/ApplicationsTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">SB</span>
                </div>
                <h1 className="text-2xl font-bold text-gray-900">Sophia Bennett</h1>
              </div>
            </div>
            
            {/* Tabs */}
            <Tabs defaultValue="applications" className="w-full">
              <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
                <TabsTrigger value="all">All Jobs</TabsTrigger>
                <TabsTrigger value="applications">My Jobs</TabsTrigger>
                <TabsTrigger value="alerts">Job Alerts</TabsTrigger>
                <TabsTrigger value="salary">Salary</TabsTrigger>
              </TabsList>
              
              <TabsContent value="applications" className="mt-8">
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900">My applications</h2>
                  <ApplicationsTable />
                </div>
              </TabsContent>
              
              <TabsContent value="all">
                <div className="text-center py-12">
                  <p className="text-gray-500">All Jobs content coming soon...</p>
                </div>
              </TabsContent>
              
              <TabsContent value="alerts">
                <div className="text-center py-12">
                  <p className="text-gray-500">Job Alerts content coming soon...</p>
                </div>
              </TabsContent>
              
              <TabsContent value="salary">
                <div className="text-center py-12">
                  <p className="text-gray-500">Salary information coming soon...</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
