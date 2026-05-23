import { siteConfig } from "../config/site";

/**
 * Helper function to generate WhatsApp link with a pre-filled message
 * @param {string} message - The message to pre-fill
 * @returns {string} The WhatsApp wa.me URL
 */
export function createWhatsAppLink(message) {
  // Remove any non-numeric characters from the phone number
  let phoneNumber = siteConfig.whatsappNumber.replace(/\D/g, "");

  // Make sure the number starts with the country code (62 for Indonesia)
  if (phoneNumber.startsWith("0")) {
    phoneNumber = "62" + phoneNumber.substring(1);
  } else if (!phoneNumber.startsWith("62")) {
    // Default to Indonesia country code if not provided
    phoneNumber = "62" + phoneNumber;
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}
