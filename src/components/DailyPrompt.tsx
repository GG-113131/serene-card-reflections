
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Lightbulb, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const prompts = [
  "What are three things you're grateful for today?",
  "Describe a moment today when you felt at peace.",
  "What's one thing you learned about yourself this week?",
  "How did you show kindness to yourself or others today?",
  "What would you tell your younger self right now?",
];

export const DailyPrompt = () => {
  const [response, setResponse] = useState("");
  const [currentPrompt] = useState(prompts[Math.floor(Math.random() * prompts.length)]);

  const handleSubmit = () => {
    if (response.trim()) {
      toast({
        title: "Reflection saved!",
        description: "Your thoughts have been recorded in your journal.",
      });
      setResponse("");
    }
  };

  return (
    <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl text-gray-800 flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-amber-500" />
          Daily Reflection
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-700 font-medium">{currentPrompt}</p>
        <Textarea
          placeholder="Share your thoughts..."
          value={response}
          onChange={(e) => setResponse(e.target.value)}
          className="min-h-24 border-amber-200 focus:border-amber-400 bg-white/50"
        />
        <Button 
          onClick={handleSubmit}
          disabled={!response.trim()}
          className="bg-amber-500 hover:bg-amber-600 text-white"
        >
          <Send className="w-4 h-4 mr-2" />
          Save Reflection
        </Button>
      </CardContent>
    </Card>
  );
};
