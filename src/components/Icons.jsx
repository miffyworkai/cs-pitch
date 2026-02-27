// ─── PROFESSIONAL SVG ICONS ───
// Consistent: 24×24 viewBox, 1.5px stroke, round caps/joins

const S = ({ size = 24, color = "currentColor", children }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0 }}>
    {children}
  </svg>
);

// ── People / Group ──
export const IconPeople = ({ size, color }) => (
  <S size={size} color={color}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </S>
);

// ── Clipboard with Check ──
export const IconClipboardCheck = ({ size, color }) => (
  <S size={size} color={color}>
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    <path d="m9 14 2 2 4-4" />
  </S>
);

// ── Refresh / Cycle Arrows ──
export const IconRefresh = ({ size, color }) => (
  <S size={size} color={color}>
    <path d="M21 2v6h-6" />
    <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
    <path d="M3 22v-6h6" />
    <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
  </S>
);

// ── Brain / AI ──
export const IconBrain = ({ size, color }) => (
  <S size={size} color={color}>
    <path d="M9.5 2a3.5 3.5 0 0 0-3.18 4.94A3.5 3.5 0 0 0 4 10.5a3.5 3.5 0 0 0 1.1 2.56A3.5 3.5 0 0 0 6.5 18a3.5 3.5 0 0 0 3 1.95V22h5v-2.05a3.5 3.5 0 0 0 3-1.95 3.5 3.5 0 0 0 1.4-4.94A3.5 3.5 0 0 0 20 10.5a3.5 3.5 0 0 0-2.32-3.56A3.5 3.5 0 0 0 14.5 2" />
    <path d="M12 2v20" />
    <path d="M8 8h0" />
    <path d="M16 8h0" />
    <path d="M8 12h0" />
    <path d="M16 12h0" />
    <path d="M9 16h0" />
    <path d="M15 16h0" />
  </S>
);

// ── Shield with Check ──
export const IconShieldCheck = ({ size, color }) => (
  <S size={size} color={color}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </S>
);

// ── Invoice / Transparent Billing ──
export const IconInvoice = ({ size, color }) => (
  <S size={size} color={color}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <path d="M8 13h3" />
    <path d="M8 17h6" />
    <path d="M16 13h-2" />
  </S>
);

// ── Devices / Portals ──
export const IconDevices = ({ size, color }) => (
  <S size={size} color={color}>
    <rect x="2" y="3" width="13" height="10" rx="2" />
    <rect x="16" y="8" width="6" height="13" rx="1.5" />
    <path d="M2 15h11" />
    <path d="M18.5 18h1" />
  </S>
);

// ── Gear / Settings ──
export const IconGear = ({ size, color }) => (
  <S size={size} color={color}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </S>
);

// ── Credit Card / Payment ──
export const IconCreditCard = ({ size, color }) => (
  <S size={size} color={color}>
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
    <path d="M5 16h4" />
  </S>
);

// ── Chart / Graph ──
export const IconChart = ({ size, color }) => (
  <S size={size} color={color}>
    <path d="M18 20V10" />
    <path d="M12 20V4" />
    <path d="M6 20v-6" />
    <path d="M3 20h18" />
  </S>
);

// ── Sparkle / AI Magic ──
export const IconSparkle = ({ size, color }) => (
  <S size={size} color={color}>
    <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
    <path d="M19 14l.75 2.25L22 17l-2.25.75L19 20l-.75-2.25L16 17l2.25-.75L19 14z" />
    <path d="M5 17l.5 1.5L7 19l-1.5.5L5 21l-.5-1.5L3 19l1.5-.5L5 17z" />
  </S>
);

// ── Lightbulb ──
export const IconLightbulb = ({ size, color }) => (
  <S size={size} color={color}>
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" />
  </S>
);

