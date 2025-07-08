
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Activity, CheckCircle, Circle, Plus, Target } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Activities = () => {
  const [activities, setActivities] = useState([
    { id: 1, name: "Morning meditation", completed: true, category: "mindfulness", duration: "10 min" },
    { id: 2, name: "30-minute walk", completed: false, category: "exercise", duration: "30 min" },
    { id: 3, name: "Gratitude journaling", completed: true, category: "reflection", duration: "5 min" },
    { id: 4, name: "Deep breathing exercise", completed: false, category: "mindfulness", duration: "5 min" },
    { id: 5, name: "Read for pleasure", completed: false, category: "leisure", duration: "20 min" },
    { id: 6, name: "Call a friend", completed: true, category: "social", duration: "15 min" },
  ]);

  const toggleActivity = (id: number) => {
    setActivities(prev => 
      prev.map(activity => 
        activity.id === id 
          ? { ...activity, completed: !activity.completed }
          : activity
      )
    );
    
    const activity = activities.find(a => a.id === id);
    if (activity && !activity.completed) {
      toast({
        title: "Great job! 🎉",
        description: `You completed: ${activity.name}`,
      });
    }
  };

  const completedCount = activities.filter(a => a.completed).length;
  const totalCount = activities.length;

  const getCategoryColor = (category: string) => {
    const colors = {
      mindfulness: "bg-purple-100 text-purple-700",
      exercise: "bg-green-100 text-green-700",
      reflection: "bg-blue-100 text-blue-700",
      leisure: "bg-orange-100 text-orange-700",
      social: "bg-pink-100 text-pink-700",
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-700";
  };

  return (
    <div className="min-h-screen pb-24 px-4 pt-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Activity className="w-6 h-6 text-indigo-500" />
            <h1 className="text-3xl font-bold text-gray-800">Self-Care Activities</h1>
          </div>
          <p className="text-gray-600">Track your daily wellbeing activities</p>
        </div>

        {/* Progress Overview */}
        <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-green-100 p-3">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Today's Progress</h3>
                  <p className="text-gray-600">{completedCount} of {totalCount} activities completed</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-600">{Math.round((completedCount / totalCount) * 100)}%</div>
                <div className="text-sm text-gray-500">Complete</div>
              </div>
            </div>
            <div className="mt-4 bg-white/50 rounded-full h-2">
              <div 
                className="bg-green-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(completedCount / totalCount) * 100}%` }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Activities List */}
        <Card className="bg-white/70 backdrop-blur border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Today's Activities</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {activities.map((activity) => (
              <div 
                key={activity.id}
                className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-200 ${
                  activity.completed 
                    ? "bg-green-50 border border-green-200" 
                    : "bg-white border border-gray-200 hover:border-indigo-300"
                }`}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleActivity(activity.id)}
                  className="p-0 h-auto"
                >
                  {activity.completed ? (
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  ) : (
                    <Circle className="w-6 h-6 text-gray-400" />
                  )}
                </Button>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`font-medium ${activity.completed ? "text-green-700 line-through" : "text-gray-800"}`}>
                      {activity.name}
                    </span>
                    <Badge className={getCategoryColor(activity.category)}>
                      {activity.category}
                    </Badge>
                  </div>
                  <div className="text-sm text-gray-500">{activity.duration}</div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Add New Activity */}
        <Card className="bg-white/70 backdrop-blur border-0 shadow-lg">
          <CardContent className="p-6">
            <Button variant="outline" className="w-full border-dashed border-indigo-300 text-indigo-600 hover:bg-indigo-50">
              <Plus className="w-4 h-4 mr-2" />
              Add Custom Activity
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Activities;
