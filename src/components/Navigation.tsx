import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "motion/react";

const navigationItems = [
  { key: "projects", href: "#projects" },
  { key: "about", href: "#about" },
  { key: "experience", href: "#experience" },
  { key: "contact", href: "#contact" },
] as const;

const Navigation = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateNavigation = () => setIsScrolled(window.scrollY > 24);
    updateNavigation();
    window.addEventListener("scroll", updateNavigation, { passive: true });
    return () => window.removeEventListener("scroll", updateNavigation);
  }, []);

  const navigateTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header className={`navigation-wrap ${isScrolled ? "is-scrolled" : ""}`}>
      <nav className="navigation" aria-label={t("nav.label")}>
        <button className="brand" onClick={() => navigateTo("#home")} aria-label={t("nav.home")}>
          <span className="brand-mark"><img src="/favicon.svg" alt="" aria-hidden="true" /></span>
          <span className="brand-name">Rebecca Chakrian</span>
        </button>

        <div className="nav-links" aria-label={t("nav.sections")}>
          {navigationItems.map((item) => (
            <button key={item.href} onClick={() => navigateTo(item.href)}>
              {t(`nav.${item.key}`)}
            </button>
          ))}
        </div>

        <a className="nav-contact" href="mailto:rebecca.chakrian.design@gmail.com">
          {t("nav.talk")} <ArrowUpRight size={15} aria-hidden="true" />
        </a>

        <button
          className="nav-menu-button"
          onClick={() => setIsOpen((current) => !current)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? t("nav.close") : t("nav.open")}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            id="mobile-menu"
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -6, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {navigationItems.map((item) => (
              <button key={item.href} onClick={() => navigateTo(item.href)}>
                {t(`nav.${item.key}`)}
              </button>
            ))}
            <a href="mailto:rebecca.chakrian.design@gmail.com">rebecca.chakrian.design@gmail.com</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;
