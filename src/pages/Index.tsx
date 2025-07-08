
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoodTracker } from "@/components/MoodTracker";
import { PositivityFeed } from "@/components/PositivityFeed";
import { DailyPrompt } from "@/components/DailyPrompt";
import { QuickStats } from "@/components/QuickStats";
import { ExportModal } from "@/components/ExportModal";
import { Download, Sparkles } from "lucide-react";

const Index = () => {
  const [showExportModal, setShowExportModal] = useState(false);

  return (
    <div className="min-h-screen pb-24 px-4 pt-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-6 h-6 text-indigo-500" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Mindful Moments
            </h1>
          </div>
          <p className="text-gray-600">Your personal space for wellbeing and reflection</p>
        </div>

        {/* Quick Stats */}
        <QuickStats />

        {/* Daily Mood Tracker */}
        <Card className="bg-white/70 backdrop-blur border-0 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">How are you feeling today?</CardTitle>
          </CardHeader>
          <CardContent>
            <MoodTracker />
          </CardContent>
        </Card>

        {/* Daily Prompt */}
        <DailyPrompt />

        {/* Positivity Feed */}
        <Card className="bg-white/70 backdrop-blur border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-xl text-gray-800">Daily Inspiration</CardTitle>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowExportModal(true)}
              className="border-indigo-200 text-indigo-600 hover:bg-indigo-50"
            >
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </CardHeader>
          <CardContent>
            <PositivityFeed />
          </CardContent>
        </Card>

        <ExportModal open={showExportModal} onOpenChange={setShowExportModal} />
      </div>
    </div>
  );
};

export default Index;
