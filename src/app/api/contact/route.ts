import { NextResponse } from "next/server";
import { Resend } from "resend";

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

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                {
                    error:
                        "Name, email, and message are required.",
                },
                { status: 400 },
            );
        }

        // Basic email validation
        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return NextResponse.json(
                {
                    error: "Please provide a valid email address.",
                },
                { status: 400 },
            );
        }

        if (!process.env.RESEND_API_KEY) {
            console.error(
                "RESEND_API_KEY is not configured.",
            );

            return NextResponse.json(
                {
                    error:
                        "Email service is not configured.",
                },
                { status: 500 },
            );
        }

        const { data, error } =
            await resend.emails.send({
                from:
                    "Portfolio Contact <onboarding@resend.dev>",

                to: [
                    "meiyarasan1509@gmail.com",
                ],

                replyTo: email,

                subject:
                    subject ||
                    `New portfolio enquiry from ${name}`,

                html: `
          <div style="
            font-family: Arial, sans-serif;
            max-width: 640px;
            margin: 0 auto;
            padding: 32px;
            color: #18181b;
          ">
            <div style="
              border: 1px solid #e4e4e7;
              border-radius: 16px;
              padding: 28px;
            ">
              <h1 style="
                margin: 0 0 8px;
                font-size: 24px;
              ">
                New Portfolio Enquiry
              </h1>

              <p style="
                margin: 0 0 28px;
                color: #71717a;
                font-size: 14px;
              ">
                Someone contacted you through
                your portfolio.
              </p>

              <div style="
                margin-bottom: 20px;
              ">
                <p style="
                  margin: 0 0 6px;
                  color: #71717a;
                  font-size: 12px;
                  text-transform: uppercase;
                  letter-spacing: 0.08em;
                ">
                  Name
                </p>

                <p style="
                  margin: 0;
                  font-size: 16px;
                  font-weight: 600;
                ">
                  ${escapeHtml(name)}
                </p>
              </div>

              <div style="
                margin-bottom: 20px;
              ">
                <p style="
                  margin: 0 0 6px;
                  color: #71717a;
                  font-size: 12px;
                  text-transform: uppercase;
                  letter-spacing: 0.08em;
                ">
                  Email
                </p>

                <p style="
                  margin: 0;
                  font-size: 16px;
                ">
                  ${escapeHtml(email)}
                </p>
              </div>

              <div style="
                margin-bottom: 20px;
              ">
                <p style="
                  margin: 0 0 6px;
                  color: #71717a;
                  font-size: 12px;
                  text-transform: uppercase;
                  letter-spacing: 0.08em;
                ">
                  Subject
                </p>

                <p style="
                  margin: 0;
                  font-size: 16px;
                ">
                  ${escapeHtml(
                    subject || "No subject",
                )}
                </p>
              </div>

              <div>
                <p style="
                  margin: 0 0 6px;
                  color: #71717a;
                  font-size: 12px;
                  text-transform: uppercase;
                  letter-spacing: 0.08em;
                ">
                  Message
                </p>

                <div style="
                  border-radius: 12px;
                  background: #f4f4f5;
                  padding: 16px;
                  font-size: 15px;
                  line-height: 1.7;
                  white-space: pre-wrap;
                ">
                  ${escapeHtml(message)}
                </div>
              </div>
            </div>

            <p style="
              margin-top: 20px;
              text-align: center;
              color: #a1a1aa;
              font-size: 12px;
            ">
              Sent from Meiyarasan P's portfolio.
            </p>
          </div>
        `,
            });

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
                { status: 500 },
            );
        }

        return NextResponse.json(
            {
                success: true,
                id: data?.id,
            },
            { status: 200 },
        );
    } catch (error) {
        console.error(
            "Contact form error:",
            error,
        );

        return NextResponse.json(
            {
                error:
                    "Something went wrong. Please try again.",
            },
            { status: 500 },
        );
    }
}

/**
 * Escape user-provided values before inserting
 * them into the email HTML.
 */
function escapeHtml(value: string) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}