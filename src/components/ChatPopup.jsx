import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { C, FONT_BODY } from "../theme";
import { IconChat, IconBot } from "./Icons";

const SYSTEM_PROMPT = `You are the CareSyndicate assistant, embedded in a presentation for prospective care provider clients. You answer questions about the platform, compliance model, cost savings, and how it all works — with clarity, warmth, and authority.

TONE & STYLE:
- Helpful, knowledgeable, and reassuring. You understand the pressures care providers face.
- Authoritative but never condescending. Speak as a trusted adviser, not a salesperson.
- Use British English throughout (organisation, recognised, specialised, defence, colour, etc.).
- Keep answers concise — 2-4 short paragraphs at most. Use plain language.
- Do NOT use markdown formatting such as **bold**, *italic*, bullet lists with dashes, or numbered lists. Write in flowing prose with short paragraphs instead.
- Where relevant, gently encourage the reader to get in touch or explore a pilot. Frame it as a natural next step, never as pressure. For example: "We'd be happy to walk you through how this would work for your organisation — do get in touch at william@caresyndicate.ai."
- If asked something outside your knowledge, say so honestly and suggest speaking with the team directly.

KNOWLEDGE BASE:

CareSyndicate is an AI-native workforce platform that replaces the broken agency-umbrella model in UK domiciliary care with direct, compliant engagements. We remove the middleman and automate the compliance burden.

THE PROBLEM:
The UK care sector faces a roughly £7 billion domiciliary care market with 111,000 unfilled roles (Skills for Care 2024/25) across a 1.7 million post workforce. The Health and Care Worker visa route closed in July 2025, causing a 91% drop in international recruitment. Vacancy rates are around 7% in adult social care — roughly three times higher than the wider economy. The agency-umbrella model creates four converging crises: workforce collapse, a funding squeeze (CQC found a direct link between hourly pay rates and A&E admissions), compliance overload across CQC, HMRC IR35, JSL, local authority and NHS standards, and a care continuity crisis where workers receive just £14–16 per hour after umbrella deductions from a £22–25 per hour charge rate.

SUPPLY CHAIN:
The current chain runs: Care Provider to Agency to Umbrella Company to Worker — opaque, multi-layered, and JSL-exposed. CareSyndicate's chain is: Care Provider to CareSyndicate (as introducer) to Worker — direct, transparent, and with no JSL exposure. The key distinction is that CareSyndicate operates as an introducer, not an employment business. We do not employ workers or operate PAYE on their behalf.

JSL (JOINT AND SEVERAL LIABILITY):
The Finance Bill 2025-26 (Clause 24, new Chapter 11 ITEPA 2003) introduces strict, no-defence liability from 6 April 2026. If an umbrella company fails to remit PAYE or NI to HMRC, HMRC can pursue the agency and then the care provider directly. This is strict liability for PAYE and Class 1 NICs with no statutory defence, even with due diligence, and no grandfather clause for existing arrangements. The only way to eliminate JSL risk is to remove the umbrella company entirely. CareSyndicate eliminates all four JSL trigger conditions: no umbrella employs anyone, no umbrella operates PAYE, no umbrella sits in the supply chain, and no employment business supplies workers.

PLATFORM — FOUR PILLARS:
1. AI-Powered Matching: ranked shortlists in seconds with plain-English explanations covering skills, qualifications, location and availability.
2. Compliance Engine: CEST assessment per engagement, six-dimension traffic-light scoring, auto-routing to PAYE where needed, and CQC/HMRC evidence packs on demand.
3. Transparent Billing: worker rate, platform fee and VAT shown separately on every invoice, with two VAT models available.
4. Four Dedicated Portals: worker app, recruiter portal, provider portal and admin console.

COMPLIANCE ENGINE DETAIL:
Every engagement is assessed using HMRC's own CEST tool — not a proprietary test. Six dimensions are scored: client concentration, substitution evidence, financial risk, control levels, business entity status and CEST determination. Results feed into green, amber or red traffic lights. Routing is automatic: self-employed workers are paid to their business account, limited company workers to their company account, and where CEST returns employment, the engagement is routed to an independent payroll bureau with full PAYE.

TWO VAT MODELS:
Model A (Standard VAT): 20% VAT on the full charge, reclaimable if the provider is VAT-registered. Model B (VAT-Aligned Care Supply): no VAT on worker earnings, VAT only on the platform fee. This saves approximately £460,000 per year for a 100-worker provider (at £22/hr blended rate). Most care providers are VAT-exempt, making irrecoverable VAT a dead cost of roughly £4.40 per hour per worker under the agency model. Note: providers operating under the Nursing Agencies VAT Concession may already benefit from partial VAT relief on the labour element — Model B extends this principle more broadly.

FINANCIAL IMPACT (illustrative — 50 workers, 20 hours per week, £18 per hour worker rate):
Current agency model: annual cost approximately £1,372,800, blended rate £22–25 per hour, worker receives £15 per hour, true cost roughly £26.40 per hour with irrecoverable VAT. CareSyndicate Model B: annual cost approximately £1,070,680, worker rate £18 per hour gross (worker receives the full amount), true cost roughly £20.59 per hour including employer on-costs. That is a saving of approximately £302,120 per year — 22% — with full compliance, risk elimination and complete transparency. At 100 workers the irrecoverable VAT savings alone reach approximately £458,000 per year (at £22 per hour blended rate).

OPERATIONAL SIMPLICITY:
A provider's involvement reduces to three actions: induct workers to care plans as needed (clinical processes do not change), approve timesheets weekly (averaging 2–3 minutes per worker per week), and pay one consolidated invoice per period covering all workers and all routes. Training is a single two-hour session.

12 RISKS ELIMINATED:
JSL exposure (no umbrella in chain), status misclassification (per-engagement CEST with auto-routing), opaque supply chain (direct transparent chain), no audit evidence (on-demand evidence packs), insurance gaps (£6M PL and £2M PI mandatory with auto-monitoring), DBS compliance (enhanced DBS on Update Service with real-time checks), irrecoverable VAT (Model B eliminates the dead cost), cost opacity (line-itemised invoicing), worker take-home squeeze (full rates with no umbrella deductions), CQC vulnerability (AI-generated inspection-ready reports), SE evidence gaps (substitution workflow with full audit trail), and single agency dependency (direct onboarding with all data retained). Residual risk to the provider: zero.

TRANSITION ROADMAP:
This week: introductory call. Week 1: legal due diligence. Weeks 2–4: pilot with 5–10 workers running alongside the existing agency. Week 8: pilot review. Before 6 April 2026: scale to full coverage.

COMMON QUESTIONS:

Revenue model: a platform fee per worker per hour (approximately £0.43 per hour in the financial model). Revenue scales directly with worker hours. The saving to the provider far exceeds the fee.

Platform status: the platform architecture spans four portals. The compliance engine logic, CEST integration and payment routing are core to the design. For specifics on build status, it is best to speak with the team directly.

Current traction: CareSyndicate is focused on signing pilot clients ahead of the 6 April 2026 deadline. Twenty-one target organisations have been profiled. The regulatory deadline creates natural urgency.

Why agencies cannot simply drop umbrellas: agencies are employment businesses — their model depends on supplying workers via umbrella PAYE structures. Removing the umbrella removes their operational model. CareSyndicate is purpose-built for the introducer model.

After April 2026: JSL creates immediate urgency, but the value proposition is permanent. Cost savings of 22% or more, compliance automation, transparency and risk elimination do not expire. The sector's structural problems are long-term.

Regulatory risk: CareSyndicate uses HMRC's own CEST tool. If the rules change, the platform adapts. The model is built on structural compliance, not regulatory arbitrage.

What if a worker is found to be employed: the compliance engine auto-routes to PAYE via an independent payroll bureau. The provider has zero PAYE liability.

Insurance costs: workers carry their own insurance (£6M PL and £2M PI) as a condition of engagement. The platform monitors and enforces this automatically.

CONTACT:
Website: caresyndicate.ai
Email: william@caresyndicate.ai

When it feels natural, remind the reader that the team would be delighted to arrange an introductory call or answer further questions directly — and mention the website or email address.`;


