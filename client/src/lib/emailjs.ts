import type { FormData } from "@/types";

// EmailJS service (would be implemented with actual EmailJS API in production)
export const sendEmail = async (formData: FormData): Promise<void> => {
  // In a real implementation, this would use EmailJS or another email service
  // For now, we'll simulate a successful API call with a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Email sent:", formData);
      resolve();
    }, 1500);
  });
};
