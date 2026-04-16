import { z } from 'zod';
import { Resend } from 'resend';

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  category: z.string().min(1, "Category is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().optional(),
});

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  // 1. Validate with Zod
  const result = contactSchema.safeParse(body);
  if (!result.success) {
    throw createError({
      statusCode: 400,
      statusMessage: "Validation failed",
      data: result.error.errors,
    });
  }

  const { name, email, phone, category, message, honeypot } = result.data;

  // 2. Honeypot check (anti-spam)
  // TEMPORARILY DISABLED to fix false success tracking
  // if (honeypot) {
  //   return { success: true, message: "Message sent successfully" };
  // }

  // 3. Send email using Resend
  const config = useRuntimeConfig();
  const resendApiKey = config.resendApiKey;
  if (!resendApiKey) {
    console.error("Missing RESEND_API_KEY in environment variables");
    throw createError({
      statusCode: 500,
      statusMessage: "Server Configuration Error: Missing Resend API Key"
    });
  }

  const resend = new Resend(resendApiKey);

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Update with your verified domain in production
      to: 'maryamzimal24@gmail.com', // Admin email
      subject: `New Contact Request: ${category} from ${name}`,
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Category:</strong> ${category}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    });

    if (error) {
      console.error("Resend API returned error:", error);
      throw createError({
        statusCode: 500,
        statusMessage: `Resend Error: ${error.message || 'Failed to send'}`
      });
    }

    return {
      success: true,
      message: "Message sent successfully",
      data
    };
  } catch (error: any) {
    console.error("Resend error:", error);
    throw createError({
      statusCode: 500,
      statusMessage: `Resend Error: ${error?.message || "Failed to send email. Check API key and domain verify."}`
    });
  }
});
