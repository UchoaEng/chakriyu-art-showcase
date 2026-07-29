import { useTranslation } from "react-i18next";
import BrandMark from "./BrandMark";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="site-footer">
      <div className="page-container footer-inner">
        <div>
          <span className="footer-mark"><BrandMark /></span>
          <p>{t("footer.statement").split("\n").map((line) => <span key={line}>{line}<br /></span>)}</p>
        </div>
        <div className="footer-right">
          <button onClick={() => document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" })}>{t("footer.top")}</button>
          <span>{t("footer.copyright", { year: new Date().getFullYear() })}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
