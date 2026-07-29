import { useTranslation } from "react-i18next";
import MotionReveal from "./MotionReveal";

const certificationKeys = ["growth", "strategy", "accessibility", "brands", "branding"] as const;

const CertificationsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="certifications" className="certifications-section">
      <div className="page-container certifications-layout">
        <MotionReveal>
          <header className="section-heading certifications-heading">
            <div>
              <p className="eyebrow">{t("certifications.eyebrow")}</p>
              <h2>{t("certifications.heading")}</h2>
            </div>
            <p>{t("certifications.intro")}</p>
          </header>
        </MotionReveal>

        <MotionReveal delay={0.08}>
          <div className="certifications-list">
            {certificationKeys.map((key, index) => (
              <article key={key} className="certification-row">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{t(`certifications.items.${key}.name`)}</h3>
                  <p>{t(`certifications.items.${key}.institution`)}</p>
                </div>
                <time aria-label={t("certifications.yearLabel")}>{t(`certifications.items.${key}.year`)}</time>
              </article>
            ))}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
};

export default CertificationsSection;
