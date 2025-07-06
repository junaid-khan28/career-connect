
import { Home, Users, Briefcase, MessageSquare, Bell, Users2, Calendar, Hash, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const sidebarItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Users, label: "My Network", href: "/network" },
  { icon: Briefcase, label: "Jobs", href: "/jobs" },
  { icon: MessageSquare, label: "Messaging", href: "/messages" },
  { icon: Bell, label: "Notifications", href: "/notifications" },
  { icon: Users2, label: "Groups", href: "/groups" },
  { icon: Calendar, label: "Events", href: "/events" },
  { icon: Hash, label: "Followed Hashtags", href: "/hashtags" },
];

export const Sidebar = () => {
  return (
    <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <div className="p-6">
        <nav className="space-y-2">
          {sidebarItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <Link
            to="/settings"
            className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Settings className="w-5 h-5" />
            <span className="font-medium">Settings</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
