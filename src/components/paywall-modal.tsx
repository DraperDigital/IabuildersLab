"use client"

import { useState } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";

interface PaywallModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    contentType?: "system" | "prompt" | "automation";
}

export function PaywallModal({ open, onOpenChange, contentType = "system" }: PaywallModalProps) {
    const [email, setEmail] = useState("");
    const t = useTranslations('Paywall');

    const handleContinue = () => {
        // TODO: Handle email submission / redirect to signup
        console.log("Email submitted:", email);
    };

    const handleGoogleSignIn = () => {
        // TODO: Handle Google OAuth
        console.log("Google sign in clicked");
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-7xl sm:max-w-7xl p-0 gap-0 overflow-hidden border-2 border-purple-500/50">
                <div className="grid md:grid-cols-2">
                    {/* Left Side - Form */}
                    <div className="p-8 bg-white dark:bg-slate-900 relative">
                        <DialogHeader className="mb-6">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                                {t('title')}
                            </h2>
                            <p className="text-slate-600 dark:text-slate-300 text-sm">
                                {t('subtitle')}
                            </p>
                        </DialogHeader>

                        <div className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">
                                    Email Address
                                </label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="your@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full"
                                />
                            </div>

                            <Button
                                onClick={handleContinue}
                                className="w-full tech-gradient glow-effect font-semibold"
                                size="lg"
                            >
                                Continue
                            </Button>

                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <span className="w-full border-t border-slate-300 dark:border-slate-600" />
                                </div>
                                <div className="relative flex justify-center text-xs uppercase">
                                    <span className="bg-white dark:bg-slate-900 px-2 text-slate-500">or</span>
                                </div>
                            </div>

                            <Button
                                onClick={handleGoogleSignIn}
                                variant="outline"
                                className="w-full"
                                size="lg"
                            >
                                <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    />
                                </svg>
                                Continue with Google
                            </Button>

                            <p className="text-xs text-slate-500 dark:text-slate-400 text-center mt-4">
                                {t('privacyNote')}
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Value Proposition */}
                    <div className="p-8 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-700 text-white relative overflow-hidden">
                        {/* Animated background effect */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
                            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl animate-pulse delay-1000" />
                        </div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                <span className="text-xs font-semibold">IA Builders Lab</span>
                            </div>

                            <h3 className="text-3xl font-bold mb-4">
                                {t('valueTitle')}
                            </h3>

                            <p className="text-purple-100 mb-6 text-sm leading-relaxed">
                                {t('valueDescription')}
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                                        <span className="text-lg">🤖</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">{t('benefit1Title')}</h4>
                                        <p className="text-sm text-purple-100">{t('benefit1Desc')}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                                        <span className="text-lg">⚡</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">{t('benefit2Title')}</h4>
                                        <p className="text-sm text-purple-100">{t('benefit2Desc')}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                                        <span className="text-lg">🚀</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">{t('benefit3Title')}</h4>
                                        <p className="text-sm text-purple-100">{t('benefit3Desc')}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/20">
                                <p className="text-sm text-purple-100">
                                    <span className="font-semibold text-white">1,000+</span> {t('socialProof')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
