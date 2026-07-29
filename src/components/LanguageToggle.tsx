import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage?.startsWith("en") ? "en" : "pt";
  const nextLanguage = currentLanguage === "pt" ? "en" : "pt";

  return (
    <button
      type="button"
      className="hero-control-button language-control"
      onClick={() => void i18n.changeLanguage(nextLanguage)}
      aria-label={t("controls.language")}
      title={t("controls.language")}
    >
      <Languages size={15} aria-hidden="true" />
      <span>{currentLanguage.toUpperCase()}</span>
      <span className="control-next" aria-hidden="true">{nextLanguage.toUpperCase()}</span>
    </button>
  );
};

export default LanguageToggle;
