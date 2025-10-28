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
      "1 revision per video",
      "Standard delivery",
      "Basic color correction",
    ],
    buttonText: "Get Started",
  },
  {
    name: "Pro",
    price: "$25",
    description: "For growing creators & businesses",
    features: [
      "Up to 1 video per week",
      "3 revisions",
      "Color grading",
      "Advanced sound design",
      "Priority support",
    ],
    buttonText: "Choose Pro",
  },
  {
    name: "Premium",
    price: "$50",
    description: "For brands & serious creators",
    features: [
      "Unlimited videos",
      "Full color grading & correction",
      "Sound design",
      "Motion graphics suite",
      "Thumbnail design included",
    ],
    buttonText: "Go Premium",
  },
];

export default function PricingSection() {
  return (
    <section className="py-10 bg-gradient-to-b from-background to-muted/40 dark:from-zinc-900 dark:to-zinc-950">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-purple-700 dark:text-purple-400 mb-9">
          Pricing Plans
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-zinc-900 dark:text-white">
                  {plan.name}
                </CardTitle>
                <p className="mt-2 text-zinc-500 dark:text-zinc-400">
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent>
                <h3 className="text-4xl font-bold mb-6 text-purple-700 dark:text-purple-400">
                  {plan.price}
                </h3>

                <ul className="space-y-3 text-left">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-zinc-700 dark:text-zinc-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="mt-6">
                <Button className="w-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-all duration-300">
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
