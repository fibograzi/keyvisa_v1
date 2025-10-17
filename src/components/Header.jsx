import Link from "next/link";
import { useI18n } from "./LanguageProvider";

export default function Header() {
  const { locale, setLocale, t } = useI18n();

  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-[var(--color-bg)]/85 border-b border-black/5">
      <div className="section py-3 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-2xl bg-navy text-white grid place-items-center font-bold">KV</div>
            <span className="font-heading text-xl tracking-wide">KEYVISA</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#destinations" className="hover:text-gold">{t("nav.destinations")}</a>
          <a href="#services" className="hover:text-gold">{t("nav.services")}</a>
          <a href="#why" className="hover:text-gold">{t("nav.why")}</a>
          <a href="#testimonials" className="hover:text-gold">{t("nav.testimonials")}</a>
          <a href="#faq" className="hover:text-gold">FAQ</a>
          <a href="#contact" className="hover:text-gold">{t("nav.contact")}</a>
          <Link href="/privacy" className="hover:text-gold">{t("nav.privacy")}</Link>
          <Link href="/terms" className="hover:text-gold">{t("nav.terms")}</Link>
        </nav>
        <div className="flex items-center gap-2">
          <button
            aria-label="Language toggle"
            onClick={()=> setLocale(locale === "ru" ? "en" : "ru")}
            className="px-3 py-1.5 rounded-full border border-black/10 hover:border-gold transition"
          >
            {locale === "ru" ? "🇷🇺 / EN" : "🇬🇧 / RU"}
          </button>
          <a
            className="hidden sm:inline-block px-3 py-1.5 rounded-full bg-gold text-navy font-medium hover:opacity-90"
            href="#contact"
          >
            {t("common.ctaTalk")}
          </a>
        </div>
      </div>
    </header>
  );
}
