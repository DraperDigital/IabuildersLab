import { Link } from "@/i18n/routing";
import { Sparkles, Facebook, Instagram } from "lucide-react";

export function SiteFooter() {
    return (
        <footer className="border-t border-purple-500/20 bg-slate-950/50 glass-effect relative z-40">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="md:col-span-1">
                        <Link href="/" className="font-bold text-xl text-white flex items-center gap-2 mb-4">
                            <Sparkles className="h-6 w-6 text-purple-400" />
                            IA Builders Lab
                        </Link>
                        <p className="text-sm text-purple-200/80 leading-relaxed">
                            Empowering creators with AI-driven workflows, prompts, and systems for the next generation of builders.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Platform</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/systems" className="text-sm text-purple-200/80 hover:text-purple-400 transition-colors">
                                    Systems
                                </Link>
                            </li>
                            <li>
                                <Link href="/prompts" className="text-sm text-purple-200/80 hover:text-purple-400 transition-colors">
                                    Prompts
                                </Link>
                            </li>
                            <li>
                                <Link href="/automations" className="text-sm text-purple-200/80 hover:text-purple-400 transition-colors">
                                    Automations
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="text-sm text-purple-200/80 hover:text-purple-400 transition-colors">
                                    Pricing
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/copy-library" className="text-sm text-purple-200/80 hover:text-purple-400 transition-colors">
                                    Copy Library
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-sm text-purple-200/80 hover:text-purple-400 transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/docs" className="text-sm text-purple-200/80 hover:text-purple-400 transition-colors">
                                    Documentation
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/privacy" className="text-sm text-purple-200/80 hover:text-purple-400 transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-sm text-purple-200/80 hover:text-purple-400 transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-purple-500/20 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-purple-200/60">
                        © {new Date().getFullYear()} IA Builders Lab. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <a href="https://www.facebook.com/profile.php?id=61586839284137" target="_blank" rel="noopener noreferrer" className="text-purple-200/60 hover:text-purple-400 transition-colors">
                            <Facebook className="h-5 w-5" />
                        </a>
                        <a href="https://www.instagram.com/iabuilderslab/" target="_blank" rel="noopener noreferrer" className="text-purple-200/60 hover:text-purple-400 transition-colors">
                            <Instagram className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
