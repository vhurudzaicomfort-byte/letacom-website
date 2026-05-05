"use client";

import { WhatsAppIcon } from "@/components/icons";

export function WhatsAppButton() {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "27630769938";
  const message = encodeURIComponent(
    "Hi Letacom, I'd like to learn more about your solutions."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-5 lg:bottom-6 lg:right-6 z-40 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
      aria-label="Chat with Letacom on WhatsApp"
    >
      <WhatsAppIcon size={28} strokeWidth={1.5} />
    </a>
  );
}
