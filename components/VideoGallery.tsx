"use client";
import React from "react";

const videos = [
  { id: 1, title: "Real Estate Promo", src: "https://youtu.be/0qdmOGkuuwk" },
  { id: 2, title: "Cinematic Gym Promo", src: "https://youtu.be/_NVjXGDimn4" },
  { id: 3, title: "Cinematic Property Video", src: "https://youtu.be/giwFI73FxNY" },
  { id: 4, title: "Cooking Videos", src: "https://youtu.be/Ad9uylA8u1k" },
  { id: 5, title: "Travel Vlog", src: "https://youtube.com/shorts/BtDUVawmnDA" },
];

function getYouTubeEmbedUrl(url: string): string | null {
  if (!url) return null;
 
  const shortMatch = url.match(/youtu\.be\/([^\?&/]+)/);
  if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}?rel=0&modestbranding=1&playsinline=1`;

 
  const watchMatch = url.match(/[?&]v=([^&]+)/);
  if (watchMatch) return `https://www.youtube.com/embed/${watchMatch[1]}?rel=0&modestbranding=1&playsinline=1`;


  const embedMatch = url.match(/youtube\.com\/embed\/([^\?&/]+)/);
  if (embedMatch) return `https://www.youtube.com/embed/${embedMatch[1]}?rel=0&modestbranding=1&playsinline=1`;


  const shortsMatch = url.match(/\/shorts\/([^\?&/]+)/);
  if (shortsMatch) return `https://www.youtube.com/embed/${shortsMatch[1]}?rel=0&modestbranding=1&playsinline=1`;

  return null;
}

export default function VideoGallery() {
  return (
    <section className="py-20 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-14">
          Our Work
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {videos.map((video) => {
            const embedUrl = getYouTubeEmbedUrl(video.src);
            return (
              <div
                key={video.id}
                className="group rounded-xl overflow-hidden bg-card shadow-xl hover:shadow-2xl border border-border transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="aspect-video relative overflow-hidden bg-black">
                  {embedUrl ? (
                    <iframe
                      src={embedUrl}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                      className="w-full h-full"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <a
                        href={video.src}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary underline"
                      >
                        Open video
                      </a>
                    </div>
                  )}
                </div>

                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {video.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
