"use client";

import { FormEvent, useState } from "react";

export type ContactFormProps = {
  compact?: boolean;
  includeCompany?: boolean;
  includeKVKK?: boolean;
  id?: string;
  variant?: "red" | "green";
};

export default function ContactForm({ compact = false, includeCompany = false, includeKVKK = false, id, variant = "red" }: ContactFormProps) {
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
          <label className={`block text-sm font-medium ${variant === "green" ? "text-green-800 dark:text-green-200" : "text-red-800 dark:text-red-200"}`}>İsim Soyisim</label>
          <input name="name" required placeholder="Adınızı giriniz" className={`mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 ${variant === "green" ? "border-green-300/50 dark:border-green-900/50 focus:ring-green-500" : "border-red-300/50 dark:border-red-900/50 focus:ring-red-500"}`} />
        </div>
        {!compact && (
          <div>
            <label className={`block text-sm font-medium ${variant === "green" ? "text-green-800 dark:text-green-200" : "text-red-800 dark:text-red-200"}`}>E-posta</label>
            <input type="email" name="email" required placeholder="ornek@eposta.com" className={`mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 ${variant === "green" ? "border-green-300/50 dark:border-green-900/50 focus:ring-green-500" : "border-red-300/50 dark:border-red-900/50 focus:ring-red-500"}`} />
          </div>
        )}
        {includeCompany && (
          <div>
            <label className={`block text-sm font-medium ${variant === "green" ? "text-green-800 dark:text-green-200" : "text-red-800 dark:text-red-200"}`}>Firma</label>
            <input name="company" placeholder="Firma adınız" className={`mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 ${variant === "green" ? "border-green-300/50 dark:border-green-900/50 focus:ring-green-500" : "border-red-300/50 dark:border-red-900/50 focus:ring-red-500"}`} />
          </div>
        )}
        {includeCompany && (
          <div>
            <label className={`block text-sm font-medium ${variant === "green" ? "text-green-800 dark:text-green-200" : "text-red-800 dark:text-red-200"}`}>Telefon</label>
            <input name="phone" placeholder="05xx xxx xx xx" className={`mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 ${variant === "green" ? "border-green-300/50 dark:border-green-900/50 focus:ring-green-500" : "border-red-300/50 dark:border-red-900/50 focus:ring-red-500"}`} />
          </div>
        )}
        <div className="sm:col-span-2">
          <label className={`block text-sm font-medium ${variant === "green" ? "text-green-800 dark:text-green-200" : "text-red-800 dark:text-red-200"}`}>Mesaj</label>
          <textarea name="message" rows={compact ? 3 : 5} required placeholder="Talebinizi kısaca yazınız" className={`mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 ${variant === "green" ? "border-green-300/50 dark:border-green-900/50 focus:ring-green-500" : "border-red-300/50 dark:border-red-900/50 focus:ring-red-500"}`} />
        </div>
        {includeKVKK && (
          <div className="sm:col-span-2 flex items-start gap-2">
            <input id="kvkk" type="checkbox" required className={`mt-1 ${variant === "green" ? "accent-green-600" : "accent-red-600"}`} />
            <label htmlFor="kvkk" className={`text-xs ${variant === "green" ? "text-green-700 dark:text-green-300" : "text-red-700 dark:text-red-300"}`}>KVKK Aydınlatma Metni&apos;ni okudum ve kabul ediyorum.</label>
          </div>
        )}
      </div>
      <div className="mt-4 flex items-center gap-4">
        <button disabled={isSubmitting} className={`inline-flex items-center justify-center rounded-md px-5 py-2 text-sm font-medium shadow disabled:opacity-60 ${variant === "green" ? "bg-green-600 hover:bg-green-700 text-white" : "bg-red-600 hover:bg-red-700 text-white"}`}>
          {isSubmitting ? "Gönderiliyor..." : "Gönder"}
        </button>
        {result && <span className={`text-sm ${variant === "green" ? "text-green-700 dark:text-green-300" : "text-red-700 dark:text-red-300"}`}>{result}</span>}
      </div>
    </form>
  );
}


