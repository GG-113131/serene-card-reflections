
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Phone, ExternalLink, BookOpen, Users, Headphones } from "lucide-react";

const Resources = () => {
  const emergencyResources = [
    {
      title: "Crisis Text Line",
      description: "24/7 crisis support via text message",
      contact: "Text HOME to 741741",
      icon: Phone,
      urgent: true,
    },
    {
      title: "National Suicide Prevention Lifeline",
      description: "Free and confidential support 24/7",
      contact: "988 or 1-800-273-8255",
      icon: Phone,
      urgent: true,
    },
  ];

  const supportResources = [
    {
      title: "Mindfulness Meditation Guide",
      description: "Learn breathing techniques and meditation practices",
      icon: BookOpen,
      category: "Self-Help",
    },
    {
      title: "Anxiety and Depression Toolkit",
      description: "Evidence-based coping strategies and exercises",
      icon: Heart,
      category: "Mental Health",
    },
    {
      title: "Sleep Hygiene Tips",
      description: "Improve your sleep quality with proven techniques",
      icon: BookOpen,
      category: "Wellness",
    },
    {
      title: "Support Groups Near You",
      description: "Find local and online support communities",
      icon: Users,
      category: "Community",
    },
    {
      title: "Guided Relaxation Audio",
      description: "Calming audio sessions for stress relief",
      icon: Headphones,
      category: "Audio",
    },
  ];

  return (
    <div className="min-h-screen pb-24 px-4 pt-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Heart className="w-6 h-6 text-red-500" />
            <h1 className="text-3xl font-bold text-gray-800">Resources & Support</h1>
          </div>
          <p className="text-gray-600">Professional help and self-care resources</p>
        </div>

        {/* Emergency Resources */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 text-center">🚨 Need Immediate Help?</h2>
          {emergencyResources.map((resource, index) => (
            <Card key={index} className="bg-red-50 border-red-200 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-red-100 p-3">
                    <resource.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{resource.title}</h3>
                    <p className="text-gray-600 mb-2">{resource.description}</p>
                    <div className="font-medium text-red-700">{resource.contact}</div>
                  </div>
                  <Button className="bg-red-600 hover:bg-red-700">
                    <Phone className="w-4 h-4 mr-2" />
                    Contact
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Support Resources */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Support & Learning</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {supportResources.map((resource, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur border-0 shadow-lg hover:shadow-xl transition-all duration-200">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-800 flex items-center gap-2">
                    <div className="rounded-full bg-indigo-100 p-2">
                      <resource.icon className="w-5 h-5 text-indigo-600" />
                    </div>
                    {resource.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
                      {resource.category}
                    </span>
                    <Button variant="outline" size="sm" className="border-indigo-200 text-indigo-600 hover:bg-indigo-50">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Access
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Professional Help */}
        <Card className="bg-blue-50 border-blue-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800 text-center">🎯 Ready for Professional Support?</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-600">
              Sometimes we need extra support, and that's completely okay. 
              Professional therapists and counselors are here to help.
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Find a Therapist
              </Button>
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                Online Counseling Options
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Resources;
