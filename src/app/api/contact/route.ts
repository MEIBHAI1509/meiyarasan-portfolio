import { NextResponse } from "next/server";
import { Resend } from "resend";

import PortfolioContactEmail from "@/emails/portfolio-contact";

const resend = new Resend(
  process.env.RESEND_API_KEY,
);

export async function POST(
  request: Request,
) {
  try {
    const body = await request.json();

    const name =
      typeof body.name === "string"
        ? body.name.trim()
        : "";

    const email =
      typeof body.email === "string"
        ? body.email.trim()
        : "";

    const subject =
      typeof body.subject === "string"
        ? body.subject.trim()
        : "";

    const message =
      typeof body.message === "string"
        ? body.message.trim()
        : "";

    /* ======================================================== */
    /* Validation */
    /* ======================================================== */

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          error:
            "Name, email, and message are required.",
        },
        {
          status: 400,
        },
      );
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          error:
            "Please provide a valid email address.",
        },
        {
          status: 400,
        },
      );
    }

    /* ======================================================== */
    /* Environment */
    /* ======================================================== */

    if (!process.env.RESEND_API_KEY) {
      console.error(
        "RESEND_API_KEY is missing.",
      );

      return NextResponse.json(
        {
          error:
            "Email service is not configured.",
        },
        {
          status: 500,
        },
      );
    }

    /* ======================================================== */
    /* Send email */
    /* ======================================================== */

    const { data, error } =
      await resend.emails.send({
        from:
          "Meiyarasan Portfolio <onboarding@resend.dev>",

        to: [
          "meiyarasan1509@gmail.com",
        ],

        replyTo: email,

        subject:
          subject ||
          `New portfolio enquiry from ${name}`,

        react: PortfolioContactEmail({
          name,
          email,
          subject,
          message,
        }),
      });

    /* ======================================================== */
    /* Resend error */
    /* ======================================================== */

    if (error) {
      console.error(
        "Resend error:",
        error,
      );

      return NextResponse.json(
        {
          error:
            "Unable to send your message right now.",
        },
        {
          status: 500,
        },
      );
    }

    /* ======================================================== */
    /* Success */
    /* ======================================================== */

    return NextResponse.json(
      {
        success: true,
        id: data?.id,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error(
      "Contact API error:",
      error,
    );

    return NextResponse.json(
      {
        error:
          "Something went wrong. Please try again.",
      },
      {
        status: 500,
      },
    );
  }
}