/** Renders a plain-text AI response into React elements, handling any
 *  residual markdown the model might produce despite instructions. */
function renderBotMessage(text) {
  // Split into paragraphs on double newlines
  const paragraphs = text.split(/\n{2,}/);

  return paragraphs.map((para, pi) => {
    // Process inline formatting: **bold** and *italic*
    const processInline = (str) => {
      const parts = [];
      let remaining = str;
      let key = 0;

      while (remaining.length > 0) {
        // Bold: **text**
        const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
        if (boldMatch) {
          const idx = boldMatch.index;
          if (idx > 0) parts.push(remaining.slice(0, idx));
          parts.push(<strong key={key++} style={{ fontWeight: 600 }}>{boldMatch[1]}</strong>);
          remaining = remaining.slice(idx + boldMatch[0].length);
          continue;
        }
        // Italic: *text* (but not **)
        const italicMatch = remaining.match(/\*(.+?)\*/);
        if (italicMatch) {
          const idx = italicMatch.index;
          if (idx > 0) parts.push(remaining.slice(0, idx));
          parts.push(<em key={key++}>{italicMatch[1]}</em>);
          remaining = remaining.slice(idx + italicMatch[0].length);
          continue;
        }
        parts.push(remaining);
        break;
      }
      return parts;
    };

    // Handle single-newline lines within a paragraph (e.g. list items)
    const lines = para.split(/\n/);
    const content = lines.map((line, li) => {
      // Strip leading bullet markers (- or *) or numbered list markers (1.)
      const cleaned = line.replace(/^\s*[-*]\s+/, "").replace(/^\s*\d+\.\s+/, "");
      return (
        <span key={li}>
          {li > 0 && <br />}
          {processInline(cleaned)}
        </span>
      );
    });

    return (
      <p key={pi} style={{ margin: pi === 0 ? 0 : "8px 0 0" }}>
        {content}
      </p>
    );
  });
}

