import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Monetize My Content.',
};

export default function TermsPage() {
  return (
    <main>
      <div className="legal-hero">
        <div className="wrap">
          <h1>Terms of Service</h1>
          <p>Last updated: June 2026</p>
        </div>
      </div>

      <div className="wrap">
        <div className="legal-body">
          <p>
            <strong>Placeholder content.</strong> Replace this page with your real
            terms before going live. Consider working with a lawyer familiar with
            UK/EU creator economy services.
          </p>

          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing and using Monetize My Content services, you agree to be bound
            by these Terms of Service and all applicable laws and regulations.
          </p>

          <h2>2. The Service</h2>
          <p>
            Monetize My Content provides revenue partnership services for content
            creators. We work on a revenue-share basis — we take a percentage of the
            income we generate together, with no upfront fees.
          </p>

          <h2>3. Revenue Share Arrangement</h2>
          <p>
            The specific revenue share percentage and scope of services will be agreed
            upon in a separate partnership agreement before work begins. That agreement
            constitutes the legally binding terms of our working relationship.
          </p>

          <h2>4. Creator Responsibilities</h2>
          <ul>
            <li>Provide accurate information about your audience and current income</li>
            <li>Maintain ownership of and access to your social channels</li>
            <li>Comply with platform terms of service on all your channels</li>
            <li>Review and approve all brand partnerships before they go live</li>
          </ul>

          <h2>5. Intellectual Property</h2>
          <p>
            All content you create remains your intellectual property. We may use
            anonymised, aggregate performance data to improve our services.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>[TODO: Insert appropriate limitation of liability clause with legal counsel.]</p>

          <h2>7. Governing Law</h2>
          <p>[TODO: Insert governing law and jurisdiction with legal counsel.]</p>

          <h2>8. Contact</h2>
          <p>
            {/* TODO: Replace with real contact email */}
            For questions about these terms, email hello@monetizemycontent.com.
          </p>
        </div>
      </div>
    </main>
  );
}
