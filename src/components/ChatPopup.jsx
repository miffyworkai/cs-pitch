import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { C, FONT_BODY } from "../theme";
import { IconChat, IconBot } from "./Icons";

const SYSTEM_PROMPT = `You are the CareSyndicate AI assistant, embedded in the CareSyndicate investor pitch deck. You answer questions about the business, platform, financials, compliance model, and market opportunity with precision and confidence. You have comprehensive knowledge of the entire pitch and all supporting documentation.

IMPORTANT INSTRUCTIONS:
- Be concise but thorough. Investors want substance, not fluff.
- If asked something the pitch doesn't cover (e.g. team, current traction), be honest and frame it constructively.
- Use specific numbers and data points wherever possible.
- Reference specific documents when deeper detail exists.
- Be direct. Don't hedge unnecessarily. But acknowledge genuine unknowns.

═══ COMPANY OVERVIEW ═══
CareSyndicate is an AI-native workforce platform that replaces the broken agency-umbrella model in UK domiciliary care with direct, compliant engagements. We eliminate the middleman while automating the compliance burden.

═══ THE PROBLEM ═══
The UK care sector workforce model is structurally broken:
- £6.7B UK Domiciliary Care Market
- 152,000 unfilled roles; 111,000 vacant posts in adult social care
- 1.6M total care workforce
- Health & Care Worker visa route closed July 2025 → 91% drop in international recruitment
- Vacancy rates exceed 10% in home care (3× other sectors)

The agency-umbrella model creates four converging crises:
1. WORKFORCE COLLAPSE: Providers can't recruit or retain
2. FUNDING SQUEEZE: CQC found direct link between hourly pay rates and A&E admissions
3. COMPLIANCE OVERLOAD: CQC, HMRC IR35, JSL, local authority, NHS standards
4. CARE CONTINUITY CRISIS: Workers get £14-16/hr after umbrella deductions from £22-25/hr charge, driving churn

═══ SUPPLY CHAIN ═══
Current broken chain: Care Provider → Agency → Umbrella Co. → Worker (opaque, multi-layered, JSL exposure)
CareSyndicate chain: Care Provider → CareSyndicate (Introducer) → Worker (direct, transparent, no JSL exposure)

Key distinction: CareSyndicate operates as an INTRODUCER, not an employment business. We don't employ workers or operate PAYE on their behalf. This structural difference is what eliminates JSL risk.

═══ JSL (JOINT & SEVERAL LIABILITY) ═══
Finance Act 2025 introduces strict, no-defence liability effective 6 APRIL 2026:
- If an umbrella company fails to remit PAYE/NI to HMRC, HMRC pursues the care provider directly
- STRICT LIABILITY — no statutory defence, even with due diligence
- No grandfather clause for existing arrangements
- The ONLY way to eliminate JSL risk is to remove the umbrella company entirely

CareSyndicate eliminates ALL FOUR JSL trigger conditions:
✓ No umbrella employs anyone
✓ No umbrella operates PAYE
✓ No umbrella in supply chain
✓ No employment business supplies workers

Reference: CareSyndicate_April_2026_JSL_Briefing.docx, CareSyndicate_HMRC_Position_Legal_Standing.docx

═══ PLATFORM — FOUR PILLARS ═══
1. AI-POWERED MATCHING: Ranked shortlists in seconds, plain-English explanations, skills/qualifications/location/availability
2. COMPLIANCE ENGINE: CEST per engagement, six-dimension traffic-light scoring, auto-route to PAYE, CQC/HMRC evidence packs
3. TRANSPARENT BILLING: Worker rate, platform fee, and VAT shown separately. Two VAT models.
4. FOUR PORTALS: Worker app, Recruiter portal, Provider portal, Admin console

Reference: CareSyndicate_CRM_Value_Proposition.docx

═══ COMPLIANCE ENGINE DETAIL ═══
- CEST Integration: Every engagement assessed using HMRC's own tool (not a proprietary test)
- Six-Dimension Scoring: Client concentration, substitution, financial risk, control, business entity, CEST result
- Auto-Routing: SE → business account, Ltd → company account, Employment → independent payroll bureau
- Three payment routes: Self-Employed (own UTR, insurance, self-assessment), Limited Company (PSC), PAYE (independent bureau)

═══ TWO VAT MODELS ═══
Model A — Standard VAT: 20% VAT on full charge, reclaimable if provider is VAT-registered
Model B — VAT-Aligned Care Supply: No VAT on worker earnings, VAT on platform fee only. Saves ~£600K/yr for 100-worker provider.

Most care providers are VAT-exempt, making irrecoverable VAT a dead cost of ~£4.40/hr per worker under the agency model.

Reference: CareSyndicate_Sample_Invoice_Walkthrough.docx

═══ FINANCIAL IMPACT ═══
Illustrative: 50 workers, 20 hours/week, £18/hr worker rate

Current Agency Model:
- Annual cost: ~£1,372,800
- Blended rate: £22-25/hr, worker gets £15/hr
- True cost: ~£26.40/hr (with irrecoverable VAT)

CareSyndicate Model B:
- Annual cost: ~£1,070,680
- Worker rate: £18/hr gross (worker receives full amount)
- True cost: ~£20.59/hr

SAVING: ~£302,120 per year (22%) with full compliance, risk elimination, and transparency.
At 100 workers: ~£600,000/year in VAT savings alone.

═══ OPERATIONAL SIMPLICITY ═══
Provider's involvement reduces to THREE actions:
1. Induct workers to care plans (as needed — clinical processes don't change)
2. Approve timesheets (weekly — avg 2-3 min per worker per week)
3. Pay one invoice (per period — consolidated, all workers, all routes)

Training: Single 2-hour session. Portal designed for simplicity.

═══ 12 RISKS ELIMINATED ═══
1. JSL Exposure → No umbrella in supply chain
2. Status Misclassification → CEST per engagement, auto-route to PAYE
3. Opaque Supply Chain → Direct, transparent chain
4. No Audit Evidence → CRM generates packs on demand
5. Insurance Gaps → £6M PL + £2M PI mandatory, auto-monitoring, expired workers blocked
6. DBS Compliance → Enhanced DBS on Update Service, real-time checks
7. Irrecoverable VAT → Model B eliminates ~£4.40/hr dead cost
8. Cost Opacity → Line-itemised invoicing
9. Worker Take-Home Squeeze → Full rates, no umbrella deductions
10. CQC Vulnerability → AI-generated inspection-ready reports
11. SE Evidence Gaps → Substitution workflow with full audit trail
12. Single Agency Dependency → Direct worker onboarding, you retain all data

Residual risk to provider: ZERO. A structural consequence of removing the umbrella.
Reference: CareSyndicate_Risk_Elimination_Summary.docx

═══ AUTOMATION ═══
The CRM handles automatically: CEST assessments, payment routing, insurance verification & monitoring, DBS Update Service checks, substitution workflow & logging, decline tracking, client dependency monitoring, credential expiry alerts (30/14 day), CQC evidence pack generation, HMRC audit trail maintenance.

AI features: Matching engine, AI assistant (chat/voice), CQC report generation (minutes vs days), predictive alerts.

═══ TRANSITION ROADMAP ═══
This Week → Introductory call
Week 1 → Legal due diligence (share Legal Distinction Guide + Indemnity Policy)
Weeks 2-4 → Pilot with 5-10 workers (run alongside existing agency)
Week 8 → Pilot review
Before 6 April → Scale to full coverage

═══ TARGET MARKET ═══
21 identified target organisations: established care providers (10+ years), 50-300 staff, CQC-registered, VAT-exempt, currently JSL-exposed via agency model.
Reference: CareSyndicate_Client_Intelligence_Guide.docx

═══ COMPETITIVE POSITIONING ═══
vs Traditional Agencies: Direct model, per-engagement CEST (not blanket), transparent costs, no umbrella, permanent audit trail, real-time compliance, two VAT options
vs Competing Platforms: Compliance-first (not a bolt-on), HMRC's own CEST tool, three payment routes, AI-native, provider-centric

═══ DOCUMENTATION SUITE ═══
22 supporting documents available including:
- Client Information Pack (comprehensive provider guide)
- Client Compliance Pack (sample evidence documentation)
- Executive Summary Board Paper (board-level recommendation)
- HMRC Position & Legal Standing (legal framework)
- Workforce Governance & Audit Readiness (CQC/HMRC compliance)
- Sales Training Guide (objection handling, competitor positioning)
- Market Intelligence Guide (sector analysis)
- Provider Liability Briefing (zero liability substantiation)
- Worker Protection & Insurance Guide
- Sample Invoice Walkthrough

═══ HANDLING TOUGH QUESTIONS ═══

Q: "What's your revenue model?"
A: Platform fee per worker per hour. In the financial model, this is ~£0.43/hr. Revenue scales directly with worker hours on platform. At scale (e.g., 1,000 workers at 20 hrs/week), annual platform revenue would be ~£450K per year from fees alone, with very high margins since the platform is software-based.

Q: "Is the platform built?"
A: The platform architecture is designed across four portals (worker app, recruiter, provider, admin). A Digital Services Brief has been produced for development partners. The compliance engine logic, CEST integration, and payment routing are core to the design. Be honest that specific build status should be discussed directly with the team.

Q: "What about traction / customers?"
A: The business is in pre-launch/early stage, focused on signing pilot customers ahead of the 6 April 2026 JSL deadline. 21 target organisations have been profiled. The urgency of JSL creates a natural sales catalyst — providers MUST act before April 2026.

Q: "Why can't agencies just drop umbrellas?"
A: Agencies are employment businesses — their entire model is built on supplying workers via umbrella PAYE structures. Removing the umbrella removes their operational model. They would need to fundamentally restructure as introducers, which conflicts with their margin structure (15-30% on blended rates). CareSyndicate is purpose-built for the introducer model from day one.

Q: "What happens after April 2026? Is this a one-time event?"
A: JSL creates immediate urgency, but the value proposition is permanent: cost savings (22%+), compliance automation, transparency, and risk elimination don't expire. The care sector's structural problems (workforce shortage, funding squeeze, compliance burden) are long-term. CareSyndicate addresses all of these, not just JSL.

Q: "What's your moat?"
A: First-mover in the care-specific compliance-first introducer model. Network effects as more workers and providers join. Deep regulatory domain expertise embedded in the platform. Switching costs increase as providers build audit history and compliance data on the platform.

Q: "What's the team?"
A: Please speak directly with the CareSyndicate leadership team about backgrounds and experience. The documentation suite and platform design demonstrate deep domain expertise in UK care sector regulation, HMRC compliance, and workforce management.

Q: "What about regulatory risk?"
A: CareSyndicate uses HMRC's own CEST tool — if HMRC changes the rules, the platform adapts. The model is built on structural compliance (direct engagement, proper classification) rather than regulatory arbitrage. Even if JSL is delayed, the cost savings, transparency, and compliance benefits remain.

Q: "What if a worker IS found to be employed?"
A: The compliance engine auto-routes employment results to PAYE via an independent payroll bureau. This is by design — if CEST says employment, we don't fight it, we route correctly. The provider has zero PAYE liability because the independent bureau operates payroll, not the provider.

Q: "Unit economics?"
A: Platform fee ~£0.43/hr × average 20 hrs/week × 52 weeks = ~£447/worker/year. A 100-worker client = ~£44,700/year revenue. Software margins (80%+) apply. The saving to the provider is ~£302K/year for 50 workers — the platform fee is a fraction of the value delivered. CAC should be low given the regulatory deadline creates urgent inbound demand.

Q: "What about the insurance costs?"
A: Workers carry their own insurance (£6M PL + £2M PI) as a condition of engagement. The platform monitors and enforces this. Cost is borne by the worker as part of their self-employed business expenses, not by CareSyndicate or the provider.`;

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
      const res = await fetch(EDGE_FN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages }),
      });

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
    "What's the revenue model?",
    "How does JSL affect providers?",
    "Walk me through the financials",
    "What's the competitive moat?",
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
                      whiteSpace: "pre-wrap",
                      wordBreak: "break-word",
                      border: msg.role === "assistant" ? `1px solid ${C.blush}` : "none",
                      boxShadow: msg.role === "assistant" ? `0 1px 4px ${C.plum}08` : "none",
                    }}
                  >
                    {msg.content}
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
