import { useEffect, useState } from "react";
import { HomeNavbar } from "@/components/landing/HomeNavbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { InsightsPreview } from "@/components/landing/InsightsPreview";
import { Preloader } from "@/components/landing/Preloader";

const PRELOADER_VISIBLE_MS = 1200;
const PRELOADER_FADE_MS = 380;

const Index = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const startFadeTimer = window.setTimeout(() => {
      setIsFadingOut(true);
    }, PRELOADER_VISIBLE_MS);

    const hideLoaderTimer = window.setTimeout(() => {
      setShowPreloader(false);
    }, PRELOADER_VISIBLE_MS + PRELOADER_FADE_MS);

    return () => {
      window.clearTimeout(startFadeTimer);
      window.clearTimeout(hideLoaderTimer);
    };
  }, []);

  return (
    <>
      {showPreloader ? (
        <div
          style={{
            opacity: isFadingOut ? 0 : 1,
            transition: `opacity ${PRELOADER_FADE_MS}ms ease`,
          }}
        >
          <Preloader />
        </div>
      ) : null}

      <div
        className="min-h-screen bg-background"
        style={{
          opacity: showPreloader ? 0 : 1,
          transform: showPreloader ? "translateY(8px)" : "translateY(0)",
          transition: "opacity 420ms ease, transform 420ms ease",
        }}
      >
        <HomeNavbar />
        <div id="hero"><HeroSection /></div>
        <div id="features"><FeaturesSection /></div>
        <div id="how-it-works"><HowItWorksSection /></div>
        <div id="insights"><InsightsPreview /></div>
      </div>
    </>
  );
};

export default Index;
