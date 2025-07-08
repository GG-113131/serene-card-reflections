
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Star, Sun } from "lucide-react";

const positiveContent = [
  {
    type: "quote",
    content: "You are braver than you believe, stronger than you seem, and smarter than you think.",
    author: "A.A. Milne",
    icon: Star,
  },
  {
    type: "affirmation", 
    content: "Today I choose peace over worry, and trust over fear.",
    icon: Heart,
  },
  {
    type: "reminder",
    content: "Remember to take deep breaths. You're doing better than you think.",
    icon: Sun,
  },
  {
    type: "quote",
    content: "The only way out is through, and the only way through is together.",
    author: "Robert Frost (adapted)",
    icon: Star,
  },
];

export const PositivityFeed = () => {
  return (
    <div className="space-y-4 max-h-80 overflow-y-auto">
      {positiveContent.map((item, index) => (
        <Card 
          key={index} 
          className="border-0 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-all duration-200 cursor-pointer"
        >
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-white/70 p-2 mt-1">
                <item.icon className="w-4 h-4 text-purple-600" />
              </div>
              <div className="flex-1">
                <p className="text-gray-700 leading-relaxed">{item.content}</p>
                {item.author && (
                  <p className="text-sm text-gray-500 mt-2 italic">— {item.author}</p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
