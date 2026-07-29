import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import MotionReveal from "./MotionReveal";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="hero-section">
      <div className="hero-atmosphere" aria-hidden="true" />
      <div className="page-container hero-grid">
        <MotionReveal className="hero-copy" distance={16}>
          <div className="hero-controls" aria-label={t("controls.currentLanguage")}>
            <ThemeToggle />
            <LanguageToggle />
          </div>
          <p className="eyebrow light">{t("hero.eyebrow")}</p>
          <h1>
            {t("hero.titleStart")}
            <br /><em>{t("hero.titleEmphasis")}</em>
          </h1>
          <p className="hero-intro">{t("hero.intro")}</p>
          <div className="hero-actions">
            <button className="button button-gold" onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}>
              {t("hero.explore")} <ArrowDown size={17} aria-hidden="true" />
            </button>
            <a className="text-link light" href="mailto:rebecca.chakrian.design@gmail.com">
              {t("hero.talk")} <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </MotionReveal>

        <MotionReveal className="hero-notes-column" delay={0.14} distance={18}>
          <div className="hero-notes-rule" aria-hidden="true" />
          <div className="glass-note hero-note hero-note-primary">
            <span className="glass-note-index">01</span>
            <p>{t("hero.note")}</p>
          </div>
          <div className="glass-note hero-note hero-note-role">
            <span className="glass-note-index">02</span>
            <p>
              <small>{t("hero.selected")}</small>
              <strong>{t("hero.role")}</strong>
            </p>
          </div>
          <div className="glass-note hero-note hero-note-availability">
            <span className="glass-note-index">03</span>
            <p>
              <small>{t("hero.location")}</small>
              <strong>{t("hero.availability")}</strong>
            </p>
          </div>
        </MotionReveal>
      </div>

      <div className="page-container hero-footer">
        <span>{t("hero.selected")}</span>
        <span className="hero-rule" />
        <span>{t("hero.availability")}</span>
      </div>
    </section>
  );
};

export default HeroSection;
