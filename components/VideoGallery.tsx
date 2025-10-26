"use client";
import React from "react";

const videos = [
  {
    id: 1,
    title: "Promo Reel 2025",
    src: "https://www.youtube.com/embed/YOUR_VIDEO_ID_1",
  },
  {
    id: 2,
    title: "Client Ad Edit",
    src: "https://www.youtube.com/embed/YOUR_VIDEO_ID_2",
  },
  {
    id: 3,
    title: "Cinematic Montage",
    src: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3",
  },
  {
    id: 4,
    title: "Corporate Film",
    src: "https://www.youtube.com/embed/YOUR_VIDEO_ID_4",
  },
];

const VideoGallery = () => {
  return (
    <section className="py-20 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-14">
          Our Work
        </h2>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group rounded-xl overflow-hidden bg-card shadow-xl hover:shadow-2xl border border-border transition-all duration-300 hover:scale-[1.02]"
            >
           
              <div className="aspect-video relative overflow-hidden">
                <iframe
                  src={video.src}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>

      
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default VideoGallery;
