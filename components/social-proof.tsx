"use client";

import Image from "next/image";

const testimonials = [
	{
		name: "Eliaz Bobadilla",
		role: "Software Engineer & Competitive Powerlifter",
		quote:
			"Built CompileStrength to solve my own training needs. The AI programming approach transformed how I prepare for competitions.",
		initials: "EB",
		image: "/eliaz.jpeg",
	},
	{
		name: "Leonardo Estacio",
		role: "Full Stack Engineer & Hobbyist Weightlifter",
		quote:
			"As someone who lifts for fun, CompileStrength makes it easy to stay consistent without overthinking my programming.",
		initials: "LE",
		image: "/leonardo.jpeg",
	},
	{
		name: "Carlos Bonifacio",
		role: "Full Stack Engineer & Bodybuilder",
		quote:
			"Training for aesthetics while working full-time is tough. The AI coach adapts perfectly to my bodybuilding goals and busy schedule.",
		initials: "CB",
		image: "/carlos.jpeg",
	},
];

export function SocialProof() {
	return (
		<section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16">
					<p className="text-primary font-mono text-sm font-semibold mb-2">
						BUILT BY ENGINEERS
					</p>
					<h2 className="text-4xl md:text-5xl font-mono font-bold mb-4">
						Trusted by <span className="text-primary">Engineer Athletes</span>
					</h2>
				</div>

				<div className="grid md:grid-cols-3 gap-6">
					{testimonials.map((testimonial) => (
						<div
							key={testimonial.name}
							className="bg-background border border-border rounded-xl p-8"
						>
							<div className="flex items-center gap-4 mb-6">
								<Image
									src={testimonial.image}
									alt={testimonial.name}
									width={48}
									height={48}
									className="w-12 h-12 rounded-full object-cover"
								/>

								<div>
									<p className="font-semibold">{testimonial.name}</p>
									<p className="text-sm text-muted-foreground">
										{testimonial.role}
									</p>
								</div>
							</div>
							<p className="font-mono text-sm text-foreground">
								<span className="text-primary">{'"'}</span>
								{testimonial.quote}
								<span className="text-primary">{'"'}</span>
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
