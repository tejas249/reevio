"use client";

import { motion } from "framer-motion";
import { Video, Sparkles, Scissors, Layers, Zap } from "lucide-react";
import { JSX } from "react";
interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      icon: <Video className="w-8 h-8 text-purple-500" />,
      title: "Short-Form Video Editing",
      description:
        "Perfect cuts, engaging pacing, and scroll-stopping transitions for Reels, Shorts, and TikToks.",
    },
    {
      icon: <Layers className="w-8 h-8 text-purple-500" />,
      title: "Motion Graphics & Text Effects",
      description:
        "Add dynamic captions, meme-style overlays, and smooth motion graphics that keep viewers hooked.",
    },
    {
      icon: <Scissors className="w-8 h-8 text-purple-500" />,
      title: "Content Repurposing",
      description:
        "Turn your long YouTube videos or podcasts into multiple short-form edits for all major platforms.",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-purple-500" />,
      title: "AI-Powered Enhancements",
      description:
        "Color grading, smart audio cleanup, and AI-driven cuts that make your content shine effortlessly.",
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: "Fast Delivery",
      description:
        "Receive your fully edited video within 48 hours — revisions included, at no extra cost.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100"
        >
          Our Editing Services
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
        >
          We help creators and brands turn raw clips into polished, viral-ready content —{" "}
          <span className="text-purple-500 font-medium">completely free.</span>
        </motion.p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 text-left shadow-sm hover:shadow-md hover:border-purple-400 transition-all bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <a
            href="#contact"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-8 rounded-full shadow-md transition-all"
          >
            Get Your Free Edit
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
