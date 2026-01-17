import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface VideoSectionProps {
  youtubeUrl?: string;
}

const VideoSection = ({ youtubeUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ" }: VideoSectionProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Extract video ID from various YouTube URL formats
  const getEmbedUrl = (url: string) => {
    if (url.includes('embed')) return url;
    const videoId = url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([\w-]{11})/)?.[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-sm font-medium text-accent mb-3">
            Watch & Learn
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            See ClaimSecure in Action
          </h2>
          <p className="text-muted-foreground text-lg">
            Watch our step-by-step video tutorial to understand exactly how the 
            claims process works—from document upload to resolution.
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-large bg-primary/5">
            {!isPlaying ? (
              <div 
                className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                onClick={() => setIsPlaying(true)}
              >
                {/* Thumbnail overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary/60" />
                
                {/* Play button */}
                <Button 
                  size="xl" 
                  className="relative z-10 h-20 w-20 rounded-full bg-cta text-cta-foreground hover:bg-cta/90 shadow-large group-hover:scale-110 transition-transform"
                >
                  <Play className="h-8 w-8 ml-1" fill="currentColor" />
                </Button>

                {/* Text overlay */}
                <div className="absolute bottom-8 left-0 right-0 text-center text-primary-foreground">
                  <p className="font-serif text-xl font-semibold">Complete Walkthrough Tutorial</p>
                  <p className="text-sm opacity-80 mt-1">Duration: 8 minutes</p>
                </div>
              </div>
            ) : (
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`${getEmbedUrl(youtubeUrl)}?autoplay=1`}
                title="ClaimSecure Tutorial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>

        {/* Additional help links */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Button variant="outline" size="lg">
            View All Tutorials
          </Button>
          <Button variant="ghost" size="lg">
            Download PDF Guide
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
