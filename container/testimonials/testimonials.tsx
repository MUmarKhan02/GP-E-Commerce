interface Testimonial {
	id: string;
	quote: string;
	author: string;
	role: string;
	company: string;
	avatarUrl?: string;
	rating?: number;
}

const testimonialsData: Testimonial[] = [
	{
		id: "1",
		quote:
			"GP Logistics has completely transformed our supply chain efficiency. Quotes are delivered fast, and customs clearance issues are a thing of the past.",
		author: "Sarah Jenkins",
		role: "Head of Global Procurement",
		company: "Apex Industrial Corp",
		rating: 5,
	},
	{
		id: "2",
		quote:
			"The transparency in shipping tariffs and real-time tracking gives our B2B operations the predictability we need to scale internationally.",
		author: "Marcus Vance",
		role: "Supply Chain Director",
		company: "Vance & Co Enterprises",
		rating: 5,
	},
	{
		id: "3",
		quote:
			"Finding reliable international trade partners was always a pain point until we started using this platform. High quality vendors across the board.",
		author: "Elena Rostova",
		role: "VP of Operations",
		company: "Nordic Import Group",
		rating: 5,
	},
];

export default function Testimonials() {
	return (
		<main className="w-[92%] max-w-4xl mx-auto py-12 flex-1">
			<div className="bg-white border border-slate-200 py-12 rounded-2xl px-8 shadow-sm">
				<div className="mb-8">
					<h1 className="font-display font-extrabold text-3xl text-ink mb-2">
						What Our Partners Say
					</h1>
					<p className="text-xs text-slate-400">
						Trusted by logistics leads and enterprise buyers globally
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{testimonialsData.map((item) => (
						<div
							key={item.id}
							className="flex flex-col justify-between border border-slate-100 bg-slate-50/50 rounded-xl p-5 hover:border-slate-200 transition-colors">
							<div className="space-y-3">
								{/* Star Rating */}
								{item.rating && (
									<div
										className="flex text-amber-400 space-x-0.5 text-sm"
										aria-label={`Rated ${item.rating} out of 5 stars`}>
										{Array.from({ length: item.rating }).map((_, i) => (
											<span key={i}>★</span>
										))}
									</div>
								)}

								{/* Testimonial Quote */}
								<p className="text-slate-600 text-sm leading-relaxed italic">
									"{item.quote}"
								</p>
							</div>

							{/* Author Info */}
							<div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-3">
								<div className="w-9 h-9 rounded-full bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0">
									{item.author
										.split(" ")
										.map((n) => n[0])
										.join("")}
								</div>
								<div className="min-w-0">
									<h2 className="font-bold text-sm text-ink truncate">
										{item.author}
									</h2>
									<p className="text-xs text-slate-400 truncate">
										{item.role} ·{" "}
										<span className="text-slate-500 font-medium">
											{item.company}
										</span>
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</main>
	);
}
