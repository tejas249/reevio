import React from "react";

const About = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-6 md:px-16 py-20">
      
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-center mb-6">
        About <span className="text-primary">Reevio</span>
      </h1>

    
      <p className="max-w-3xl text-center text-muted-foreground text-lg md:text-xl leading-relaxed">
        Reevio is a creative video editing agency built to help brands, creators, and
        businesses tell their stories through captivating visuals. From corporate
        explainers to YouTube edits, we turn raw footage into polished, scroll-stopping
        content — crafted with precision, storytelling, and design.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 w-full max-w-4xl">
        {[
          { number: "100+", label: "Videos Edited", color: "text-primary" },
          { number: "50+", label: "Clients Served", color: "text-secondary" },
          { number: "5★", label: "Average Rating", color: "text-accent" },
        ].map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center bg-card shadow-sm rounded-xl p-8 transition hover:shadow-md border border-border"
          >
            <h3 className={`text-3xl font-bold mb-1 ${item.color}`}>{item.number}</h3>
            <p className="text-muted-foreground">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-lg text-muted-foreground mb-4">
          Want to collaborate or get your videos professionally edited?
        </p>
        <a
          href="/form"
          className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition"
        >
          Let’s Connect →
        </a>
      </div>
    </section>
  );
};

export default About;
