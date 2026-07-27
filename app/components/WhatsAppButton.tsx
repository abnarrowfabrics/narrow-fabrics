import Link from "next/link";
import { WHATSAPP_NUMBER, WhatsAppIcon } from "../lib/whatsapp";

export default function WhatsAppButton() {
  const message = "Hey, can I get more information on Lanyard?";
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon size={32} />
    </Link>
  );
}
