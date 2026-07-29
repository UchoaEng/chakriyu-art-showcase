import { useTranslation } from "react-i18next";
import MotionReveal from "./MotionReveal";

const educationKeys = ["design", "arts"] as const;

const FormationSection = () => {
  const { t } = useTranslation();

  return (
    <section id="education" className="formation-section">
      <div className="page-container">
        <MotionReveal>
          <header className="section-heading formation-heading">
            <div>
              <p className="eyebrow">{t("education.eyebrow")}</p>
              <h2>{t("education.heading")}</h2>
            </div>
            <p>{t("education.intro")}</p>
          </header>
        </MotionReveal>

        <MotionReveal delay={0.08}>
          <div className="formation-list">
            {educationKeys.map((key, index) => (
              <article key={key} className="formation-entry">
                <span className="formation-index">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{t(`education.items.${key}.course`)}</h3>
                  <p>{t(`education.items.${key}.institution`)}</p>
                </div>
                <div className="formation-status">
                  <small>{t("education.statusLabel")}</small>
                  <span>{t(`education.items.${key}.status`)}</span>
                </div>
              </article>
            ))}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
};

export default FormationSection;