// ── Pin / Important ──
export const IconPin = ({ size, color }) => (
  <S size={size} color={color}>
    <path d="M12 17v5" />
    <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.89A2 2 0 0 0 5 15.24V17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.89A2 2 0 0 1 15 10.76V6a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4.76z" />
    <path d="M10 5V3" />
    <path d="M14 5V3" />
  </S>
);

// ── File / Document ──
export const IconFileText = ({ size, color }) => (
  <S size={size} color={color}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
    <path d="M10 9H8" />
  </S>
);

// ── Scales / Balance ──
export const IconScales = ({ size, color }) => (
  <S size={size} color={color}>
    <path d="M12 3v18" />
    <path d="M8 7H4l2 6h0a3 3 0 0 0 6 0h0l2-6h-4" />
    <path d="M20 7h-4l2 6h0a3 3 0 0 0 6 0h0l2-6" transform="translate(-6,0)" />
    <path d="M6 3h12" />
  </S>
);

// ── Tag / Label ──
export const IconTag = ({ size, color }) => (
  <S size={size} color={color}>
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </S>
);

// ── Search / Magnifying Glass ──
export const IconSearch = ({ size, color }) => (
  <S size={size} color={color}>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </S>
);

// ── Folder ──
export const IconFolder = ({ size, color }) => (
  <S size={size} color={color}>
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </S>
);

// ── Lock ──
export const IconLock = ({ size, color }) => (
  <S size={size} color={color}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    <circle cx="12" cy="16" r="1" />
  </S>
);

// ── Receipt / Tax ──
export const IconReceipt = ({ size, color }) => (
  <S size={size} color={color}>
    <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1z" />
    <path d="M8 10h8" />
    <path d="M8 14h4" />
    <path d="M14 14h2" />
  </S>
);

// ── Coins / Money ──
export const IconCoins = ({ size, color }) => (
  <S size={size} color={color}>
    <circle cx="9" cy="9" r="7" />
    <path d="M15.35 9.35a7 7 0 1 1-1.7-1.7" />
    <path d="M9 6v6l3 2" />
  </S>
);

// ── Trend Down ──
export const IconTrendDown = ({ size, color }) => (
  <S size={size} color={color}>
    <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
    <polyline points="16 17 22 17 22 11" />
  </S>
);

// ── Clipboard (simple) ──
export const IconClipboard = ({ size, color }) => (
  <S size={size} color={color}>
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    <path d="M8 12h8" />
    <path d="M8 16h6" />
  </S>
);

// ── Document with Pen ──
export const IconDocumentPen = ({ size, color }) => (
  <S size={size} color={color}>
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
  </S>
);

// ── Link / Chain ──
export const IconLink = ({ size, color }) => (
  <S size={size} color={color}>
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </S>
);

// ── Person ──
export const IconPerson = ({ size, color }) => (
  <S size={size} color={color}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </S>
);

// ── Chat Bubble ──
export const IconChat = ({ size, color }) => (
  <S size={size} color={color}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <path d="M8 10h8" />
    <path d="M8 14h4" />
  </S>
);

// ── Bot / AI Assistant ──
export const IconBot = ({ size, color }) => (
  <S size={size} color={color}>
    <rect x="3" y="8" width="18" height="12" rx="2" />
    <path d="M12 2v6" />
    <circle cx="8.5" cy="14" r="1.5" fill={color} stroke="none" />
    <circle cx="15.5" cy="14" r="1.5" fill={color} stroke="none" />
    <path d="M9 18h6" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
  </S>
);

// ── Block / Barrier ──
export const IconBarrier = ({ size, color }) => (
  <S size={size} color={color}>
    <circle cx="12" cy="12" r="10" />
    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
  </S>
);

// ── Currency / VAT ──
export const IconCurrency = ({ size, color }) => (
  <S size={size} color={color}>
    <circle cx="12" cy="12" r="10" />
    <path d="M9 8h4.5a2.5 2.5 0 0 1 0 5H9v5" />
    <path d="M8 13h6" />
  </S>
);
