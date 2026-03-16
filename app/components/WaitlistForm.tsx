"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error" | "duplicate";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [focused, setFocused] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message);
        setEmail("");
      } else if (res.status === 409) {
        setStatus("duplicate");
        setMessage(data.message);
      } else {
        setStatus("error");
        setMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please check your connection.");
    }
  };

  const isLoading = status === "loading";

  return (
    <div className="flex flex-col items-center gap-3">
      {status === "success" ? (
        /* ── Success State ── */
        <div
          style={{
            animation: "fadeIn 0.5s ease",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span style={{ fontSize: "2rem" }}>🎉</span>
          <p style={{ fontWeight: 600, fontSize: "1rem", color: "#111" }}>
            {message}
          </p>
          <p style={{ fontSize: "0.8rem", color: "#9ca3af" }}>
            We&apos;ll reach out as soon as we launch.
          </p>
        </div>
      ) : (
        /* ── Form State ── */
        <>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              background: "#fff",
              border: `1.5px solid ${focused ? "#111" : "#e5e7eb"}`,
              borderRadius: "9999px",
              padding: "5px 5px 5px 20px",
              boxShadow: focused
                ? "0 0 0 3px rgba(0,0,0,0.07)"
                : "0 1px 4px rgba(0,0,0,0.06)",
              transition: "border-color 0.2s ease, box-shadow 0.2s ease",
              width: "100%",
              maxWidth: "420px",
            }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="Enter your email address"
              required
              disabled={isLoading}
              aria-label="Email address for waitlist"
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                background: "transparent",
                fontSize: "0.875rem",
                color: "#111",
                minWidth: 0,
                fontFamily: "inherit",
              }}
            />
            <button
              type="submit"
              disabled={isLoading || !email.trim()}
              style={{
                borderRadius: "9999px",
                background: isLoading ? "#555" : "#111",
                color: "#fff",
                border: "none",
                padding: "10px 22px",
                fontSize: "0.8rem",
                fontWeight: 600,
                cursor: isLoading ? "not-allowed" : "pointer",
                whiteSpace: "nowrap",
                transition: "background 0.2s ease, transform 0.1s ease",
                letterSpacing: "0.01em",
                fontFamily: "inherit",
              }}
              onMouseEnter={(e) => {
                if (!isLoading) {
                  (e.currentTarget as HTMLButtonElement).style.background = "#333";
                }
              }}
              onMouseLeave={(e) => {
                if (!isLoading) {
                  (e.currentTarget as HTMLButtonElement).style.background = "#111";
                }
              }}
            >
              {isLoading ? "Joining…" : "Join the waitlist"}
            </button>
          </form>

          {/* Helper / Error text */}
          {status === "error" || status === "duplicate" ? (
            <p
              style={{
                fontSize: "0.75rem",
                color: status === "duplicate" ? "#f59e0b" : "#ef4444",
                marginTop: "2px",
              }}
            >
              {message}
            </p>
          ) : (
            <p style={{ fontSize: "0.75rem", color: "#9ca3af", marginTop: "2px" }}>
              No spam, ever. Unsubscribe anytime.
            </p>
          )}
        </>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
