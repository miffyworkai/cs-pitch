import SlideHero from "./SlideHero";
import SlideCrisis from "./SlideCrisis";
import SlideBrokenModel from "./SlideBrokenModel";
import SlideSupplyChain from "./SlideSupplyChain";
import SlideCostBreakdown from "./SlideCostBreakdown";
import SlideSolution from "./SlideSolution";
import SlidePlatformFeatures from "./SlidePlatformFeatures";
import SlideHowItWorks from "./SlideHowItWorks";
import SlideAutomation from "./SlideAutomation";
import SlideDeadline from "./SlideDeadline";
import SlideJSLDefence from "./SlideJSLDefence";
import SlideFinancials from "./SlideFinancials";
import SlideRiskMap1 from "./SlideRiskMap1";
import SlideRiskMap2 from "./SlideRiskMap2";
import SlideObjections from "./SlideObjections";
import SlideRoadmap from "./SlideRoadmap";
import SlideContact from "./SlideContact";

export const SLIDES = [
  { key: "hero", component: SlideHero },
  { key: "crisis", component: SlideCrisis },
  { key: "broken", component: SlideBrokenModel },
  { key: "supply", component: SlideSupplyChain },
  { key: "cost", component: SlideCostBreakdown },
  { key: "solution", component: SlideSolution },
  { key: "platform", component: SlidePlatformFeatures },
  { key: "how", component: SlideHowItWorks },
  { key: "auto", component: SlideAutomation },
  { key: "deadline", component: SlideDeadline },
  { key: "jsl", component: SlideJSLDefence },
  { key: "financial", component: SlideFinancials },
  { key: "risk1", component: SlideRiskMap1 },
  { key: "risk2", component: SlideRiskMap2 },
  { key: "objections", component: SlideObjections },
  { key: "roadmap", component: SlideRoadmap },
  { key: "contact", component: SlideContact },
];

export const SLIDE_LABELS = [
  "Title",
  "The Crisis",
  "Broken Model",
  "Supply Chain",
  "The Cost",
  "Our Solution",
  "Platform",
  "How It Works",
  "Automation",
  "April 2026",
  "JSL Defence",
  "Financials",
  "Risk Map (1)",
  "Risk Map (2)",
  "Common Questions",
  "Roadmap",
  "Contact",
];
