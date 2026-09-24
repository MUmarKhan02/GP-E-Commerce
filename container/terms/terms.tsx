interface TermSection {
	id: number;
	title: string;
	content: string;
}

const termsData: TermSection[] = [
	{
		id: 1,
		title: "1. Acceptance of Terms",
		content:
			"By accessing or using GP Logistics platform, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use our B2B marketplace services.",
	},
	{
		id: 2,
		title: "2. B2B Transactions & Quotes",
		content:
			"All product prices listed on the platform serve as wholesale estimates. Final transaction prices, shipping tariffs, and delivery timelines are finalized upon formal quotation and invoice signing.",
	},
	{
		id: 3,
		title: "3. User Responsibilities",
		content:
			"Buyers and suppliers must ensure that all provided business details, licensing numbers, and customs declarations are accurate and legitimate under international trade regulations.",
	},
	{
		id: 4,
		title: "4. Limitation of Liability",
		content:
			"GP Logistics is not liable for indirect or consequential damages resulting from maritime delays, port strikes, or unforeseen international trade restrictions beyond our control.",
	},
];

export default function TermsOfService() {
	return (
		<main className="w-[92%] max-w-4xl mx-auto py-12 flex-1">
			<div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
				<h1 className="font-display font-extrabold text-3xl text-ink mb-2">
					Terms of Service
				</h1>
				<p className="text-xs text-slate-400 mb-6">
					Last updated: September 2026
				</p>

				<div className="space-y-6 text-slate-600 text-sm leading-relaxed">
					{termsData.map((section) => (
						<section key={section.id}>
							<h2 className="font-bold text-lg text-ink mb-2">
								{section.title}
							</h2>
							<p>{section.content}</p>
						</section>
					))}
				</div>
			</div>
		</main>
	);
}
