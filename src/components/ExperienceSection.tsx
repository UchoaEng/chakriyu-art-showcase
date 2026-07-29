import { useTranslation } from "react-i18next";
import MotionReveal from "./MotionReveal";

const experienceKeys = ["starian", "mvc"] as const;

const ExperienceSection = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="experience-section">
      <div className="page-container">
        <MotionReveal>
          <header className="section-heading section-heading-dark experience-heading">
            <div>
              <p className="eyebrow light">{t("experience.eyebrow")}</p>
              <h2>{t("experience.heading")}</h2>
            </div>
            <p>{t("experience.intro")}</p>
          </header>
        </MotionReveal>

        <MotionReveal delay={0.08}>
          <div className="experience-timeline">
            {experienceKeys.map((key, index) => {
              const paragraphs = t(`experience.companies.${key}.paragraphs`, { returnObjects: true }) as string[];
              return (
                <article key={key} className="experience-entry">
                  <div className="experience-marker" aria-hidden="true">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <header>
                    <div>
                      <h3>{t(`experience.companies.${key}.company`)}</h3>
                      <p>{t(`experience.companies.${key}.role`)}</p>
                    </div>
                    <time>{t(`experience.companies.${key}.period`)}</time>
                  </header>
                  <div className="experience-copy">
                    {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                </article>
              );
            })}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
};

export default ExperienceSection;
