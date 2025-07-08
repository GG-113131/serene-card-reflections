
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { BookOpen, Save, Calendar, Plus } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Journal = () => {
  const [currentEntry, setCurrentEntry] = useState("");
  const [entryTitle, setEntryTitle] = useState("");
  const [entries, setEntries] = useState([
    {
      id: 1,
      title: "A Beautiful Morning",
      date: "2024-01-15",
      preview: "Today I woke up feeling grateful for the sunshine streaming through my window...",
    },
    {
      id: 2,
      title: "Reflection on Growth",
      date: "2024-01-14",
      preview: "I've been thinking about how much I've changed this year...",
    },
  ]);

  const handleSave = () => {
    if (!currentEntry.trim()) return;
    
    const newEntry = {
      id: Date.now(),
      title: entryTitle || "Untitled Entry",
      date: new Date().toISOString().split('T')[0],
      preview: currentEntry.substring(0, 100) + "...",
    };
    
    setEntries([newEntry, ...entries]);
    setCurrentEntry("");
    setEntryTitle("");
    
    toast({
      title: "Entry saved!",
      description: "Your journal entry has been saved successfully.",
    });
  };

  return (
    <div className="min-h-screen pb-24 px-4 pt-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 mb-2">
            <BookOpen className="w-6 h-6 text-indigo-500" />
            <h1 className="text-3xl font-bold text-gray-800">Journal</h1>
          </div>
          <p className="text-gray-600">Your private space for thoughts and reflections</p>
        </div>

        {/* New Entry */}
        <Card className="bg-white/70 backdrop-blur border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800 flex items-center gap-2">
              <Plus className="w-5 h-5" />
              New Entry
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Entry title (optional)"
              value={entryTitle}
              onChange={(e) => setEntryTitle(e.target.value)}
              className="border-indigo-200 focus:border-indigo-400"
            />
            <Textarea
              placeholder="What's on your mind today? Write freely and let your thoughts flow..."
              value={currentEntry}
              onChange={(e) => setCurrentEntry(e.target.value)}
              className="min-h-40 border-indigo-200 focus:border-indigo-400 resize-none"
            />
            <Button 
              onClick={handleSave}
              disabled={!currentEntry.trim()}
              className="bg-indigo-600 hover:bg-indigo-700"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Entry
            </Button>
          </CardContent>
        </Card>

        {/* Previous Entries */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Previous Entries</h2>
          {entries.map((entry) => (
            <Card 
              key={entry.id} 
              className="bg-white/70 backdrop-blur border-0 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800">{entry.title}</h3>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    {entry.date}
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{entry.preview}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journal;
