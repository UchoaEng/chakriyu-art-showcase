import { Clapperboard, Mail, Shapes, Wrench } from "lucide-react";
import { useTranslation } from "react-i18next";
import MotionReveal from "./MotionReveal";

const groups = [
  { key: "strategic", icon: Shapes },
  { key: "content", icon: Clapperboard },
  { key: "email", icon: Mail },
  { key: "tools", icon: Wrench },
] as const;

const SkillsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="skills-section">
      <div className="page-container">
        <MotionReveal>
          <header className="section-heading section-heading-dark professional-heading">
            <div>
              <p className="eyebrow light">{t("skills.eyebrow")}</p>
              <h2>{t("skills.heading")}</h2>
            </div>
            <p>{t("skills.intro")}</p>
          </header>
        </MotionReveal>

        <MotionReveal delay={0.08}>
          <div className="skills-editorial-grid">
            {groups.map(({ key, icon: Icon }, index) => {
              const items = t(`skills.${key}.items`, { returnObjects: true }) as string[];
              return (
                <article key={key} className={`skill-editorial-card skill-card-${index + 1}`}>
                  <div className="skill-card-heading">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <Icon size={19} strokeWidth={1.45} aria-hidden="true" />
                  </div>
                  <h3>{t(`skills.${key}.title`)}</h3>
                  <ul>
                    {items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              );
            })}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
};

export default SkillsSection;
