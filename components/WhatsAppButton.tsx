import { whatsappHref } from "@/data/site";
import { WhatsAppIcon } from "./ui/WhatsAppIcon";

/**
 * Floating "chat on WhatsApp" button, shown on every page.
 * z-30 keeps it under the navbar's mobile menu (z-40) and the gallery lightbox (z-60).
 */
export function WhatsAppButton() {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-30 flex size-14 cursor-pointer items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 transition-[background-color,box-shadow] duration-200 hover:bg-[#1ebe5b] hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:bottom-7 sm:right-7"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
