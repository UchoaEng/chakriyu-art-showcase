import { Bot, BriefcaseBusiness, MessagesSquare } from "lucide-react";
import { useTranslation } from "react-i18next";
import MotionReveal from "./MotionReveal";

const pillars = [
  { key: "brand", icon: BriefcaseBusiness },
  { key: "communication", icon: MessagesSquare },
  { key: "technology", icon: Bot },
] as const;

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="about-section">
      <div className="page-container">
        <MotionReveal>
          <header className="section-heading section-heading-dark about-heading">
            <div>
              <p className="eyebrow light">{t("about.eyebrow")}</p>
              <h2>{t("about.heading")}</h2>
            </div>
            <p>{t("about.intro")}</p>
          </header>
        </MotionReveal>

        <MotionReveal delay={0.08}>
          <div className="about-pillars">
            {pillars.map(({ key, icon: Icon }) => (
              <article key={key} className="about-pillar">
                <div className="about-pillar-top">
                  <span>{t(`about.pillars.${key}.index`)}</span>
                  <Icon size={18} strokeWidth={1.45} aria-hidden="true" />
                </div>
                <h3>{t(`about.pillars.${key}.title`)}</h3>
                <p>{t(`about.pillars.${key}.text`)}</p>
              </article>
            ))}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
};

export default AboutSection;
