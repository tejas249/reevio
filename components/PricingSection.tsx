
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$10",
    description: "Perfect for creators getting started",
    features: [
      "Clean cuts & transitions",
      "1 revisions per video",
      "Standard delivery",
      "Basic color correction",
    ],
    buttonText: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$25",
    description: "For growing creators & businesses",
    features: [
      "Up to 1 videos",
      "3 revisions",
      "Color grading",
      "Advanced sound design",
      "Priority support",
    ],
    buttonText: "Choose Pro",
    highlighted: false,
  },
  {
    name: "Premium",
    price: "$50",
    description: "For brands & serious creators",
    features: [
      "Unlimited videos",
      "Color grading & correction",
      "Sound design",
      "Full motion graphics suite",
      "Thumbnail design included",
    ],
    buttonText: "Go Premium",
    highlighted: false,
  },
];

export default function PricingSection() {
  return (
    <div className="max-h-full">
      <section className="py-20 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`rounded-2xl shadow-lg border hover:shadow-2xl border-purple-400 ${
                plan.highlighted
                  ? "border-zinc-800 bg-zinc-900 text-white scale-105"
                  : "border-zinc-200 bg-white dark:bg-zinc-800 dark:border-zinc-700"
              } transition-all duration-300 hover:scale-105`}
            >
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">{plan.name}</CardTitle>
                <p className="mt-2 text-zinc-500 dark:text-zinc-400">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <h3 className="text-4xl font-bold mb-6">{plan.price}</h3>
                <ul className="space-y-3 text-left">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-6">
                <Button
                  variant={plan.highlighted ? "secondary" : "default"}
                  className="w-full font-semibold"
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}