const EDGE_FN_URL = "https://cwerrwpscaeryjshlftq.supabase.co/functions/v1/chat-proxy";

export default function ChatPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = useCallback(async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    const apiMessages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...messages.map((m) => ({ role: m.role, content: m.content })),
      userMessage,
    ];

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 15000);
      const res = await fetch(EDGE_FN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages }),
        signal: controller.signal,
      });
      clearTimeout(timeout);

      if (!res.ok) {
        const errBody = await res.text();
        throw new Error(`API error ${res.status}: ${errBody}`);
      }

      const data = await res.json();
      const reply = data.reply || "No response received.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: `Error: ${err.message}` },
      ]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, messages]);

  const handleKeyDown = (e) => {
    // Stop propagation so slide nav doesn't fire
    e.stopPropagation();
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const suggestedQuestions = [
    "Explain how CareSyndicate addresses JSL risk.",
    "What happens on 6 April 2026?",
    "How does the platform handle compliance?",
    "What would a pilot look like for us?",
  ];

  return (
    <>
      {/* Toggle button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        style={{
          position: "fixed",
          bottom: 28,
          right: 72,
          zIndex: 2000,
          width: 48,
          height: 48,
          borderRadius: "50%",
          background: `linear-gradient(135deg, ${C.magenta}, ${C.plum})`,
          color: C.white,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 22,
          boxShadow: `0 4px 24px ${C.magenta}40`,
          cursor: "pointer",
          border: "none",
          fontFamily: FONT_BODY,
        }}
        title="Ask about the pitch"
        aria-label={isOpen ? "Close chat" : "Open chat assistant"}
      >
        {isOpen ? "×" : <IconChat size={20} color={C.white} />}
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
            style={{
              position: "fixed",
              bottom: 88,
              right: 32,
              zIndex: 2000,
              width: 400,
              maxWidth: "calc(100vw - 64px)",
              height: 520,
              maxHeight: "calc(100vh - 120px)",
              borderRadius: 16,
              background: C.white,
              border: `1px solid ${C.blush}`,
              boxShadow: `0 16px 64px rgba(107,76,140,0.15), 0 0 0 1px ${C.blush}`,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              fontFamily: FONT_BODY,
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: "16px 20px",
                background: `linear-gradient(135deg, ${C.plum}, ${C.magenta})`,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <IconBot size={18} color={C.white} />
              </div>
              <div>
                <div style={{ color: C.white, fontSize: 14, fontWeight: 600 }}>
                  CareSyndicate AI
                </div>
                <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 11 }}>
                  Ask anything about the pitch
                </div>
              </div>
            </div>

            {/* Messages */}
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                padding: "16px 16px 8px",
                display: "flex",
                flexDirection: "column",
                gap: 12,
                background: C.cream,
              }}
            >
              {messages.length === 0 && (
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <div
                    style={{
                      color: `${C.dark}55`,
                      fontSize: 12,
                      marginBottom: 4,
                    }}
                  >
                    Suggested questions:
                  </div>
                  {suggestedQuestions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setInput(q);
                        setTimeout(() => inputRef.current?.focus(), 0);
                      }}
                      style={{
                        padding: "8px 14px",
                        borderRadius: 8,
                        background: C.white,
                        border: `1px solid ${C.blush}`,
                        color: C.plum,
                        fontSize: 12,
                        textAlign: "left",
                        cursor: "pointer",
                        transition: "all 0.15s",
                        fontFamily: FONT_BODY,
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = `${C.plum}08`;
                        e.target.style.borderColor = C.orchid;
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = C.white;
                        e.target.style.borderColor = C.blush;
                      }}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              {messages.map((msg, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                  }}
                >
                  <div
                    style={{
                      maxWidth: "85%",
                      padding: "10px 14px",
                      borderRadius: msg.role === "user" ? "12px 12px 2px 12px" : "12px 12px 12px 2px",
                      background:
                        msg.role === "user"
                          ? `linear-gradient(135deg, ${C.magenta}, ${C.plum})`
                          : C.white,
                      color: msg.role === "user" ? C.white : C.dark,
                      fontSize: 13,
                      lineHeight: 1.55,
                      wordBreak: "break-word",
                      border: msg.role === "assistant" ? `1px solid ${C.blush}` : "none",
                      boxShadow: msg.role === "assistant" ? `0 1px 4px ${C.plum}08` : "none",
                      ...(msg.role === "user" ? { whiteSpace: "pre-wrap" } : {}),
                    }}
                  >
                    {msg.role === "assistant" ? renderBotMessage(msg.content) : msg.content}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div style={{ display: "flex", justifyContent: "flex-start" }}>
                  <div
                    style={{
                      padding: "10px 14px",
                      borderRadius: "12px 12px 12px 2px",
                      background: C.white,
                      border: `1px solid ${C.blush}`,
                      display: "flex",
                      gap: 4,
                    }}
                  >
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: C.plum,
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div
              style={{
                padding: "12px 16px 16px",
                borderTop: `1px solid ${C.blush}`,
                display: "flex",
                gap: 8,
                background: C.white,
              }}
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about CareSyndicate..."
                disabled={isLoading}
                style={{
                  flex: 1,
                  padding: "10px 14px",
                  borderRadius: 10,
                  background: C.cream,
                  border: `1px solid ${C.blush}`,
                  color: C.dark,
                  fontSize: 13,
                  fontFamily: FONT_BODY,
                  outline: "none",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = C.orchid;
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = C.blush;
                }}
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || isLoading}
                aria-label="Send message"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background:
                    input.trim()
                      ? `linear-gradient(135deg, ${C.magenta}, ${C.plum})`
                      : `${C.dark}08`,
                  color: input.trim() ? C.white : `${C.dark}30`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 16,
                  cursor: input.trim() ? "pointer" : "default",
                  border: "none",
                  flexShrink: 0,
                  transition: "all 0.15s",
                  fontFamily: FONT_BODY,
                }}
              >
                ↑
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
