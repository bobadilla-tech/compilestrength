import Link from "next/link";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function PrivacyPage() {
	return (
		<div className="min-h-screen bg-zinc-950 text-zinc-100">
			<Navbar />

			<main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
				<div className="space-y-8">
					<div>
						<h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
						<p className="text-zinc-400">Last Updated: December 18, 2025</p>
					</div>

					<section className="space-y-4">
						<h2 className="text-2xl font-bold text-blue-500">
							1. Introduction
						</h2>
						<p className="text-zinc-300 leading-relaxed">
							CompileStrength ("we", "our", "us") respects your privacy. This
							Privacy Policy explains how we collect, use, disclose, and protect
							your information when you use our Service.
						</p>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-bold text-blue-500">
							2. Information We Collect
						</h2>

						<div className="space-y-3">
							<h3 className="text-xl font-semibold text-zinc-200">
								2.1 Information You Provide
							</h3>
							<ul className="list-disc list-inside text-zinc-300 space-y-2 ml-4">
								<li>
									<strong>Account Information</strong>: Email address, password
									(encrypted), name
								</li>
								<li>
									<strong>Profile Data</strong>: Age, weight, height, fitness
									goals, experience level
								</li>
								<li>
									<strong>Workout Data</strong>: Exercise logs, sets, reps,
									weights, workout programs
								</li>
								<li>
									<strong>Preferences</strong>: Unit preferences (lbs/kg), rest
									timer settings
								</li>
								<li>
									<strong>Billing Information</strong>: Processed through
									LemonSqueezy (we do not store payment details)
								</li>
							</ul>
						</div>

						<div className="space-y-3">
							<h3 className="text-xl font-semibold text-zinc-200">
								2.2 Automatically Collected Information
							</h3>
							<ul className="list-disc list-inside text-zinc-300 space-y-2 ml-4">
								<li>
									<strong>Usage Data</strong>: Pages visited, features used,
									time spent
								</li>
								<li>
									<strong>Device Information</strong>: Browser type, operating
									system, IP address
								</li>
								<li>
									<strong>Location Data</strong>: General location via
									Cloudflare geolocation (country/region)
								</li>
								<li>
									<strong>Session Data</strong>: Login times, authentication
									events
								</li>
							</ul>
						</div>

						<div className="space-y-3">
							<h3 className="text-xl font-semibold text-zinc-200">
								2.3 Cookies and Tracking
							</h3>
							<ul className="list-disc list-inside text-zinc-300 space-y-2 ml-4">
								<li>Session cookies for authentication</li>
								<li>Analytics cookies to understand usage patterns</li>
								<li>Preference cookies to remember your settings</li>
							</ul>
						</div>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-bold text-blue-500">
							3. How We Use Your Information
						</h2>
						<p className="text-zinc-300 leading-relaxed">
							We use your information to:
						</p>
						<ul className="list-disc list-inside text-zinc-300 space-y-2 ml-4">
							<li>Provide and improve the Service</li>
							<li>Generate personalized AI workout recommendations</li>
							<li>Track your fitness progress</li>
							<li>Process subscription payments</li>
							<li>Send service-related communications</li>
							<li>Respond to support requests</li>
							<li>Ensure security and prevent fraud</li>
							<li>Comply with legal obligations</li>
						</ul>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-bold text-blue-500">
							4. Data Sharing and Disclosure
						</h2>
						<p className="text-zinc-300 leading-relaxed">
							We do NOT sell your personal information. We share data only with:
						</p>

						<div className="space-y-3">
							<h3 className="text-xl font-semibold text-zinc-200">
								4.1 Service Providers
							</h3>
							<ul className="list-disc list-inside text-zinc-300 space-y-2 ml-4">
								<li>
									<strong>LemonSqueezy</strong>: Payment processing and
									subscription management
								</li>
								<li>
									<strong>Neon Database</strong>: Secure data storage
									(PostgreSQL)
								</li>
								<li>
									<strong>Cloudflare</strong>: Hosting and content delivery
								</li>
								<li>
									<strong>OpenAI</strong>: AI workout generation (anonymized
									data only)
								</li>
							</ul>
						</div>

						<div className="space-y-3">
							<h3 className="text-xl font-semibold text-zinc-200">
								4.2 Legal Requirements
							</h3>
							<p className="text-zinc-300 leading-relaxed">
								We may disclose information if required by law or to:
							</p>
							<ul className="list-disc list-inside text-zinc-300 space-y-2 ml-4">
								<li>Comply with legal process</li>
								<li>Protect our rights and property</li>
								<li>Prevent fraud or security issues</li>
								<li>Protect user safety</li>
							</ul>
						</div>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-bold text-blue-500">
							5. Data Security
						</h2>
						<p className="text-zinc-300 leading-relaxed">
							We implement industry-standard security measures:
						</p>
						<ul className="list-disc list-inside text-zinc-300 space-y-2 ml-4">
							<li>Encryption in transit (HTTPS/TLS)</li>
							<li>Encryption at rest for sensitive data</li>
							<li>Password hashing with secure algorithms</li>
							<li>Regular security audits</li>
							<li>Access controls and authentication</li>
						</ul>
						<p className="text-zinc-300 leading-relaxed mt-4">
							However, no method is 100% secure. Use strong passwords and
							protect your account credentials.
						</p>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-bold text-blue-500">
							6. Data Retention
						</h2>
						<ul className="list-disc list-inside text-zinc-300 space-y-2 ml-4">
							<li>
								<strong>Active Accounts</strong>: Data retained while your
								account is active
							</li>
							<li>
								<strong>Cancelled Accounts</strong>: Data retained for 90 days
								after cancellation, then deleted
							</li>
							<li>
								<strong>Billing Records</strong>: Retained for 7 years for tax
								and legal compliance
							</li>
							<li>
								<strong>Workout Data</strong>: Retained until account deletion
								(or upon request)
							</li>
						</ul>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-bold text-blue-500">7. Your Rights</h2>
						<p className="text-zinc-300 leading-relaxed">
							You have the right to:
						</p>
						<ul className="list-disc list-inside text-zinc-300 space-y-2 ml-4">
							<li>
								<strong>Access</strong>: Request a copy of your data
							</li>
							<li>
								<strong>Correction</strong>: Update inaccurate information
							</li>
							<li>
								<strong>Deletion</strong>: Request account and data deletion
							</li>
							<li>
								<strong>Export</strong>: Download your workout data
							</li>
							<li>
								<strong>Opt-Out</strong>: Unsubscribe from marketing emails
							</li>
							<li>
								<strong>Portability</strong>: Receive data in machine-readable
								format
							</li>
						</ul>
						<p className="text-zinc-300 leading-relaxed mt-4">
							To exercise these rights, contact: eliaz@bobadilla.tech
						</p>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-bold text-blue-500">
							8. Children's Privacy
						</h2>
						<p className="text-zinc-300 leading-relaxed">
							CompileStrength is not intended for users under 18. We do not
							knowingly collect data from children. If we discover we have
							collected data from a child, we will delete it immediately.
						</p>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-bold text-blue-500">
							9. International Users
						</h2>
						<p className="text-zinc-300 leading-relaxed">
							Your data may be transferred to and stored in the United States
							and other countries. By using the Service, you consent to this
							transfer.
						</p>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-bold text-blue-500">
							10. Third-Party Links
						</h2>
						<p className="text-zinc-300 leading-relaxed">
							Our Service may contain links to third-party websites. We are not
							responsible for their privacy practices. Review their privacy
							policies before providing information.
						</p>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-bold text-blue-500">
							11. California Privacy Rights (CCPA)
						</h2>
						<p className="text-zinc-300 leading-relaxed">
							California residents have additional rights:
						</p>
						<ul className="list-disc list-inside text-zinc-300 space-y-2 ml-4">
							<li>Right to know what personal information is collected</li>
							<li>Right to know if personal information is sold or shared</li>
							<li>Right to opt-out of sale (we do not sell data)</li>
							<li>Right to deletion</li>
							<li>Right to non-discrimination</li>
						</ul>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-bold text-blue-500">
							12. GDPR Compliance (EU Users)
						</h2>
						<p className="text-zinc-300 leading-relaxed">
							If you are in the EU, you have rights under GDPR:
						</p>
						<ul className="list-disc list-inside text-zinc-300 space-y-2 ml-4">
							<li>
								<strong>Legal Basis</strong>: Consent, contract performance,
								legitimate interests
							</li>
							<li>
								<strong>Data Protection Officer</strong>: eliaz@bobadilla.tech
							</li>
							<li>
								<strong>Right to Lodge Complaint</strong>: Contact your local
								data protection authority
							</li>
						</ul>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-bold text-blue-500">
							13. Changes to Privacy Policy
						</h2>
						<p className="text-zinc-300 leading-relaxed">
							We may update this Privacy Policy. We will notify you of
							significant changes via email or Service notification. Continued
							use after changes constitutes acceptance.
						</p>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-bold text-blue-500">
							14. Do Not Track
						</h2>
						<p className="text-zinc-300 leading-relaxed">
							We currently do not respond to Do Not Track (DNT) signals.
						</p>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-bold text-blue-500">15. Contact Us</h2>
						<p className="text-zinc-300 leading-relaxed">
							For privacy questions or to exercise your rights:
						</p>
						<div className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg space-y-2">
							<p className="text-zinc-300">
								<strong>Email:</strong> eliaz@bobadilla.tech
							</p>
							<p className="text-zinc-300">
								<strong>Response Time:</strong> Within 30 days
							</p>
						</div>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-bold text-blue-500">
							16. Data Processing Addendum
						</h2>
						<p className="text-zinc-300 leading-relaxed">
							For business customers requiring a Data Processing Agreement
							(DPA), contact us at the email above.
						</p>
					</section>

					<div className="pt-8 border-t border-zinc-800">
						<Link
							href="/"
							className="text-blue-500 hover:text-blue-400 transition-colors"
						>
							← Back to Home
						</Link>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
}
