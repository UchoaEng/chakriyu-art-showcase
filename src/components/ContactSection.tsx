import { FormEvent, useState } from "react";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { BehanceIcon, LinkedInIcon } from "./SocialIcons";
import MotionReveal from "./MotionReveal";

const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const subject = encodeURIComponent(t("contact.mailSubject", { name: formData.name }));
    const body = encodeURIComponent(`${formData.message}\n\n${t("contact.mailReturn", { email: formData.email })}`);
    window.location.href = `mailto:chakriyuartist@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact-section">
      <div className="page-container">
        <MotionReveal>
          <header className="section-heading contact-heading">
            <div>
              <p className="eyebrow">{t("contact.eyebrow")}</p>
              <h2>{t("contact.headingStart")}<br />{t("contact.headingMiddle")} <em>{t("contact.headingEmphasis")}</em></h2>
            </div>
            <p>{t("contact.lead")}</p>
          </header>
        </MotionReveal>

        <MotionReveal delay={0.08}>
          <div className="contact-grid">
            <div className="contact-details">
              <div className="contact-list">
                <a href="mailto:chakriyuartist@gmail.com">
                  <Mail size={18} aria-hidden="true" />
                  <span><small>{t("contact.emailLabel")}</small>chakriyuartist@gmail.com</span>
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
                <div>
                  <MapPin size={18} aria-hidden="true" />
                  <span><small>{t("contact.baseLabel")}</small>{t("contact.base")}</span>
                </div>
              </div>
              <div className="social-links">
                <a href="https://www.behance.net/chakriyu" target="_blank" rel="noreferrer"><BehanceIcon size={17} /> Behance</a>
                <a href="https://www.linkedin.com/in/rebecca-chakrian/" target="_blank" rel="noreferrer"><LinkedInIcon size={17} /> LinkedIn</a>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label>
                  <span>{t("contact.name")}</span>
                  <input required name="name" value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} placeholder={t("contact.namePlaceholder")} />
                </label>
                <label>
                  <span>{t("contact.email")}</span>
                  <input required type="email" name="email" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} placeholder={t("contact.emailPlaceholder")} />
                </label>
              </div>
              <label>
                <span>{t("contact.message")}</span>
                <textarea required name="message" rows={5} value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} placeholder={t("contact.messagePlaceholder")} />
              </label>
              <button className="button button-wine" type="submit">{t("contact.submit")} <ArrowUpRight size={17} aria-hidden="true" /></button>
              <p className="form-note">{t("contact.note")}</p>
            </form>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
};

export default ContactSection;
