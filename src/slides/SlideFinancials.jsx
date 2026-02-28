import { motion } from "motion/react";
import { C, FONT_DISPLAY, FONT_BODY } from "../theme";
import Slide from "../components/Slide";
import Stagger from "../components/Stagger";
import DeepDive from "../components/DeepDive";
import AnimatedCounter from "../components/AnimatedCounter";
import { IconChart, IconFileText } from "../components/Icons";

export default function SlideFinancials() {
  return (
    <Slide
      bg={`
        radial-gradient(ellipse at 60% 40%, ${C.sage}06 0%, transparent 50%),
        ${C.cream}
      `}
      style={{ justifyContent: "flex-start" }}
    >
      <div style={{ maxWidth: 880, padding: "60px 40px", width: "100%" }}>
        <Stagger>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: C.orchid, fontFamily: FONT_BODY }}>
              The Numbers
            </div>
            <div style={{ flex: 1, height: 1, background: `${C.orchid}30` }} />
          </div>
        </Stagger>

        <Stagger delay={0.15}>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 700, color: C.plum, margin: "0 0 8px", lineHeight: 1.15, fontFamily: FONT_DISPLAY, letterSpacing: "-0.02em" }}>
            Financial Impact
          </h2>
          <p style={{ fontSize: 14, color: `${C.dark}66`, marginBottom: 32, fontFamily: FONT_BODY }}>
            Illustrative comparison: 50 workers, 20 hours/week, £18/hr worker rate.
          </p>
        </Stagger>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 24 }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <div
              style={{
                background: `${C.red}05`,
                borderRadius: 18,
                padding: "28px 26px",
                border: `1px solid ${C.red}15`,
                height: "100%",
              }}
            >
              <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, color: C.red, marginBottom: 16, fontFamily: FONT_BODY }}>
                Current Agency Model
              </div>
              <div style={{ fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 700, color: C.red, fontFamily: FONT_BODY }}>
                ~<AnimatedCounter value="1372800" prefix="£" delay={0.7} />
              </div>
              <div style={{ fontSize: 12, color: `${C.dark}55`, marginTop: 4, fontFamily: FONT_BODY }}>Annual cost</div>
              <div style={{ fontSize: 13, color: `${C.dark}77`, marginTop: 14, lineHeight: 1.7, fontFamily: FONT_BODY }}>
                <div>Blended rate: £22–25/hr</div>
                <div>Worker take-home: £15/hr</div>
                <div>20% VAT irrecoverable</div>
                <div>True cost: ~£26.40/hr</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            <div
              style={{
                background: `${C.sage}06`,
                borderRadius: 18,
                padding: "28px 26px",
                border: `1.5px solid ${C.sage}30`,
                height: "100%",
              }}
            >
              <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, color: C.sage, marginBottom: 16, fontFamily: FONT_BODY }}>
                CareSyndicate Model B
              </div>
              <div style={{ fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 700, color: C.sage, fontFamily: FONT_BODY }}>
                ~<AnimatedCounter value="1070680" prefix="£" delay={0.9} />
              </div>
              <div style={{ fontSize: 12, color: `${C.dark}55`, marginTop: 4, fontFamily: FONT_BODY }}>Annual cost</div>
              <div style={{ fontSize: 13, color: `${C.dark}77`, marginTop: 14, lineHeight: 1.7, fontFamily: FONT_BODY }}>
                <div>Worker rate: £18/hr gross</div>
                <div>Worker receives: £18/hr</div>
                <div>VAT on platform fee only</div>
                <div>True cost: ~£20.59/hr</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.7 }}
        >
          <div
            style={{
              background: `linear-gradient(135deg, ${C.plum}, ${C.magenta})`,
              borderRadius: 16,
              padding: "28px 36px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "clamp(30px, 4vw, 44px)", fontWeight: 700, color: C.white, fontFamily: FONT_BODY }}>
              ~<AnimatedCounter value="302120" prefix="£" delay={1.3} />
            </div>
            <div style={{ fontSize: 15, fontWeight: 500, marginTop: 6, color: `${C.white}CC`, fontFamily: FONT_BODY }}>
              Annual saving (22%) — with full compliance, risk elimination, and transparency
            </div>
          </div>
        </motion.div>

        <div style={{ marginTop: 16 }}>
          <DeepDive title="VAT savings at scale" icon={<IconChart size={18} color={C.sage} />} color={C.sage}>
            <p>A provider with <strong style={{ color: C.dark }}>100 workers at 20 hours/week</strong> eliminates <strong style={{ color: C.dark }}>~£458,000/year</strong> in irrecoverable VAT by using Model B instead of a standard agency arrangement (at £22/hr blended rate).</p>
            <p style={{ marginTop: 8 }}><strong style={{ color: C.dark }}>10× ROI:</strong> CareSyndicate's platform fees scale with workforce size. VAT recovery alone returns multiples of the platform cost.</p>
            <p style={{ marginTop: 8 }}>Even under Model A (standard VAT), all compliance, risk elimination, and transparency benefits remain identical.</p>
          </DeepDive>
          <DeepDive title="What a transparent invoice looks like" icon={<IconFileText size={18} color={C.sage} />} color={C.sage}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 12 }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: C.sage, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>CareSyndicate Invoice</div>
                <div style={{ fontSize: 12, lineHeight: 1.8 }}>
                  <div>Worker earnings: <strong style={{ color: C.dark }}>£360.00</strong> <span style={{ opacity: 0.6 }}>(20 hrs × £18.00/hr)</span></div>
                  <div>Platform fee: <strong style={{ color: C.dark }}>£8.60</strong></div>
                  <div>VAT on platform fee: <strong style={{ color: C.dark }}>£1.72</strong></div>
                  <div style={{ borderTop: `1px solid ${C.blush}`, marginTop: 6, paddingTop: 6 }}>Total: <strong style={{ color: C.sage, fontSize: 14 }}>£370.32</strong></div>
                </div>
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: C.red, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Agency Equivalent</div>
                <div style={{ fontSize: 12, lineHeight: 1.8 }}>
                  <div>Blended charge: <strong style={{ color: C.dark }}>£440.00</strong> <span style={{ opacity: 0.6 }}>(20 hrs × £22.00/hr)</span></div>
                  <div>VAT (irrecoverable): <strong style={{ color: C.dark }}>£88.00</strong></div>
                  <div>Breakdown: <strong style={{ color: C.red }}>not provided</strong></div>
                  <div style={{ borderTop: `1px solid ${C.blush}`, marginTop: 6, paddingTop: 6 }}>Total: <strong style={{ color: C.red, fontSize: 14 }}>£528.00</strong></div>
                </div>
              </div>
            </div>
            <p style={{ marginTop: 8, fontSize: 13 }}><strong style={{ color: C.sage }}>Saving per worker per week: £157.68 (30%)</strong></p>
            <p style={{ marginTop: 8 }}>Every invoice CareSyndicate issues is fully itemised. You see exactly what your workers earn, what the platform costs, and what VAT applies.</p>
          </DeepDive>
        </div>
      </div>
    </Slide>
  );
}
