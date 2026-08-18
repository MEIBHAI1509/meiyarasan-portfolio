"use client";

import { useState } from "react";

import {
  ArrowUpRight,
  Mail,
  MapPin,
  Send,
} from "lucide-react";

import { Reveal } from "@/components/common/reveal";
import { Section } from "@/components/common/section";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  {
    label: "GitHub",
    value: "MEIBHAI1509",
    href: "https://github.com/MEIBHAI1509",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    value: "Meiyarasan P",
    href: "https://www.linkedin.com/in/meiyarasan-p-373577242/",
    icon: FaLinkedin,
  },
];

export function Contact() {
  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [status, setStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const [errorMessage, setErrorMessage] =
    useState("");
  return (
    <Section
      id="contact"
      className="overflow-hidden"
    >
      <div className="mx-auto max-w-6xl">
        {/* ================================================== */}
        {/* Heading */}
        {/* ================================================== */}

        <div className="max-w-3xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-light">
              Contact
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-5 text-4xl font-bold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              Have an idea?
              <br />
              <span className="bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">
                Let&apos;s build it.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
              I&apos;m open to frontend, full-stack, and MERN
              stack opportunities, as well as interesting
              products and engineering collaborations.
            </p>
          </Reveal>
        </div>

        {/* ================================================== */}
        {/* Contact Grid */}
        {/* ================================================== */}

        <div className="mt-14 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          {/* ================================================== */}
          {/* Contact Information */}
          {/* ================================================== */}

          <Reveal delay={0.15} className="h-full">
            <div className="flex h-full flex-col rounded-3xl border border-white/[0.07] bg-white/[0.02] p-6 sm:p-7">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
                  Get in touch
                </p>

                <h3 className="mt-4 text-xl font-semibold tracking-tight text-white">
                  Let&apos;s start a conversation.
                </h3>
              </div>

              {/* Email */}
              <a
                href="mailto:meiyarasan1509@gmail.com"
                className="group mt-8 flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-black/20 text-zinc-500 transition-colors group-hover:text-primary-light">
                  <Mail size={18} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-zinc-700">
                    Email
                  </p>

                  <p className="mt-1 truncate text-sm text-zinc-400 transition-colors group-hover:text-white">
                    meiyarasan1509@gmail.com
                  </p>
                </div>

                <ArrowUpRight
                  size={15}
                  className="text-zinc-700 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                />
              </a>

              {/* Location */}
              <div className="mt-3 flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-black/20 text-zinc-500">
                  <MapPin size={18} />
                </div>

                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-zinc-700">
                    Location
                  </p>

                  <p className="mt-1 text-sm text-zinc-400">
                    India
                  </p>
                </div>
              </div>

              {/* Socials */}
              <div className="mt-auto pt-8">
                <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.15em] text-zinc-700">
                  Find me online
                </p>

                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {socials.map((social) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 rounded-xl border border-white/[0.06] px-3.5 py-3 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.03]"
                      >
                        <Icon
                          size={16}
                          className="text-zinc-600 transition-colors group-hover:text-white"
                        />

                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-medium text-zinc-400 group-hover:text-white">
                            {social.label}
                          </p>

                          <p className="mt-0.5 truncate text-[10px] text-zinc-700">
                            {social.value}
                          </p>
                        </div>

                        <ArrowUpRight
                          size={13}
                          className="text-zinc-700 transition-colors group-hover:text-white"
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>

          {/* ================================================== */}
          {/* Contact Form */}
          {/* ================================================== */}

          <Reveal delay={0.25} className="h-full">
            <form
              className="flex h-full flex-col rounded-3xl border border-white/[0.07] bg-white/[0.02] p-6 sm:p-7"
              onSubmit={async (event) => {
                event.preventDefault();

                setIsSubmitting(true);
                setStatus("idle");
                setErrorMessage("");

                const form = event.currentTarget;

                const formData = new FormData(form);

                const payload = {
                  name: String(
                    formData.get("name") ?? "",
                  ),

                  email: String(
                    formData.get("email") ?? "",
                  ),

                  subject: String(
                    formData.get("subject") ?? "",
                  ),

                  message: String(
                    formData.get("message") ?? "",
                  ),
                };

                try {
                  const response = await fetch(
                    "/api/contact",
                    {
                      method: "POST",

                      headers: {
                        "Content-Type":
                          "application/json",
                      },

                      body: JSON.stringify(payload),
                    },
                  );

                  const result = await response.json();

                  if (!response.ok) {
                    throw new Error(
                      result.error ||
                      "Unable to send your message.",
                    );
                  }

                  setStatus("success");

                  form.reset();
                } catch (error) {
                  setStatus("error");

                  setErrorMessage(
                    error instanceof Error
                      ? error.message
                      : "Something went wrong. Please try again.",
                  );
                } finally {
                  setIsSubmitting(false);
                }
              }}
            >
              <div className="mb-7">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
                  Send a message
                </p>

                <p className="mt-2 text-sm text-zinc-500">
                  Tell me a little about what you&apos;re
                  building or the opportunity you have
                  in mind.
                </p>
              </div>

              {/* Name + Email */}
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Name"
                  name="name"
                  placeholder="Your name"
                  required
                />

                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              {/* Subject */}
              <div className="mt-4">
                <Field
                  label="Subject"
                  name="subject"
                  placeholder="What would you like to discuss?"
                />
              </div>

              {/* Message */}
              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="mb-2 block text-[10px] font-medium uppercase tracking-[0.15em] text-zinc-600"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={7}
                  placeholder="Tell me about your project, opportunity, or idea..."
                  className="w-full resize-none rounded-2xl border border-white/[0.07] bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-zinc-700 focus:border-primary/30 focus:bg-white/[0.025] focus:ring-2 focus:ring-primary/10"
                />
              </div>

              {/* Submit */}
              <div className="mt-auto pt-5">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-5 text-xs font-semibold text-black transition-all duration-300 hover:scale-[1.01] hover:bg-zinc-100 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/20 border-t-black" />

                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message

                      <Send
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </>
                  )}
                </button>
                {status === "success" && (
                  <div className="mt-4 rounded-xl border border-emerald-400/10 bg-emerald-400/[0.05] px-4 py-3 text-center text-xs text-emerald-300">
                    Thanks! Your message has been sent successfully.
                    I&apos;ll get back to you soon.
                  </div>
                )}

                {status === "error" && (
                  <div className="mt-4 rounded-xl border border-red-400/10 bg-red-400/[0.05] px-4 py-3 text-center text-xs text-red-300">
                    {errorMessage ||
                      "Unable to send your message. Please try again."}
                  </div>
                )}

                <p className="mt-3 text-center text-[10px] text-zinc-700">
                  Your message will be delivered directly to my inbox.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

/* ============================================================ */
/* Field */
/* ============================================================ */

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-[10px] font-medium uppercase tracking-[0.15em] text-zinc-600"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="h-12 w-full rounded-2xl border border-white/[0.07] bg-black/20 px-4 text-sm text-white outline-none transition-all placeholder:text-zinc-700 focus:border-primary/30 focus:bg-white/[0.025] focus:ring-2 focus:ring-primary/10"
      />
    </div>
  );
}