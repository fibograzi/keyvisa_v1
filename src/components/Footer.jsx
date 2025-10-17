import Link from "next/link";
import { useI18n } from "./LanguageProvider";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="mt-16 border-t border-black/5">
      <div className="section py-8 text-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="text-black/70">© 2025 KEYVISA — {t("footer.rights")}</div>
        <div className="flex items-center gap-4">
          <Link href="/privacy" className="hover:text-gold">{t("nav.privacy")}</Link>
          <Link href="/terms" className="hover:text-gold">{t("nav.terms")}</Link>
          <a href="https://t.me/keyvisa_consult" target="_blank" rel="noreferrer" className="hover:text-gold">Telegram</a>
        </div>
      </div>
    </footer>
  );
}
