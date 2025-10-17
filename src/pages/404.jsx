import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useI18n } from "@/components/LanguageProvider";

export default function NotFound() {
  const { t } = useI18n();
  return (
    <div>
      <Header />
      <main className="section py-24 text-center">
        <h1 className="font-heading text-5xl">404</h1>
        <p className="mt-2 text-black/70">{t("error.notFound")}</p>
        <Link href="/" className="inline-block mt-6 px-5 py-2.5 rounded-full bg-navy text-white">{t("error.backHome")}</Link>
      </main>
      <Footer />
    </div>
  );
}
