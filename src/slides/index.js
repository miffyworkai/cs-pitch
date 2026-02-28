import SlideHero from "./SlideHero";
import SlideCrisis from "./SlideCrisis";
import SlideComplianceBurden from "./SlideComplianceBurden";
import SlideBrokenModel from "./SlideBrokenModel";
import SlideSupplyChainCost from "./SlideSupplyChainCost";
import SlideSolutionPlatform from "./SlideSolutionPlatform";
import SlideHowItWorks from "./SlideHowItWorks";
import SlideAutomation from "./SlideAutomation";
import SlideDeadlineJSL from "./SlideDeadlineJSL";
import SlideRiskMap from "./SlideRiskMap1";
import SlideObjections from "./SlideObjections";
import SlideRoadmap from "./SlideRoadmap";
import SlideContact from "./SlideContact";

export const SLIDES = [
  { key: "hero", component: SlideHero },
  { key: "crisis", component: SlideCrisis },
  { key: "compliance", component: SlideComplianceBurden },
  { key: "broken", component: SlideBrokenModel },
  { key: "supply-cost", component: SlideSupplyChainCost },
  { key: "solution-platform", component: SlideSolutionPlatform },
  { key: "how", component: SlideHowItWorks },
  { key: "auto", component: SlideAutomation },
  { key: "deadline-jsl", component: SlideDeadlineJSL },
  { key: "risk", component: SlideRiskMap },
  { key: "objections", component: SlideObjections },
  { key: "roadmap", component: SlideRoadmap },
  { key: "contact", component: SlideContact },
];

export const SLIDE_LABELS = [
  "Title",
  "The Crisis",
  "Compliance",
  "Broken Model",
  "Supply & Cost",
  "Our Platform",
  "How It Works",
  "Automation",
  "April 2026",
  "Risk Map",
  "Common Questions",
  "Roadmap",
  "Contact",
];
