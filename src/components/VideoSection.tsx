import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Play, Edit3, Save, X } from "lucide-react";

// Simple admin state - in production this would connect to your database
const VideoSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [videoUrl, setVideoUrl] = useState("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  const [tempUrl, setTempUrl] = useState(videoUrl);

  // Convert YouTube URL to embed format
  const getEmbedUrl = (url: string) => {
    const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/);
    return videoId ? `https://www.youtube.com/embed/${videoId[1]}` : "";
  };

  const handleSave = () => {
    setVideoUrl(tempUrl);
    setIsEditing(false);
    // In production, this would save to your database
  };

  const handleCancel = () => {
    setTempUrl(videoUrl);
    setIsEditing(false);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Admin Controls */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Experience Chirumhanzu
              </h2>
              <p className="text-muted-foreground text-lg">
                Watch our promotional video to see the beauty and culture of Chirumhanzu
              </p>
            </div>
            
            {!isEditing ? (
              <Button 
                onClick={() => setIsEditing(true)}
                variant="outline"
                size="sm"
                className="gap-2"
              >
                <Edit3 className="h-4 w-4" />
                Edit Video
              </Button>
            ) : (
              <div className="flex gap-2">
                <Button 
                  onClick={handleSave}
                  size="sm"
                  className="gap-2"
                >
                  <Save className="h-4 w-4" />
                  Save
                </Button>
                <Button 
                  onClick={handleCancel}
                  variant="outline"
                  size="sm"
                  className="gap-2"
                >
                  <X className="h-4 w-4" />
                  Cancel
                </Button>
              </div>
            )}
          </div>

          {/* Admin Video URL Input */}
          {isEditing && (
            <div className="mb-6 p-4 bg-card rounded-lg border">
              <label className="block text-sm font-medium text-card-foreground mb-2">
                YouTube Video URL:
              </label>
              <Input
                type="url"
                value={tempUrl}
                onChange={(e) => setTempUrl(e.target.value)}
                placeholder="https://www.youtube.com/watch?v=..."
                className="w-full"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Paste any YouTube video URL (watch, share, or embed format)
              </p>
            </div>
          )}

          {/* Video Player */}
          <div className="relative bg-gradient-to-br from-hero to-primary rounded-2xl p-8 shadow-[var(--shadow-adventure)]">
            <div className="relative aspect-video rounded-lg overflow-hidden bg-muted/20 backdrop-blur-sm">
              {getEmbedUrl(videoUrl) ? (
                <iframe
                  src={getEmbedUrl(videoUrl)}
                  title="Chirumhanzu Tourism Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-hero-foreground">
                  <div className="text-center">
                    <Play className="h-20 w-20 mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-medium">No video configured</p>
                    <p className="text-sm opacity-75">Click "Edit Video" to add a YouTube video</p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Video Overlay Info */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-hero-foreground/10 backdrop-blur-md rounded-lg p-4 text-hero-foreground">
                <h3 className="font-semibold text-lg mb-2">Discover Chirumhanzu's Beauty</h3>
                <p className="text-sm opacity-90">
                  From sacred hills to cultural traditions, experience the authentic spirit of Zimbabwe
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;