import { C, FONT_DISPLAY, FONT_BODY } from "../theme";
import Slide from "../components/Slide";
import Stagger from "../components/Stagger";
import DeepDive from "../components/DeepDive";

export default function SlideBrokenModel() {
  return (
    <Slide
      bg={`
        radial-gradient(ellipse at 30% 70%, ${C.deepPlum}80 0%, transparent 50%),
        ${C.dark}
      `}
    >
      <div style={{ maxWidth: 920, padding: "0 40px", width: "100%" }}>
        <Stagger>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: C.magenta, fontFamily: FONT_BODY }}>
              Root Cause
            </div>
            <div style={{ flex: 1, height: 1, background: `${C.magenta}30` }} />
          </div>
        </Stagger>

        <Stagger delay={0.15}>
          <h2 style={{ fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 400, color: C.white, margin: "0 0 12px", lineHeight: 1.1, fontFamily: FONT_DISPLAY }}>
            The Agency-Umbrella Model
            <br />
            <span style={{ color: C.magenta, fontStyle: "italic" }}>Is the Problem</span>
          </h2>
        </Stagger>

        <Stagger delay={0.3}>
          <p style={{ fontSize: 17, color: `${C.cream}88`, margin: "0 0 40px", lineHeight: 1.6, maxWidth: 620, fontFamily: FONT_BODY }}>
            The traditional supply chain adds cost, complexity, and regulatory risk at every layer.
          </p>
        </Stagger>

        <div style={{ marginTop: 8 }}>
          <DeepDive title="Why umbrella companies create liability" icon="&#9888;&#65039;" color={C.magenta}>
            <p>Umbrella companies sit between the agency and the worker, operating PAYE payroll. The problem: if the umbrella fails to remit tax to HMRC, under the <strong style={{ color: C.cream }}>Finance Act 2025 Joint & Several Liability</strong> rules (effective 6 April 2026), HMRC can pursue the care provider directly.</p>
            <p style={{ marginTop: 10 }}>This is <strong style={{ color: C.cream }}>strict liability</strong> — there is no statutory defence, even if the provider conducted due diligence on the agency. No grandfather clause applies to existing arrangements.</p>
          </DeepDive>
          <DeepDive title="The hidden VAT problem" icon="&#129534;" color={C.magenta}>
            <p>Agencies charge 20% VAT on the full blended rate. For VAT-exempt care providers (most are), this is completely irrecoverable — a dead cost of ~£4.40/hr per worker on a £22/hr charge. At scale, a 100-worker provider loses over <strong style={{ color: C.cream }}>£600,000/year</strong> in irrecoverable VAT.</p>
          </DeepDive>
        </div>
      </div>
    </Slide>
  );
}
