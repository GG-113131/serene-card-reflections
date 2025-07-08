
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Calendar, Target } from "lucide-react";

export const QuickStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="bg-white/70 backdrop-blur border-0 shadow-lg">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-green-100 p-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Mood Trend</p>
              <p className="text-lg font-semibold text-gray-800">Improving</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/70 backdrop-blur border-0 shadow-lg">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-blue-100 p-2">
              <Calendar className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Check-in Streak</p>
              <p className="text-lg font-semibold text-gray-800">7 days</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/70 backdrop-blur border-0 shadow-lg">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-purple-100 p-2">
              <Target className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Goals Met</p>
              <p className="text-lg font-semibold text-gray-800">4/5</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
