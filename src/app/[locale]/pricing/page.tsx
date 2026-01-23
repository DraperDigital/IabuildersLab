import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Zap, Crown } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "@/components/ui/card";
import { PublicHeader } from "@/components/public-header";

const pricingPlans = [
    {
        name: "Free Preview",
        price: "$0",
        period: "forever",
        description: "Perfect to explore the content",
        icon: Sparkles,
        features: [
            "5 free preview systems",
            "Basic prompt templates",
            "Community access",
            "Email support"
        ],
        cta: "Get Started",
        featured: false,
        gradient: "from-gray-500 to-gray-600"
    },
    {
        name: "Access",
        price: "$29",
        period: "month",
        description: "For individuals building with AI",
        icon: Zap,
        features: [
            "All systems unlocked",
            "All prompts & automations",
            "Private Discord community",
            "Priority email support",
            "Monthly live workshops"
        ],
        cta: "Start Trial",
        featured: true,
        gradient: "from-purple-500 to-blue-500"
    },
    {
        name: "Plus",
        price: "$79",
        period: "month",
        description: "For teams scaling AI operations",
        icon: Crown,
        features: [
            "Everything in Access",
            "Exclusive advanced systems",
            "Team collaboration tools",
            "1-on-1 implementation calls",
            "Custom automation builds"
        ],
        cta: "Contact Sales",
        featured: false,
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        name: "Pro",
        price: "$199",
        period: "month",
        description: "For agencies & enterprises",
        icon: Crown,
        features: [
            "Everything in Plus",
            "White-label licensing",
            "Dedicated account manager",
            "Custom system development",
            "Unlimited team seats"
        ],
        cta: "Contact Sales",
        featured: false,
        gradient: "from-pink-500 to-purple-500"
    }
];

export default function PricingPage() {
    return (
        <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 grid-pattern opacity-20"></div>

            <PublicHeader />

            <main className="relative z-10 container mx-auto py-16 px-4">
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-2 border border-purple-500/30 mb-6">
                        <Zap className="h-4 w-4 text-purple-400" />
                        <span className="text-sm font-medium text-purple-300">Simple, Transparent Pricing</span>
                    </div>

                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                        Choose Your Plan
                    </h1>
                    <p className="text-xl text-purple-200">
                        Unlock the complete library of AI systems, prompts, and automation blueprints.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {pricingPlans.map((plan) => {
                        const Icon = plan.icon;
                        return (
                            <Card
                                key={plan.name}
                                className={`relative overflow-hidden transition-all hover:scale-105 border-purple-500/30 hover:border-purple-500/60 glass-effect ${plan.featured ? 'ring-2 ring-purple-500 scale-105' : ''
                                    }`}
                            >
                                {plan.featured && (
                                    <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-semibold px-4 py-1 rounded-bl-lg">
                                        Most Popular
                                    </div>
                                )}

                                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${plan.gradient}`}></div>

                                <CardHeader className="relative z-10">
                                    <div className={`rounded-full w-12 h-12 bg-gradient-to-r ${plan.gradient} p-0.5 mb-4`}>
                                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                                            <Icon className="h-6 w-6 text-purple-600" />
                                        </div>
                                    </div>
                                    <CardTitle className="text-2xl text-slate-900 font-bold">{plan.name}</CardTitle>
                                    <CardDescription className="text-slate-600 text-base">{plan.description}</CardDescription>
                                    <div className="mt-4">
                                        <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                                        <span className="text-slate-600 text-lg">/{plan.period}</span>
                                    </div>
                                </CardHeader>

                                <CardContent className="relative z-10">
                                    <ul className="space-y-3">
                                        {plan.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-2">
                                                <Check className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-slate-700 font-medium">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>

                                <CardFooter className="relative z-10">
                                    <Link
                                        href={plan.name === "Free Preview" ? "/signup" : `/checkout?plan=${plan.name.toLowerCase()}`}
                                        className="w-full"
                                    >
                                        <Button
                                            className={`w-full text-white font-semibold ${plan.featured ? 'tech-gradient glow-effect' : 'bg-purple-500/50 border-2 border-purple-400 hover:bg-purple-500/60'} transition-all`}
                                        >
                                            {plan.cta}
                                        </Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                        );
                    })}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-purple-300 mb-4">All plans include a 14-day money-back guarantee. Cancel anytime.</p>
                    <div className="flex justify-center gap-8 text-sm text-purple-400">
                        <div className="flex items-center gap-2">
                            <Check className="h-4 w-4" />
                            Secure Payment
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="h-4 w-4" />
                            All Cards Accepted
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="h-4 w-4" />
                            Money-Back Guarantee
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
