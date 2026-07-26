import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ondo State Sustainable Cocoa MSP" },
      { name: "description", content: "Get in touch with the Ondo State Sustainable Cocoa Multi-Stakeholder Platform Secretariat." },
      { property: "og:title", content: "Contact the Ondo State Sustainable Cocoa MSP" },
      { property: "og:description", content: "Reach the MSP Secretariat by form, phone or email." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    // Phase 1: log to console. Phase 3 will persist to Supabase.
    console.log("MSP contact form submission", data);
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Contact"
        title="Get in touch with the Secretariat"
        description="Reach out to explore membership, partnerships or general inquiries."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            {sent && (
              <div className="mb-6 flex items-start gap-3 rounded-lg border border-primary/30 bg-primary/5 p-4 text-sm text-foreground">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <div>
                  <p className="font-medium">Thank you</p>
                  <p className="text-muted-foreground">Your message has been received. The Secretariat will be in touch.</p>
                </div>
              </div>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Full name" required />
              <Field id="organization" label="Organization" required />
              <Field id="email" label="Email" type="email" required />
              <Field id="phone" label="Phone" type="tel" />
            </div>
            <div className="mt-5">
              <Label htmlFor="message" className="text-sm">Message</Label>
              <Textarea id="message" name="message" required rows={6} className="mt-2" placeholder="How can the Secretariat help?" />
            </div>
            <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
              Send message
            </Button>
          </form>
        </div>

        <aside className="space-y-4 lg:col-span-2">
          <InfoRow Icon={MapPin} title="Office address" body="MSP Secretariat, Alagbaka, Akure, Ondo State, Nigeria" />
          <InfoRow
            Icon={Phone}
            title="Phone"
            body={
              <>
                <a href="tel:+2348034729424" className="block hover:text-primary">+234 803 472 9424</a>
                <a href="tel:+2347065949966" className="block hover:text-primary">+234 706 594 9966</a>
              </>
            }
          />
          <InfoRow Icon={Mail} title="Email" body="To be confirmed" />

          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <iframe
              title="Map of Ondo State"
              src="https://www.openstreetmap.org/export/embed.html?bbox=4.5%2C6.5%2C6.0%2C7.6&layer=mapnik"
              className="h-64 w-full border-0"
              loading="lazy"
            />
          </div>
        </aside>
      </div>
    </section>
  );
}

function Field({ id, label, type = "text", required }: { id: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <Label htmlFor={id} className="text-sm">{label}{required && <span className="text-destructive"> *</span>}</Label>
      <Input id={id} name={id} type={type} required={required} className="mt-2" />
    </div>
  );
}

function InfoRow({ Icon, title, body }: { Icon: React.ComponentType<{ className?: string }>; title: string; body: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-sm font-semibold text-foreground">{title}</p>
        <p className="mt-1 text-sm text-muted-foreground">{body}</p>
      </div>
    </div>
  );
}