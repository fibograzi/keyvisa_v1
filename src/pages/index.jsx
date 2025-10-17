import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import { useI18n } from "@/components/LanguageProvider";

function DestinationCard({ title, image, alt }) {
  return (
    <div className="bg-white rounded-2xl shadow-subtle overflow-hidden">
      <div className="relative h-40">
        <Image src={image} alt={alt} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-medium">{title}</h3>
      </div>
    </div>
  );
}

function ServiceCard({ title, desc, icon }) {
  return (
    <div className="bg-white rounded-2xl shadow-subtle p-5">
      <div className="text-2xl">{icon}</div>
      <h3 className="mt-2 font-medium">{title}</h3>
      <p className="mt-1 text-sm text-black/70">{desc}</p>
    </div>
  );
}

export default function HomePage() {
  const { t } = useI18n();

  const destinations = [
    { key: "thailand", img: "/assets/thailand.jpg" },
    { key: "vietnam",  img: "/assets/vietnam.jpg" },
    { key: "india",    img: "/assets/india.jpg" },
    { key: "china",    img: "/assets/china.jpg" },
    { key: "bali",     img: "/assets/bali.jpg" },
    { key: "schengen", img: "/assets/schengen.jpg" },
  ];

  const services = [
    { key: "tourist", icon: "🛂" },
    { key: "student", icon: "🎓" },
    { key: "business", icon: "💼" },
    { key: "transit", icon: "✈️" },
    { key: "family", icon: "👨‍👩‍👧" },
    { key: "vip", icon: "🌟" },
  ];

  const faqs = t("home.faq.items");

  const submitContact = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const subject = encodeURIComponent("KEYVISA — New inquiry");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    window.location.href = `mailto:hello@keyvisa.co?subject=${subject}&body=${body}`;
  };

  return (
    <div>
      <Header />
      {/* Hero */}
      <section className="section pt-12 sm:pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <FadeIn>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold text-xs mb-4">
                {t("home.hero.eyebrow")}
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl leading-tight">{t("home.hero.title")}</h1>
              <p className="mt-3 text-black/70">{t("home.hero.subtitle")}</p>
              <div className="mt-6 flex gap-3">
                <a href="#contact" className="px-5 py-2.5 rounded-full bg-gold text-navy font-medium">{t("common.ctaTalk")}</a>
                <a href="https://t.me/keyvisa_consult" target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-full border border-black/10 hover:border-gold">{t("common.ctaTelegram")}</a>
              </div>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-subtle">
              <Image src="/assets/hero.jpg" alt={t("home.hero.imageAlt")} fill className="object-cover" priority />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Destinations */}
      <SectionTitle id="destinations" eyebrow={t("home.destinations.eyebrow")} title={t("home.destinations.title")} subtitle={t("home.destinations.subtitle")} />
      <section className="section pb-6">
        <FadeIn className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((d)=> (
            <DestinationCard key={d.key} title={t(`home.destinations.items.${d.key}.title`)} image={d.img} alt={t(`home.destinations.items.${d.key}.alt`)} />
          ))}
        </FadeIn>
      </section>

      {/* Services */}
      <SectionTitle id="services" eyebrow={t("home.services.eyebrow")} title={t("home.services.title")} subtitle={t("home.services.subtitle")} />
      <section className="section">
        <FadeIn className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s)=> (
            <ServiceCard key={s.key} title={t(`home.services.items.${s.key}.title`)} desc={t(`home.services.items.${s.key}.desc`)} icon={s.icon} />
          ))}
        </FadeIn>
      </section>

      {/* Why */}
      <SectionTitle id="why" eyebrow={t("home.why.eyebrow")} title={t("home.why.title")} />
      <section className="section">
        <FadeIn>
          <div className="grid sm:grid-cols-3 gap-6">
            {t("home.why.points").map((p, i)=> (
              <div key={i} className="bg-white rounded-2xl shadow-subtle p-5">
                <div className="text-xl">✔</div>
                <div className="mt-1 font-medium">{p.title}</div>
                <div className="text-sm text-black/70">{p.desc}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Testimonials */}
      <SectionTitle id="testimonials" eyebrow={t("home.testimonials.eyebrow")} title={t("home.testimonials.title")} />
      <section className="section">
        <FadeIn className="grid md:grid-cols-3 gap-6">
          {t("home.testimonials.items").map((item, i)=> (
            <div key={i} className="bg-white rounded-2xl shadow-subtle p-5">
              <div className="text-sm text-black/60">“{item.quote}”</div>
              <div className="mt-3 font-medium">{item.name}</div>
              <div className="text-xs text-black/50">{item.meta}</div>
            </div>
          ))}
        </FadeIn>
      </section>

      {/* FAQ */}
      <SectionTitle id="faq" eyebrow="FAQ" title={t("home.faq.title")} subtitle={t("home.faq.subtitle")} />
      <section className="section">
        <FadeIn className="grid md:grid-cols-2 gap-6">
          {faqs.map((f, i)=> (
            <details key={i} className="bg-white rounded-2xl shadow-subtle p-5">
              <summary className="cursor-pointer font-medium">{f.q}</summary>
              <p className="mt-2 text-sm text-black/70">{f.a}</p>
            </details>
          ))}
        </FadeIn>
      </section>

      {/* Contact */}
      <SectionTitle id="contact" eyebrow={t("home.contact.eyebrow")} title={t("home.contact.title")} subtitle={t("home.contact.subtitle")} />
      <section className="section pb-16">
        <FadeIn className="grid md:grid-cols-2 gap-8">
          <form onSubmit={submitContact} className="bg-white rounded-2xl shadow-subtle p-6 space-y-4" aria-label={t("home.contact.formAria")}>
            <div>
              <label className="block text-sm mb-1">{t("common.name")}</label>
              <input name="name" className="w-full rounded-xl border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold" required />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input type="email" name="email" className="w-full rounded-xl border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold" required />
            </div>
            <div>
              <label className="block text-sm mb-1">{t("common.message")}</label>
              <textarea name="message" rows={5} className="w-full rounded-xl border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold" required></textarea>
            </div>
            <button type="submit" className="px-5 py-2.5 rounded-full bg-navy text-white hover:opacity-90">{t("common.send")}</button>
          </form>
          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-subtle p-6">
              <h3 className="font-medium">{t("home.contact.directTitle")}</h3>
              <p className="text-sm text-black/70">{t("home.contact.directText")}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a className="px-4 py-2 rounded-full bg-gold text-navy font-medium" href="https://t.me/keyvisa_consult" target="_blank" rel="noreferrer">{t("common.ctaTelegram")}</a>
                <a className="px-4 py-2 rounded-full border border-black/10 hover:border-gold" href="mailto:hello@keyvisa.co">hello@keyvisa.co</a>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-subtle p-6">
              <h3 className="font-medium">{t("home.contact.noteTitle")}</h3>
              <p className="text-sm text-black/70">{t("home.contact.noteText")}</p>
            </div>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </div>
  );
}
