import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useI18n } from "@/components/LanguageProvider";

export default function Privacy() {
  const { t, locale } = useI18n();

  const sections = [
    { h: t("privacy.intro.h"), p: t("privacy.intro.p") },
    { h: t("privacy.controller.h"), p: t("privacy.controller.p") },
    { h: t("privacy.data.h"), p: t("privacy.data.p") },
    { h: t("privacy.use.h"), p: t("privacy.use.p") },
    { h: t("privacy.basis.h"), p: t("privacy.basis.p") },
    { h: t("privacy.retention.h"), p: t("privacy.retention.p") },
    { h: t("privacy.security.h"), p: t("privacy.security.p") },
    { h: t("privacy.transfer.h"), p: t("privacy.transfer.p") },
    { h: t("privacy.rights.h"), p: t("privacy.rights.p") },
    { h: t("privacy.contact.h"), p: t("privacy.contact.p") },
  ];

  return (
    <div>
      <Header />
      <main className="section py-10">
        <h1 className="font-heading text-4xl mb-6">{t("privacy.title")}</h1>
        <div className="prose max-w-none">
          {sections.map((s, i)=> (
            <section key={i} className="mb-6">
              <h2 className="font-heading text-2xl mb-2">{s.h}</h2>
              <p className="text-black/80">{s.p}</p>
            </section>
          ))}
          <div className="text-xs text-black/50 mt-8">
            {t("privacy.lastUpdated")}: 17 Oct 2025
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
