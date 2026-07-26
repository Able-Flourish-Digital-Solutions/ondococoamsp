import { createFileRoute } from "@tanstack/react-router";

// NOTE (internal, not rendered): This policy is a working draft pending legal
// review. Content below is reproduced verbatim from the Secretariat-supplied
// draft ("Privacy_Policy-MSP.docx"). Do not edit wording without Secretariat
// approval. "Last reviewed by counsel" is intentionally left blank until legal
// review completes. Any "Notes for the Secretariat" section from source
// documents is guidance only and must not be published here.

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Ondo State Sustainable Cocoa MSP" },
      {
        name: "description",
        content:
          "How the Ondo State Sustainable Cocoa Multi-Stakeholder Platform collects, uses, and protects personal data, aligned with the Nigeria Data Protection Act (NDPA) 2023.",
      },
      { property: "og:title", content: "Privacy Policy — Ondo Sustainable Cocoa MSP" },
      {
        property: "og:description",
        content:
          "OSCP Privacy Policy: data we collect, lawful bases, sharing, retention, and your rights under the NDPA 2023.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="border-b border-border/60 pb-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">
          Legal
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Privacy Policy
        </h1>
        <dl className="mt-6 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
          <div>
            <dt className="font-semibold text-foreground/80">Last updated</dt>
            <dd>26 July 2026</dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground/80">Last reviewed by counsel</dt>
            <dd className="italic">Pending</dd>
          </div>
        </dl>
      </header>

      <div className="prose prose-neutral mt-10 max-w-none text-foreground/85 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground [&_h2]:mt-12 [&_h2]:mb-4 [&_p]:leading-relaxed [&_p]:my-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-4 [&_ul>li]:my-2 [&_a]:text-primary [&_a]:underline [&_a:hover]:no-underline [&_strong]:text-foreground [&_strong]:font-semibold">
        <p>
          The Ondo State Sustainable Cocoa Multi-Stakeholder Platform ("OSCP",
          "the Platform", "we") takes the privacy of everyone who interacts
          with this website and our services seriously. This policy explains
          what personal data we collect, why, how it is used, with whom it is
          shared, and the rights you have over it.
        </p>
        <p>
          This policy is intended to align with the Nigeria Data Protection Act
          (NDPA) 2023 and the Nigeria Data Protection Regulation (NDPR), and
          to reflect standards consistent with the principles of the EU General
          Data Protection Regulation (GDPR), given the involvement of EU-funded
          partners.
        </p>

        <h2>1. Who we are</h2>
        <p>
          The OSCP is a multi-stakeholder platform coordinated by a Secretariat
          based in Akure, Ondo State, Nigeria. The Platform is jointly
          supported by the European Union and the German Federal Ministry for
          Economic Cooperation and Development (BMZ) and is implemented in part
          by GIZ under the VACE – Value Chains for Agribusiness, Climate &amp;
          Employment Programme.
        </p>
        <p>
          For any questions or requests regarding this policy or your personal
          data, contact the OSCP Secretariat at:
        </p>
        <ul>
          <li>Address: Secretariat, Alagbaka, Akure, Ondo State, Nigeria</li>
          <li>Phone: +234 803 472 9424 / +234 706 594 9966</li>
        </ul>

        <h2>2. What personal data we collect</h2>
        <p>We collect personal data in the following circumstances:</p>
        <p>
          <strong>When you contact us via this website (via the Contact form):</strong>{" "}
          your full name, organisation, email address, phone number (if
          provided), and the content of your message.
        </p>
        <p>
          When you apply for OSCP membership (via the linked Google Form
          managed by the Secretariat), you will be asked to provide your name,
          contact details, organisation, stakeholder category and, because the
          Platform is designed to be inclusive and to track representation
          across the cocoa value chain, voluntary demographic information,
          including gender, age group, and disability status.
        </p>
        <p>
          <strong>Automatically, when you use this website:</strong> standard
          technical information, such as your device type, browser, approximate
          location, and pages visited, collected via basic web analytics.
        </p>

        <h2>3. Why we collect it, and our lawful basis</h2>
        <p>We collect personal data only for specific, legitimate purposes:</p>
        <ul>
          <li>To respond to enquiries submitted through the Contact form</li>
          <li>To review and process membership applications</li>
          <li>
            To communicate with members about Platform activities, meetings,
            and events
          </li>
          <li>
            To report on Platform representation and inclusion to funders and
            stakeholders (in aggregate, non-identifying form)
          </li>
          <li>To improve the Platform's website and services</li>
        </ul>
        <p>
          Our lawful bases for processing under the NDPA include your{" "}
          <strong>consent</strong> (freely given when you complete a form),{" "}
          <strong>the performance of tasks in the public interest</strong>{" "}
          (platform coordination and inclusive representation), and our{" "}
          <strong>legitimate interests</strong> in operating and improving the
          Platform, balanced against your rights.
        </p>
        <p>
          <strong>Sensitive personal data</strong> (including disability status
          and, in the Nigerian regulatory context, age category) is collected
          only when you voluntarily provide it, solely for the purposes stated
          above (particularly inclusion monitoring), and is handled with
          additional care.
        </p>

        <h2>4. Who we share it with</h2>
        <p>
          We do not sell your personal data. We share it only in these
          circumstances:
        </p>
        <ul>
          <li>
            <strong>The OSCP Secretariat:</strong> staff responsible for
            platform administration have access to submitted data as necessary
            to perform their role.
          </li>
          <li>
            <strong>Google (as a data processor):</strong> the membership
            registration form is hosted on Google Forms, so form responses are
            stored on Google infrastructure subject to Google's own privacy
            terms. Contact form submissions may also be processed through
            third-party services in a similar way.
          </li>
          <li>
            <strong>Funding partners (EU, BMZ, GIZ):</strong> we may share{" "}
            <strong>aggregated, non-identifying</strong> reports on membership
            composition and Platform activity for reporting and accountability
            purposes. Individual personal data is not shared with funders
            unless legally required or with your explicit consent.
          </li>
          <li>
            <strong>Legal or regulatory authorities:</strong> where required by
            Nigerian law or a valid legal process.
          </li>
        </ul>
        <p>
          We do not transfer personal data outside Nigeria except to the extent
          that our third-party service providers (such as Google) store data
          on international infrastructure. In such cases, we rely on those
          providers' compliance with recognised international data protection
          standards.
        </p>

        <h2>5. How long we keep your data</h2>
        <p>
          We retain personal data only for as long as necessary for the
          purposes it was collected:
        </p>
        <ul>
          <li>
            <strong>Contact form submissions:</strong> retained for up to 24
            months, then deleted unless they form part of an ongoing engagement
          </li>
          <li>
            <strong>Membership records:</strong> retained for the duration of
            your membership and for a reasonable period afterward for
            institutional record-keeping
          </li>
          <li>
            <strong>Analytics data:</strong> retained in aggregated form as
            necessary for reporting
          </li>
        </ul>

        <h2>6. Your rights</h2>
        <p>Under the NDPA, you have the right to:</p>
        <ul>
          <li><strong>Access</strong> the personal data we hold about you</li>
          <li><strong>Correct</strong> inaccurate or incomplete data</li>
          <li>
            <strong>Request deletion</strong> of your data, subject to legal or
            contractual retention requirements
          </li>
          <li>
            <strong>Object</strong> to certain uses of your data, including for
            direct communications
          </li>
          <li>
            <strong>Withdraw consent</strong> at any time, where processing is
            based on your consent
          </li>
          <li>
            <strong>Lodge a complaint</strong> with the Nigeria Data Protection
            Commission (NDPC) if you believe your rights have been violated
          </li>
        </ul>
        <p>
          To exercise any of these rights, contact the Secretariat using the
          details in Section 1. We will respond within the timeframes required
          by the NDPA.
        </p>

        <h2>7. How we protect your data</h2>
        <p>
          We take reasonable technical and organisational measures to protect
          personal data against loss, misuse, unauthorised access, disclosure,
          alteration, and destruction. These include secure data storage,
          restricted access on a need-to-know basis, and use of reputable
          third-party services with their own security commitments.
        </p>
        <p>
          However, no method of transmitting or storing data over the internet
          is entirely secure. We cannot guarantee absolute security, and we
          encourage you to think carefully before sharing sensitive information
          through any online form.
        </p>

        <h2>8. Cookies and analytics</h2>
        <p>
          This website uses a small number of essential cookies to function
          correctly, and may use basic analytics tools to understand how
          visitors use the site. We do not use cookies for advertising or
          third-party tracking.
        </p>

        <h2>9. Children</h2>
        <p>
          This Platform is designed for adult stakeholders in the cocoa value
          chain. We do not knowingly collect personal data from anyone under 18
          years old. If you believe we have inadvertently collected such data,
          please contact us and we will delete it.
        </p>

        <h2>10. Changes to this policy</h2>
        <p>
          We may update this policy from time to time. Material changes will be
          reflected in the "Last updated" date above, and where appropriate, we
          will notify members directly.
        </p>

        <h2>11. Contact</h2>
        <p>
          Questions, requests, or concerns about this policy or your personal
          data should be directed to the OSCP Secretariat:
        </p>
        <ul>
          <li>Address: Secretariat, Alagbaka, Akure, Ondo State, Nigeria</li>
          <li>Phone: +234 803 472 9424 / +234 706 594 9966</li>
        </ul>
      </div>
    </article>
  );
}