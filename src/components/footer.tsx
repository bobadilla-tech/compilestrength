import Link from "next/link";

export function Footer() {
	return (
		<footer className="border-t border-zinc-800 bg-zinc-950 py-8 mt-auto">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<div className="grid md:grid-cols-3 gap-8">
					<div>
						<Link href="/" className="text-lg font-bold inline-block mb-3">
							<span className="text-blue-500">Compile</span>
							<span className="text-white">Strength</span>
						</Link>
						<p className="text-zinc-400 text-sm leading-relaxed">
							Science-based training for lifters who understand progressive
							overload and periodization.
						</p>
					</div>

					<div>
						<h3 className="text-white font-semibold mb-3">Product</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="/tools"
									className="text-zinc-400 hover:text-white transition-colors"
								>
									Free Tools
								</Link>
							</li>
							<li>
								<Link
									href="/blog"
									className="text-zinc-400 hover:text-white transition-colors"
								>
									Blog
								</Link>
							</li>
							<li>
								<Link
									href="/signup"
									className="text-zinc-400 hover:text-white transition-colors"
								>
									Sign Up
								</Link>
							</li>
						</ul>
					</div>

					{/* Legal */}
					<div>
						<h3 className="text-white font-semibold mb-3">Legal</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="/privacy"
									className="text-zinc-400 hover:text-white transition-colors"
								>
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									href="/terms"
									className="text-zinc-400 hover:text-white transition-colors"
								>
									Terms of Service
								</Link>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="mt-8 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-4">
					<p className="text-zinc-500 text-sm">
						&copy; {new Date().getFullYear()} CompileStrength. All rights
						reserved.
					</p>
					<a
						href="https://twitter.com/compilestrength"
						target="_blank"
						rel="noopener noreferrer"
						className="text-zinc-400 hover:text-white transition-colors text-sm"
					>
						@compilestrength
					</a>
				</div>
			</div>
		</footer>
	);
}
