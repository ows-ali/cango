"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { TeacherAvatar } from "./TeacherAvatar";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface Props {
  context?: { experienceId?: number };
  welcomeMessage?: string;
  placeholder?: string;
  suggestions?: string[];
}

type TtsLang = "it-IT" | "de-DE";

function speak(text: string, lang: TtsLang, onEnd?: () => void) {
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = 0.9;
  utterance.pitch = 1.1;
  const voices = window.speechSynthesis.getVoices();
  const voice = voices.find(v => v.lang.startsWith(lang.slice(0, 2)));
  if (voice) utterance.voice = voice;
  if (onEnd) utterance.onend = onEnd;
  window.speechSynthesis.speak(utterance);
}

function stopSpeaking() {
  window.speechSynthesis.cancel();
}

function stripTranslations(text: string): string {
  return text.replace(/\s*\([^)]*\)/g, "");
}

export function ChatUI({ context, welcomeMessage, placeholder, suggestions }: Props) {
  const [messages, setMessages] = useState<Message[]>(() => {
    const initial: Message[] = [];
    if (welcomeMessage) {
      initial.push({ role: "assistant", content: welcomeMessage });
    } else {
      initial.push({
        role: "assistant",
        content: "Ciao! I'm your Italian tutor. Ask me anything — practice conversation, grammar, or vocabulary. "
          + (context?.experienceId ? "I see you just finished an experience — want to roleplay it together?" : ""),
      });
    }
    return initial;
  });
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [listening, setListening] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);
  const [ttsLang, setTtsLang] = useState<TtsLang>("it-IT");
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim() || loading) return;

    const userMsg: Message = { role: "user", content: text.trim() };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updated.slice(-10).map(m => ({ role: m.role, content: m.content })),
          context,
        }),
      });

      if (!res.ok) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "Sorry, something went wrong. Please try again." },
        ]);
        setLoading(false);
        return;
      }

      const reader = res.body!.getReader();
      const decoder = new TextDecoder();
      let reply = "";

      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        reply += decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const copy = [...prev];
          copy[copy.length - 1] = { role: "assistant", content: reply };
          return copy;
        });
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, something went wrong. Please try again." },
      ]);
    }
    setLoading(false);
  }, [messages, loading, context]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const handleMic = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setInput((prev) => prev + "[Speech not supported in this browser] ");
      return;
    }

    if (listening) return;

    const recognition = new SpeechRecognition();
    recognition.lang = "it-IT";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInput((prev) => prev + transcript);
      inputRef.current?.focus();
    };
    recognition.onerror = () => setListening(false);

    recognition.start();
  };

  const handlePlay = (text: string) => {
    if (speaking) {
      stopSpeaking();
      setSpeaking(false);
    } else {
      setSpeaking(true);
      speak(text, ttsLang, () => setSpeaking(false));
    }
  };

  return (
    <div className="flex flex-col h-full min-h-[400px]">
      {/* Toolbar */}
      <div className="flex items-center gap-2 pb-2 border-b border-outline-variant/20 mb-2">
        <button
          onClick={() => setShowTranslation(!showTranslation)}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
            showTranslation
              ? "bg-primary text-on-primary"
              : "bg-surface-container-high text-on-surface-variant"
          }`}
        >
          <span className="material-symbols-outlined text-sm">translate</span>
          {showTranslation ? "Translations On" : "Translations Off"}
        </button>
        <button
          onClick={() => setTtsLang(ttsLang === "it-IT" ? "de-DE" : "it-IT")}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
            ttsLang === "de-DE"
              ? "bg-primary text-on-primary"
              : "bg-surface-container-high text-on-surface-variant"
          }`}
        >
          <span className="material-symbols-outlined text-sm">volume_up</span>
          {ttsLang === "it-IT" ? "IT" : "DE"}
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-3 px-1" style={{ scrollbarWidth: "thin" }}>
        {messages.map((msg, i) => {
          const displayContent = msg.role === "assistant" && !showTranslation
            ? stripTranslations(msg.content)
            : msg.content;
          return (
            <div key={i} className={`flex gap-2 items-start ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              {msg.role === "assistant" && (
                <TeacherAvatar size={32} className="shrink-0 mt-1" />
              )}
              <div
                className={`relative group max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-primary text-on-primary rounded-br-md shadow-sm"
                    : "bg-surface-container-high text-on-surface rounded-bl-md shadow-sm"
                }`}
              >
                <p>{displayContent}</p>
                {msg.role === "assistant" && (
                  <div className="absolute -bottom-5 right-0 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => handlePlay(msg.content)}
                      className="text-xs text-primary"
                      title={speaking ? "Stop" : "Listen"}
                    >
                      <span className="material-symbols-outlined text-sm">{speaking ? "stop" : "play_arrow"}</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {loading && (
          <div className="flex gap-2 items-start justify-start">
            <TeacherAvatar size={32} className="shrink-0" />
            <div className="bg-surface-container-high rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}

        <div ref={endRef} />
      </div>

      {/* Suggestions */}
      {suggestions && suggestions.length > 0 && !loading && (
        <div className="flex flex-wrap gap-2 pt-2 pb-1">
          {suggestions.map((s, i) => (
            <button
              key={i}
              onClick={() => sendMessage(s)}
              className="px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-medium border border-outline-variant/30 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="flex items-center gap-2 pt-3 border-t border-outline-variant/20 mt-2">
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder || "Type a message... (press Enter to send)"}
          disabled={loading}
          className="flex-1 px-4 py-2.5 rounded-xl border border-outline-variant bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50"
        />
        <button
          onClick={handleMic}
          disabled={loading}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all shrink-0 ${
            listening
              ? "bg-error text-on-error animate-pulse"
              : "bg-surface-container-high text-on-surface-variant hover:bg-primary/10 hover:text-primary"
          } disabled:opacity-50`}
          title="Speak in Italian"
        >
          <span className="material-symbols-outlined text-lg">
            {listening ? "mic" : "mic_none"}
          </span>
        </button>
        <button
          onClick={() => sendMessage(input)}
          disabled={!input.trim() || loading}
          className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-50 shadow-sm shrink-0"
        >
          <span className="material-symbols-outlined text-lg">send</span>
        </button>
      </div>
    </div>
  );
}