import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <main className="not-found">
      <span>{t("notFound.title")}</span>
      <h1>{t("notFound.text")}</h1>
      <a href="/">{t("notFound.home")}</a>
    </main>
  );
};

export default NotFound;
