"use client";

import { FormEvent, useState } from "react";

export type ContactFormProps = {
  compact?: boolean;
  includeCompany?: boolean;
  includeKVKK?: boolean;
  id?: string;
};

export default function ContactForm({ compact = false, includeCompany = false, includeKVKK = false, id }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setResult("Talebiniz alındı. En kısa sürede sizinle iletişime geçeceğiz.");
    setIsSubmitting(false);
  }

  return (
    <form id={id} onSubmit={onSubmit} className="w-full">
      <div className={`grid ${compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"} gap-4`}>
        <div>
          <label className="block text-sm font-medium text-slate-700">İsim Soyisim</label>
          <input name="name" required placeholder="Adınızı giriniz" className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
        </div>
        {!compact && (
          <div>
            <label className="block text-sm font-medium text-slate-700">E-posta</label>
            <input type="email" name="email" required placeholder="ornek@eposta.com" className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
          </div>
        )}
        {includeCompany && (
          <div>
            <label className="block text-sm font-medium text-slate-700">Firma</label>
            <input name="company" placeholder="Firma adınız" className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
          </div>
        )}
        {includeCompany && (
          <div>
            <label className="block text-sm font-medium text-slate-700">Telefon</label>
            <input name="phone" placeholder="05xx xxx xx xx" className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
          </div>
        )}
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-slate-700">Mesaj</label>
          <textarea name="message" rows={compact ? 3 : 5} required placeholder="Talebinizi kısaca yazınız" className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
        </div>
        {includeKVKK && (
          <div className="sm:col-span-2 flex items-start gap-2">
            <input id="kvkk" type="checkbox" required className="mt-1" />
            <label htmlFor="kvkk" className="text-xs text-slate-600">KVKK Aydınlatma Metni&apos;ni okudum ve kabul ediyorum.</label>
          </div>
        )}
      </div>
      <div className="mt-4 flex items-center gap-4">
        <button disabled={isSubmitting} className="inline-flex items-center justify-center rounded-md bg-sky-600 text-white px-5 py-2 text-sm font-medium shadow hover:bg-sky-700 disabled:opacity-60">
          {isSubmitting ? "Gönderiliyor..." : "Gönder"}
        </button>
        {result && <span className="text-sm text-emerald-700">{result}</span>}
      </div>
    </form>
  );
}