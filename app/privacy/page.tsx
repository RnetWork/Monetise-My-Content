import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Monetize My Content.',
};

export default function PrivacyPage() {
  return (
    <main>
      <div className="legal-hero">
        <div className="wrap">
          <h1>Privacy Policy</h1>
          <p>Last updated: June 2026</p>
        </div>
      </div>

      <div className="wrap">
        <div className="legal-body">
          <p>
            <strong>Placeholder content.</strong> Replace this with a proper
            GDPR-compliant privacy policy before launching. Consider using a privacy
            policy generator or working with a data protection lawyer.
          </p>

          <h2>1. Who we are</h2>
          <p>
            Monetize My Content (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;)
            provides revenue partnership services for content creators.{' '}
            {/* TODO: Add company registration details and registered address */}
            [TODO: company details]
          </p>

          <h2>2. What data we collect</h2>
          <ul>
            <li>
              <strong>Contact information:</strong> name, email address, and social
              media handles you provide when booking an audit or contacting us
            </li>
            <li>
              <strong>Audience data:</strong> publicly available metrics about your
              social channels (follower count, engagement rate) to assess partnership
              fit
            </li>
            <li>
              <strong>Usage data:</strong> standard analytics data from our website
              (pages visited, time on site)
            </li>
          </ul>

          <h2>3. How we use your data</h2>
          <ul>
            <li>To assess whether we can provide value as a revenue partner</li>
            <li>To communicate about our services and any active partnership</li>
            <li>To improve our services and website</li>
          </ul>

          <h2>4. Data retention</h2>
          <p>
            We retain your data for as long as necessary to provide our services and
            comply with legal obligations. To request deletion, email
            hello@monetizemycontent.com.
          </p>

          <h2>5. Your rights</h2>
          <p>
            Under GDPR and UK data protection law, you have the right to access,
            correct, or delete your personal data. Contact us to exercise these rights.
          </p>

          <h2>6. Cookies</h2>
          <p>
            [TODO: Add cookie policy — list cookies used, categorise them
            (essential/analytics/marketing), link to consent mechanism before launch.]
          </p>

          <h2>7. Contact</h2>
          <p>
            {/* TODO: Replace with real contact email */}
            For privacy questions, email hello@monetizemycontent.com.
          </p>
        </div>
      </div>
    </main>
  );
}
