"use client";

import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/Logo";
import { getLang } from "@/lib/lang-config";

const betaCodeRequired = process.env.NEXT_PUBLIC_BETA_CODE_REQUIRED !== "false";

export default function AuthPage() {
  const { data: session, status } = useSession();
  const [mode, setMode] = useState<"login" | "signup">("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [showCodeRequest, setShowCodeRequest] = useState(false);
  const [requestEmail, setRequestEmail] = useState("");
  const [requestMessage, setRequestMessage] = useState("");
  const [requestLoading, setRequestLoading] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  if (status === "loading") return null;
  if (session) {
    router.push("/home");
    return null;
  }

  const verifyCode = async (value: string): Promise<boolean> => {
    try {
      const res = await fetch(`/api/beta/verify?code=${encodeURIComponent(value.trim())}`);
      const data = await res.json();
      return data.valid === true;
    } catch {
      return false;
    }
  };

  const handleRequestCode = async () => {
    if (!requestEmail.trim()) return;
    setRequestLoading(true);
    setRequestMessage("");
    try {
      const res = await fetch("/api/beta/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: requestEmail }),
      });
      const data = await res.json();
      setRequestMessage(data.message || data.error || "Something went wrong — please try again.");
    } catch {
      setRequestMessage("Something went wrong — please try again.");
    }
    setRequestLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (mode === "signup" && betaCodeRequired) {
      const trimmedCode = code.trim();
      if (!trimmedCode) {
        setError("Enter your access code — it's free during beta.");
        return;
      }
      setLoading(true);
      const valid = await verifyCode(trimmedCode);
      if (!valid) {
        setLoading(false);
        setError("Invalid access code");
        return;
      }
    }

    setLoading(true);

    const result = await signIn("credentials", {
      email,
      password,
      mode,
      ...(mode === "signup" ? { code } : {}),
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      setError(mode === "signup" ? "Email already in use" : "Invalid email or password");
      return;
    }

    if (mode === "signup") {
      window.location.href = "/onboarding/welcome";
    } else {
      router.push("/home");
    }
  };

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col overflow-x-hidden selection:bg-secondary-container selection:text-on-secondary-container">
      <header className="relative z-10 w-full flex flex-col items-center py-12">
        <Logo size={100} className="" />
        <h1 className="text-2xl font-bold text-primary" style={{ fontFamily: "Manrope, sans-serif" }}>
          CanGo
        </h1>
      </header>
      <main className="relative z-10 flex-grow flex items-center justify-center px-4 md:px-0 pb-16">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-outline-variant/30" style={{ boxShadow: "0 0 40px 10px rgba(19, 27, 46, 0.03)" }}>
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-on-surface mb-2" style={{ fontFamily: "Manrope, sans-serif" }}>
                {mode === "signup" ? "Create your account" : "Welcome back"}
              </h2>
              <p className="text-on-surface-variant" style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", lineHeight: "24px" }}>
                {mode === "signup" ? "Unlock your linguistic potential today." : `Continue your ${getLang().label} journey.`}
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-on-surface mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border border-outline-variant bg-surface-container-lowest text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-fixed transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-on-surface mb-1.5">Password</label>
                <input
                  type="password"
                  required
                  placeholder={mode === "signup" ? "Create a password" : "Enter your password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border border-outline-variant bg-surface-container-lowest text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-fixed transition-all"
                />
              </div>

              {mode === "signup" && betaCodeRequired && (
                <div>
                  <label className="block text-sm font-medium text-on-surface mb-1.5">Access code</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your access code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl border border-outline-variant bg-surface-container-lowest text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-fixed transition-all"
                  />
                  <p className="mt-1.5 text-xs text-on-surface-variant">
                    0€ free access — enter the code you were given.
                  </p>

                  <div className="mt-3">
                    <button
                      type="button"
                      onClick={() => { setShowCodeRequest(!showCodeRequest); setRequestMessage(""); }}
                      className="text-xs text-primary font-bold hover:underline"
                    >
                      Don&apos;t have a code yet?
                    </button>
                  </div>

                  {showCodeRequest && (
                    <div className="mt-3 space-y-3 p-4 bg-surface-container-low rounded-xl border border-outline-variant/40">
                      <p className="text-xs text-on-surface-variant">
                        Drop your email and we&apos;ll get you an access code.
                      </p>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        value={requestEmail}
                        onChange={(e) => setRequestEmail(e.target.value)}
                        onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); handleRequestCode(); } }}
                        className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-fixed transition-all"
                      />
                      <label className="flex items-start gap-2 text-[11px] text-on-surface-variant">
                        <input type="checkbox" className="mt-0.5" />
                        <span>We&apos;ll use your email to send your access code and occasionally update you about CanGo. Unsubscribe anytime.</span>
                      </label>
                      <button
                        type="button"
                        disabled={requestLoading}
                        onClick={handleRequestCode}
                        className="w-full h-10 flex items-center justify-center gap-2 bg-primary text-on-primary rounded-xl font-semibold transition-all hover:bg-primary-container disabled:opacity-60"
                      >
                        <span>{requestLoading ? "Sending..." : "Request access code"}</span>
                      </button>
                      {requestMessage && (
                        <p className="text-xs text-center text-green-600">{requestMessage}</p>
                      )}
                    </div>
                  )}
                </div>
              )}

              {error && (
                <p className="text-sm text-error text-center">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full h-14 flex items-center justify-center gap-3 bg-primary text-on-primary rounded-xl font-semibold transition-all duration-200 hover:bg-primary-container active:scale-[0.98] focus:ring-2 focus:ring-primary-fixed focus:outline-none shadow-lg shadow-primary/20 disabled:opacity-60"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", lineHeight: "24px" }}
              >
                <span className="material-symbols-outlined text-xl">mail</span>
                <span>{loading ? "Please wait..." : mode === "signup" ? "Create Account" : "Log In"}</span>
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-on-surface-variant" style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", lineHeight: "24px" }}>
                {mode === "signup" ? (
                  <>Already have an account?{" "}</>
                ) : (
                  <>Don&apos;t have an account?{" "}</>
                )}
                <button
                  type="button"
                  onClick={() => { setMode(mode === "signup" ? "login" : "signup"); setError(""); }}
                  className="text-primary font-bold hover:underline ml-1"
                >
                  {mode === "signup" ? "Log In" : "Sign Up"}
                </button>
              </p>
            </div>

            {mode === "signup" && (
              <div className="mt-10 pt-8 border-t border-outline-variant/20">
                <p className="text-center text-xs leading-relaxed text-on-surface-variant" style={{ fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.05em" }}>
                  By signing up, you agree to our <br />
                  <a href="#" className="text-primary font-bold hover:underline">Terms</a> and <a href="#" className="text-primary font-bold hover:underline">Privacy Policy</a>.
                </p>
              </div>
            )}
          </div>

          <div className="mt-12 flex justify-center opacity-40">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-primary/20"></div>
            </div>
          </div>
        </div>
      </main>
      <footer className="relative z-10 py-8 text-center">
        <p className="text-xs text-outline" style={{ fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.05em" }}>&copy; 2024 CanGo Education. All rights reserved.</p>
      </footer>
    </div>
  );
}
