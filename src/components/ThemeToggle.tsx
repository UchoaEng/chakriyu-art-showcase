import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";
  const label = isDark ? t("controls.themeLight") : t("controls.themeDark");

  return (
    <button
      type="button"
      className="hero-control-button theme-control"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={label}
      title={label}
      disabled={!mounted}
    >
      <span className="control-icon" aria-hidden="true">
        {isDark ? <Sun size={15} /> : <Moon size={15} />}
      </span>
      <span>{isDark ? t("controls.themeStateLight") : t("controls.themeStateDark")}</span>
    </button>
  );
};

export default ThemeToggle;
