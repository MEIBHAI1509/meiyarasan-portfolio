import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Preview,
    Section,
    Text,
} from "@react-email/components";

interface PortfolioContactEmailProps {
    name: string;
    email: string;
    subject?: string;
    message: string;
}

export default function PortfolioContactEmail({
    name,
    email,
    subject,
    message,
}: PortfolioContactEmailProps) {
    return (
        <Html>
            <Head />

            <Preview>
                New portfolio enquiry from {name}
            </Preview>

            <Body style={body}>
                <Container style={container}>
                    {/* ================================================= */}
                    {/* Header */}
                    {/* ================================================= */}

                    <Section style={header}>
                        <Text style={logo}>MP</Text>

                        <Text style={brand}>
                            MEIYARASAN P
                        </Text>

                        <Text style={brandSubtext}>
                            PORTFOLIO
                        </Text>
                    </Section>

                    {/* ================================================= */}
                    {/* Main */}
                    {/* ================================================= */}

                    <Section style={main}>
                        <Text style={eyebrow}>
                            NEW PROJECT ENQUIRY
                        </Text>

                        <Text style={title}>
                            Someone reached out
                            through your portfolio.
                        </Text>

                        <Text style={description}>
                            You have received a new message
                            from the contact form on your
                            portfolio website.
                        </Text>

                        {/* ================================================= */}
                        {/* Sender Information */}
                        {/* ================================================= */}

                        <Section style={infoCard}>
                            <Text style={label}>
                                FROM
                            </Text>

                            <Text style={value}>
                                {name}
                            </Text>

                            <Text style={labelWithSpacing}>
                                EMAIL
                            </Text>

                            <Text style={value}>
                                {email}
                            </Text>

                            <Text style={labelWithSpacing}>
                                SUBJECT
                            </Text>

                            <Text style={value}>
                                {subject || "No subject"}
                            </Text>
                        </Section>

                        {/* ================================================= */}
                        {/* Message */}
                        {/* ================================================= */}

                        <Text style={messageLabel}>
                            MESSAGE
                        </Text>

                        <Section style={messageCard}>
                            <Text style={messageText}>
                                {message}
                            </Text>
                        </Section>

                        {/* ================================================= */}
                        {/* Reply */}
                        {/* ================================================= */}

                        <Section style={buttonContainer}>
                            <Button
                                href={`mailto:${email}`}
                                style={button}
                            >
                                Reply to {name}
                            </Button>
                        </Section>

                        <Text style={replyHint}>
                            Clicking the button above will
                            open your email client and address
                            the reply directly to {email}.
                        </Text>
                    </Section>

                    {/* ================================================= */}
                    {/* Footer */}
                    {/* ================================================= */}

                    <Hr style={divider} />

                    <Section style={footer}>
                        <Text style={footerText}>
                            Sent from Meiyarasan P&apos;s
                            portfolio.
                        </Text>

                        <Text style={footerEmail}>
                            meiyarasan1509@gmail.com
                        </Text>

                        <Text style={copyright}>
                            © {new Date().getFullYear()}{" "}
                            Meiyarasan P. All rights reserved.
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}

/* ============================================================ */
/* Styles */
/* ============================================================ */

const body = {
    backgroundColor: "#09090b",
    fontFamily:
        "Inter, Arial, Helvetica, sans-serif",
    margin: "0",
    padding: "40px 16px",
};

const container = {
    backgroundColor: "#111113",
    border:
        "1px solid rgba(255,255,255,0.08)",
    borderRadius: "20px",
    margin: "0 auto",
    maxWidth: "620px",
    overflow: "hidden" as const,
};

const header = {
    borderBottom:
        "1px solid rgba(255,255,255,0.07)",
    padding: "28px 32px",
};

const logo = {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    color: "#09090b",
    display: "inline-block",
    fontSize: "18px",
    fontWeight: "800",
    lineHeight: "48px",
    margin: "0",
    textAlign: "center" as const,
    width: "48px",
};

const brand = {
    color: "#ffffff",
    display: "inline-block",
    fontSize: "13px",
    fontWeight: "700",
    letterSpacing: "0.12em",
    margin:
        "0 0 0 12px",
    verticalAlign: "middle",
};

const brandSubtext = {
    color: "#52525b",
    display: "inline-block",
    fontSize: "8px",
    fontWeight: "600",
    letterSpacing: "0.2em",
    margin:
        "0 0 0 8px",
    verticalAlign: "middle",
};

const main = {
    padding: "36px 32px 32px",
};

const eyebrow = {
    color: "#a78bfa",
    fontSize: "10px",
    fontWeight: "700",
    letterSpacing: "0.2em",
    margin: "0 0 12px",
};

const title = {
    color: "#ffffff",
    fontSize: "28px",
    fontWeight: "700",
    letterSpacing: "-0.03em",
    lineHeight: "1.2",
    margin: "0",
};

const description = {
    color: "#71717a",
    fontSize: "14px",
    lineHeight: "1.7",
    margin: "14px 0 28px",
};

const infoCard = {
    backgroundColor: "#18181b",
    border:
        "1px solid rgba(255,255,255,0.07)",
    borderRadius: "14px",
    padding: "20px",
};

const label = {
    color: "#52525b",
    fontSize: "9px",
    fontWeight: "700",
    letterSpacing: "0.16em",
    margin: "0 0 6px",
};

const labelWithSpacing = {
    ...label,
    marginTop: "18px",
};

const value = {
    color: "#e4e4e7",
    fontSize: "14px",
    lineHeight: "1.5",
    margin: "0",
};

const messageLabel = {
    color: "#52525b",
    fontSize: "9px",
    fontWeight: "700",
    letterSpacing: "0.16em",
    margin: "28px 0 10px",
};

const messageCard = {
    backgroundColor: "#18181b",
    border:
        "1px solid rgba(255,255,255,0.07)",
    borderRadius: "14px",
    padding: "20px",
};

const messageText = {
    color: "#d4d4d8",
    fontSize: "14px",
    lineHeight: "1.8",
    margin: "0",
    whiteSpace: "pre-wrap" as const,
};

const buttonContainer = {
    margin: "28px 0 0",
    textAlign: "center" as const,
};

const button = {
    backgroundColor: "#ffffff",
    borderRadius: "999px",
    color: "#09090b",
    display: "inline-block",
    fontSize: "12px",
    fontWeight: "700",
    padding:
        "13px 22px",
    textDecoration: "none",
};

const replyHint = {
    color: "#52525b",
    fontSize: "10px",
    lineHeight: "1.6",
    margin: "12px 0 0",
    textAlign: "center" as const,
};

const divider = {
    borderColor:
        "rgba(255,255,255,0.07)",
    margin: "0 32px",
};

const footer = {
    padding: "24px 32px 30px",
    textAlign: "center" as const,
};

const footerText = {
    color: "#71717a",
    fontSize: "11px",
    margin: "0",
};

const footerEmail = {
    color: "#52525b",
    fontSize: "10px",
    margin: "5px 0 0",
};

const copyright = {
    color: "#3f3f46",
    fontSize: "9px",
    margin: "18px 0 0",
};