import { createContext, useContext, useEffect, useMemo, useState } from "react";
import en from "../locales/en.json";
import ru from "../locales/ru.json";

const LanguageContext = createContext({ locale: "ru", t: (k)=>k, setLocale: ()=>{} });

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState("ru");

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem("kv_locale") : null;
    if (saved) setLocale(saved);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') localStorage.setItem("kv_locale", locale);
    // sync Next.js locale in URL without page reload
    if (typeof window !== 'undefined' && window.location.pathname.startsWith(`/${locale}`) === false) {
      // keep path, just rely on our in-app i18n (no hard routing change)
    }
  }, [locale]);

  const dict = locale === "en" ? en : ru;
  const t = (key) => {
    const parts = key.split(".");
    let cur = dict;
    for (const p of parts) {
      if (cur && Object.prototype.hasOwnProperty.call(cur, p)) cur = cur[p];
      else return key;
    }
    return cur;
  };

  const value = useMemo(()=>({ locale, setLocale, t }), [locale]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n() {
  return useContext(LanguageContext);
}
