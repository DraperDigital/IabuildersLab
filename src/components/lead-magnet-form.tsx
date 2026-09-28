"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { captureLead } from "@/actions/leads";
import { ArrowRight, CheckCircle2, Download, Loader2, Sparkles } from "lucide-react";

export function LeadMagnetForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (!email || !email.includes("@")) {
            setError("Por favor ingresa un correo válido.");
            return;
        }

        setLoading(true);

        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("tag", "lead-realismo");

        try {
            const res = await captureLead(formData);
            if (!res.success) {
                setError(res.error || "Ocurrió un error. Intenta de nuevo.");
                setLoading(false);
                return;
            }

            // Redirect to thank-you / delivery page with lead-realismo type
            router.push("/thanks?type=lead-realismo");
        } catch (err) {
            console.error("Lead submission error:", err);
            // Even if an unexpected error occurs, don't block the user
            router.push("/thanks?type=lead-realismo");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                    <label htmlFor="lead-name" className="sr-only">Tu nombre</label>
                    <input
                        id="lead-name"
                        type="text"
                        placeholder="Tu nombre (opcional)"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border border-purple-500/20 text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20 text-sm transition-all"
                    />
                </div>
                <div>
                    <label htmlFor="lead-email" className="sr-only">Tu correo electrónico</label>
                    <input
                        id="lead-email"
                        type="email"
                        required
                        placeholder="Tu correo electrónico *"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border border-purple-500/20 text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20 text-sm transition-all"
                    />
                </div>
            </div>

            {error && (
                <p className="text-red-400 text-xs text-left">{error}</p>
            )}

            <Button
                type="submit"
                disabled={loading}
                className="w-full h-14 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-base rounded-xl transition-all shadow-lg shadow-purple-900/40 hover:shadow-purple-700/50 flex items-center justify-center gap-2 group cursor-pointer"
            >
                {loading ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Enviando guía...</span>
                    </>
                ) : (
                    <>
                        <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                        <span>Descargar gratis la Fase 01 (PDF)</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </>
                )}
            </Button>

            <div className="flex items-center justify-center gap-2 text-slate-500 text-xs text-center pt-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Entrega inmediata · 0 spam · Respetamos tu privacidad</span>
            </div>
        </form>
    );
}
