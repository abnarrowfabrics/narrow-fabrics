import { whatsappContacts, WhatsAppIcon } from "../lib/whatsapp";

export default function WhatsAppButton() {
  const message = encodeURIComponent("Hey, can I get more information on Lanyard?");

  return (
    <details className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      <summary
        aria-label="Chat on WhatsApp"
        className="flex h-13 w-13 cursor-pointer list-none items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl sm:h-14 sm:w-14 [&::-webkit-details-marker]:hidden"
      >
        <WhatsAppIcon size={32} />
      </summary>
      <div className="absolute right-0 bottom-full mb-3 w-max rounded-lg bg-white p-1.5 shadow-xl ring-1 ring-black/10">
        {whatsappContacts.map((c) => (
          <a
            key={c.number}
            href={`https://wa.me/91${c.number}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded px-3 py-2 text-sm whitespace-nowrap text-gray-800 hover:bg-gray-100"
          >
            {c.name} <span className="text-gray-500">+91 {c.number}</span>
          </a>
        ))}
      </div>
    </details>
  );
}
