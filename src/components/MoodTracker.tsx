
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

const moods = [
  { emoji: "😢", label: "Very Sad", color: "bg-blue-100 hover:bg-blue-200", value: 1 },
  { emoji: "😕", label: "Sad", color: "bg-blue-50 hover:bg-blue-100", value: 2 },
  { emoji: "😐", label: "Neutral", color: "bg-gray-100 hover:bg-gray-200", value: 3 },
  { emoji: "🙂", label: "Good", color: "bg-green-50 hover:bg-green-100", value: 4 },
  { emoji: "😊", label: "Great", color: "bg-green-100 hover:bg-green-200", value: 5 },
];

export const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [recentMoods, setRecentMoods] = useState([4, 3, 5, 2, 4]);

  const handleMoodSelect = (mood: number) => {
    setSelectedMood(mood);
    const newMoods = [mood, ...recentMoods.slice(0, 4)];
    setRecentMoods(newMoods);
    toast({
      title: "Mood logged!",
      description: "Thank you for sharing how you're feeling today.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-5 gap-3">
        {moods.map((mood) => (
          <Button
            key={mood.value}
            variant="ghost"
            className={`h-20 flex flex-col gap-2 rounded-xl transition-all duration-200 ${mood.color} ${
              selectedMood === mood.value ? "ring-2 ring-indigo-400 scale-105" : ""
            }`}
            onClick={() => handleMoodSelect(mood.value)}
          >
            <span className="text-2xl">{mood.emoji}</span>
            <span className="text-xs font-medium text-gray-700">{mood.label}</span>
          </Button>
        ))}
      </div>

      {/* Recent Mood History */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-gray-600">Recent 5 days</h4>
        <div className="flex gap-2">
          {recentMoods.map((moodValue, index) => {
            const mood = moods.find(m => m.value === moodValue);
            return (
              <Card key={index} className="flex items-center justify-center w-12 h-12 border-0 bg-white/50">
                <span className="text-lg">{mood?.emoji}</span>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};
