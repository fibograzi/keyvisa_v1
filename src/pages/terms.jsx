import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useI18n } from "@/components/LanguageProvider";

export default function Terms() {
  const { t } = useI18n();

  const sections = [
    { h: t("terms.scope.h"), p: t("terms.scope.p") },
    { h: t("terms.notLegal.h"), p: t("terms.notLegal.p") },
    { h: t("terms.clientDuties.h"), p: t("terms.clientDuties.p") },
    { h: t("terms.fees.h"), p: t("terms.fees.p") },
    { h: t("terms.cancellations.h"), p: t("terms.cancellations.p") },
    { h: t("terms.liability.h"), p: t("terms.liability.p") },
    { h: t("terms.ip.h"), p: t("terms.ip.p") },
    { h: t("terms.privacyRef.h"), p: t("terms.privacyRef.p") },
    { h: t("terms.governingLaw.h"), p: t("terms.governingLaw.p") },
    { h: t("terms.contact.h"), p: t("terms.contact.p") },
  ];

  return (
    <div>
      <Header />
      <main className="section py-10">
        <h1 className="font-heading text-4xl mb-6">{t("terms.title")}</h1>
        <div className="prose max-w-none">
          {sections.map((s, i)=> (
            <section key={i} className="mb-6">
              <h2 className="font-heading text-2xl mb-2">{s.h}</h2>
              <p className="text-black/80">{s.p}</p>
            </section>
          ))}
          <div className="text-xs text-black/50 mt-8">
            {t("terms.lastUpdated")}: 17 Oct 2025
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
