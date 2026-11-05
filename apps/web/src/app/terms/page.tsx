import Link from "next/link";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function TermsPage() {
	return (
		<div className="min-h-screen bg-zinc-950 text-zinc-100">
			<Navbar />

			<main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
				<div className="space-y-8">
					<div>
						<h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
						<p className="text-zinc-400">Last Updated: December 18, 2025</p>
					</div>

					<section className="space-y-4">
						<h2 className="text-2xl font-bold text-blue-500">
							1. Acceptance of Terms
						</h2>
						<p className="text-zinc-300 leading-relaxed">
							By accessing or using CompileStrength ("Service"), you agree to be
							bound by these Terms of Service. If you do not agree, do not use
							the Service.
						</p>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-bold text-blue-500">
							2. Description of Service
						</h2>
						<p className="text-zinc-300 leading-relaxed">
							CompileStrength is a fitness application providing AI-powered
							workout programming, fitness calculators, and workout tracking
							features.
						</p>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-bold text-blue-500">
							3. Account Registration
						</h2>
						<ul className="list-disc list-inside text-zinc-300 space-y-2 ml-4">
							<li>You must provide accurate information during registration</li>
							<li>
								You are responsible for maintaining the security of your account
								credentials
							</li>
							<li>
								You must be at least 18 years old or have parental consent
							</li>
							<li>One account per user; sharing accounts is prohibited</li>
						</ul>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-bold text-blue-500">
							4. Subscription and Billing
						</h2>
						<ul className="list-disc list-inside text-zinc-300 space-y-2 ml-4">
							<li>Subscription plans are billed through LemonSqueezy</li>
							<li>7-day free trial available for new subscribers</li>
							<li>Subscriptions automatically renew unless cancelled</li>
							<li>Refunds are handled according to our refund policy</li>
							<li>You may cancel your subscription at any time</li>
						</ul>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-bold text-blue-500">
							5. Usage Limits
						</h2>
						<p className="text-zinc-300 leading-relaxed">
							Your subscription includes:
						</p>
						<ul className="list-disc list-inside text-zinc-300 space-y-2 ml-4">
							<li>1 AI workout compile per week</li>
							<li>5 routine edits per routine</li>
							<li>50 AI messages per conversation</li>
						</ul>
						<p className="text-zinc-300 leading-relaxed mt-4">
							Exceeding these limits may require plan upgrade or additional
							fees.
						</p>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-bold text-blue-500">
							6. User Conduct
						</h2>
						<p className="text-zinc-300 leading-relaxed">You agree not to:</p>
						<ul className="list-disc list-inside text-zinc-300 space-y-2 ml-4">
							<li>Use the Service for illegal purposes</li>
							<li>Violate intellectual property rights</li>
							<li>Attempt to reverse engineer or copy the Service</li>
							<li>Share subscription access with others</li>
							<li>Use automated systems to access the Service</li>
							<li>Post harmful, offensive, or inappropriate content</li>
						</ul>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-bold text-blue-500">
							7. Medical Disclaimer
						</h2>
						<div className="bg-yellow-900/20 border border-yellow-700 p-6 rounded-lg">
							<p className="text-zinc-300 leading-relaxed font-semibold">
								IMPORTANT
							</p>
							<p className="text-zinc-300 leading-relaxed mt-3">
								CompileStrength is not a substitute for professional medical
								advice. Consult a healthcare provider before starting any
								fitness program. Use of the Service is at your own risk.
							</p>
						</div>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-bold text-blue-500">
							8. Intellectual Property
						</h2>
						<p className="text-zinc-300 leading-relaxed">
							All content, features, and functionality are owned by
							CompileStrength and protected by copyright, trademark, and other
							laws. You may not copy, reproduce, or distribute any content
							without permission.
						</p>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-bold text-blue-500">9. Privacy</h2>
						<p className="text-zinc-300 leading-relaxed">
							Your use of the Service is subject to our{" "}
							<Link
								href="/privacy"
								className="text-blue-500 hover:text-blue-400 transition-colors underline"
							>
								Privacy Policy
							</Link>
							.
						</p>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-bold text-blue-500">
							10. Data Accuracy
						</h2>
						<p className="text-zinc-300 leading-relaxed">
							While we strive for accuracy in our calculators and AI
							recommendations, we make no guarantees. Results should be verified
							with qualified professionals.
						</p>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-bold text-blue-500">
							11. Limitation of Liability
						</h2>
						<p className="text-zinc-300 leading-relaxed">
							TO THE MAXIMUM EXTENT PERMITTED BY LAW, COMPILESTRENGTH SHALL NOT
							BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
							PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR INJURY.
						</p>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-bold text-blue-500">
							12. Termination
						</h2>
						<p className="text-zinc-300 leading-relaxed">
							We reserve the right to suspend or terminate your account for:
						</p>
						<ul className="list-disc list-inside text-zinc-300 space-y-2 ml-4">
							<li>Violation of these Terms</li>
							<li>Fraudulent activity</li>
							<li>Non-payment of subscription fees</li>
							<li>Any reason, with or without notice</li>
						</ul>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-bold text-blue-500">
							13. Changes to Terms
						</h2>
						<p className="text-zinc-300 leading-relaxed">
							We may modify these Terms at any time. Continued use after changes
							constitutes acceptance of modified Terms.
						</p>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-bold text-blue-500">
							14. Governing Law
						</h2>
						<p className="text-zinc-300 leading-relaxed">
							These Terms are governed by the laws of [Your Jurisdiction],
							without regard to conflict of law provisions.
						</p>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-bold text-blue-500">15. Contact</h2>
						<p className="text-zinc-300 leading-relaxed">
							For questions about these Terms, contact:
						</p>
						<div className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg">
							<p className="text-zinc-300">
								<strong>Email:</strong> eliaz@bobadilla.tech
							</p>
						</div>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-bold text-blue-500">
							16. Severability
						</h2>
						<p className="text-zinc-300 leading-relaxed">
							If any provision is found unenforceable, the remaining provisions
							remain in effect.
						</p>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-bold text-blue-500">
							17. Entire Agreement
						</h2>
						<p className="text-zinc-300 leading-relaxed">
							These Terms constitute the entire agreement between you and
							CompileStrength regarding the Service.
						</p>
					</section>

					<div className="pt-8 border-t border-zinc-800 space-y-4">
						<p className="text-zinc-400 text-sm">
							By using CompileStrength, you acknowledge that you have read,
							understood, and agree to be bound by these Terms of Service.
						</p>
						<Link
							href="/"
							className="text-blue-500 hover:text-blue-400 transition-colors inline-block"
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
