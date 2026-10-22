"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Copy, ChevronDown, ChevronUp, Sparkles, Layers } from "lucide-react";
import type { JoyaPromptItem } from "@/lib/joya-prompts-data";

export async function safeCopyToClipboard(text: string): Promise<boolean> {
  if (typeof window === "undefined") return false;
  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // Fall back to execCommand below
  }
  try {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    textArea.style.top = "-9999px";
    textArea.setAttribute("readonly", "");
    document.body.appendChild(textArea);
    textArea.select();
    const success = document.execCommand("copy");
    document.body.removeChild(textArea);
    return success;
  } catch (err) {
    console.error("Error al copiar:", err);
    return false;
  }
}

export function JoyaCopyAllButton({ fullText }: { fullText: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopyAll = async () => {
    const ok = await safeCopyToClipboard(fullText);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopyAll}
      className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#d4b46a] text-[#0a0908] font-bold text-sm tracking-wide transition-all duration-200 hover:bg-[#e6cf96] active:scale-[0.98] shadow-[0_4px_20px_rgba(212,180,106,0.25)] focus:outline-none focus:ring-2 focus:ring-[#d4b46a] focus:ring-offset-2 focus:ring-offset-[#0a0908]"
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 text-[#0a0908] stroke-[2.5]" />
          <span>¡8 prompts copiados! ✓</span>
        </>
      ) : (
        <>
          <Layers className="w-4 h-4 text-[#0a0908] stroke-[2.5]" />
          <span>Copiar los 8 prompts</span>
        </>
      )}
    </button>
  );
}

export function JoyaPromptCard({ item, index }: { item: JoyaPromptItem; index: number }) {
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCopy = async () => {
    const ok = await safeCopyToClipboard(item.prompt);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <article
      id={`prompt-${item.id}`}
      className="rounded-[18px] bg-[rgba(20,17,14,0.9)] border border-[rgba(242,237,227,0.16)] p-5 sm:p-7 md:p-8 flex flex-col gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-sm transition-all duration-300 hover:border-[rgba(212,180,106,0.35)]"
    >
      {/* Header: Badge & Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-joya-mono font-bold uppercase tracking-wider bg-[#d4b46a]/15 text-[#d4b46a] border border-[#d4b46a]/40">
            {item.number}
          </span>
          <h3 className="font-joya-serif text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#f2ede3]">
            {item.title}
          </h3>
        </div>
        <p className="text-xs font-joya-mono text-[#b0a690] self-start sm:self-auto">
          {index + 1} de 8
        </p>
      </div>

      {/* Visual & Context Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-7 items-start">
        {/* Output Image (3:4 aspect) */}
        <div className="md:col-span-5 relative w-full aspect-[3/4] rounded-xl overflow-hidden border border-[rgba(242,237,227,0.12)] bg-[#120f0d]">
          <Image
            src={item.image}
            alt={item.alt}
            fill
            sizes="(max-width: 768px) 100vw, 420px"
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-[#0a0908]/80 backdrop-blur-md border border-[rgba(242,237,227,0.12)] text-[10px] font-joya-mono text-[#d4b46a] font-semibold uppercase tracking-wider">
            Resultado 4:5
          </div>
        </div>

        {/* Info & Prompt Block */}
        <div className="md:col-span-7 flex flex-col gap-4">
          {/* 1-Line Description */}
          <p className="text-sm sm:text-base text-[#e8e1d3] leading-relaxed font-normal">
            {item.description}
          </p>

          {/* Lo que controla */}
          <div className="rounded-xl bg-[#0a0908]/70 border border-[rgba(242,237,227,0.1)] p-3.5 sm:p-4">
            <p className="text-[11px] font-joya-mono uppercase tracking-[0.16em] text-[#b0a690] mb-2.5 flex items-center gap-1.5 font-bold">
              <Sparkles className="w-3 h-3 text-[#d4b46a]" />
              <span>Lo que controla</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {item.controls.map((ctrl, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-[11px] font-joya-mono text-[#b0a690] font-medium">
                    {ctrl.label}
                  </span>
                  <span className="text-xs sm:text-sm text-[#f2ede3] font-medium leading-snug">
                    {ctrl.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Prompt Container */}
          <div className="relative rounded-xl bg-[#0a0908] border border-[rgba(242,237,227,0.14)] overflow-hidden">
            {/* Prompt top bar */}
            <div className="flex items-center justify-between px-3.5 py-2.5 bg-[rgba(20,17,14,0.95)] border-b border-[rgba(242,237,227,0.08)]">
              <span className="text-[11px] font-joya-mono text-[#b0a690] uppercase tracking-wider">
                Prompt maestro (inglés)
              </span>
              <button
                type="button"
                onClick={handleCopy}
                aria-label={`Copiar prompt de ${item.title}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-joya-mono font-bold bg-[#d4b46a] text-[#0a0908] hover:bg-[#e6cf96] active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#d4b46a]"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span>Copiado ✓</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span>Copiar prompt</span>
                  </>
                )}
              </button>
            </div>

            {/* Code Content (collapsible on mobile) */}
            <div
              className={`p-3.5 sm:p-4 font-joya-mono text-xs text-[#e8e1d3] leading-relaxed select-all whitespace-pre-wrap transition-all duration-300 ${
                !isExpanded ? "max-h-[170px] overflow-hidden" : "max-h-none"
              }`}
            >
              {item.prompt}
            </div>

            {/* Fade overlay when collapsed */}
            {!isExpanded && (
              <div className="pointer-events-none absolute bottom-8 left-0 right-0 h-16 bg-gradient-to-t from-[#0a0908] to-transparent" />
            )}

            {/* Expand / Collapse toggle */}
            <div className="p-2 border-t border-[rgba(242,237,227,0.06)] bg-[#0a0908]/90 flex justify-center">
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-1.5 text-xs font-joya-mono text-[#d4b46a] hover:text-[#e6cf96] transition-colors py-1 px-3"
              >
                {isExpanded ? (
                  <>
                    <span>Ver menos</span>
                    <ChevronUp className="w-3.5 h-3.5" />
                  </>
                ) : (
                  <>
                    <span>Ver completo</span>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Optional Extra Note (for prompt 08) */}
          {item.extraNote && (
            <div className="p-3.5 rounded-xl bg-[#d4b46a]/10 border border-[#d4b46a]/30 text-xs text-[#f2ede3] leading-relaxed">
              <span className="font-semibold text-[#d4b46a] font-joya-mono mr-1.5">Nota:</span>
              {item.extraNote}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
