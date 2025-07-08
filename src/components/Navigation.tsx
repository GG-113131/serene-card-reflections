
import { Home, BookOpen, Activity, Heart, BarChart3 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: BookOpen, label: "Journal", href: "/journal" },
    { icon: Activity, label: "Activities", href: "/activities" },
    { icon: Heart, label: "Resources", href: "/resources" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-indigo-100 p-4">
      <div className="flex justify-around max-w-md mx-auto">
        {navItems.map(({ icon: Icon, label, href }) => (
          <Link
            key={href}
            to={href}
            className={cn(
              "flex flex-col items-center gap-1 p-2 rounded-xl transition-all duration-200",
              location.pathname === href
                ? "text-indigo-600 bg-indigo-50"
                : "text-gray-500 hover:text-indigo-500 hover:bg-indigo-50/50"
            )}
          >
            <Icon className="w-5 h-5" />
            <span className="text-xs font-medium">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};
