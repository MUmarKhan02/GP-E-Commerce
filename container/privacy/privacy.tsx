interface PolicySection {
	id: number;
	title: string;
	content: string;
}

const privacyData: PolicySection[] = [
	{
		id: 1,
		title: "1. Information We Collect",
		content:
			"We collect trade details, business contact names, emails, and shipping addresses submitted through inquiry forms or account creation to process wholesale orders.",
	},
	{
		id: 2,
		title: "2. How We Use Your Data",
		content:
			"Your information is exclusively used to process logistics requests, verify B2B buyer identities, facilitate custom quotations, and keep you updated on freight progress.",
	},
	{
		id: 3,
		title: "3. Data Sharing & Security",
		content:
			"We do not sell or rent your corporate data to third-party marketers. Information is only shared with verified shipping carriers and customs brokers necessary to complete your delivery.",
	},
	{
		id: 4,
		title: "4. Contact Us About Data",
		content:
			"If you wish to access, modify, or delete your personal and business records from our systems, please contact our privacy compliance team via the Contact Us page.",
	},
];

export default function PrivacyPolicy() {
	return (
		<main className="w-[92%] max-w-4xl mx-auto py-12 flex-1 ">
			<div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
				<h1 className="font-display font-extrabold text-3xl text-ink mb-2">
					Privacy Policy
				</h1>
				<p className="text-xs text-slate-400 mb-6">
					Last updated: September 2026
				</p>

				<div className="space-y-6 text-slate-600 text-sm leading-relaxed">
					{privacyData.map((section) => (
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
