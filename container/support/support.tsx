import React from "react";
import { Package, ShieldCheck, Headphones } from "lucide-react";

interface SupportFeature {
	id: string;
	title: string;
	description: string;
	icon: React.ReactNode;
}

const supportFeatures: SupportFeature[] = [
	{
		id: "1",
		title: "Order Tracking",
		description:
			"Check real-time freight status and container shipping updates.",
		icon: <Package className="w-6 h-6" />,
	},
	{
		id: "2",
		title: "Customs Clearance",
		description:
			"Assistance with international documentation and tariff guidelines.",
		icon: <ShieldCheck className="w-6 h-6" />,
	},
	{
		id: "3",
		title: "24/7 Priority Help",
		description:
			"Direct line for active shipments and urgent logistics issues.",
		icon: <Headphones className="w-6 h-6" />,
	},
];

export default function Support() {
	return (
		<main className="w-[92%] max-w-5xl mx-auto py-12 flex-1">
			<div className="text-center mb-10">
				<h1 className="font-display font-extrabold text-4xl text-ink">
					Help &amp; Support Center
				</h1>
				<p className="text-slate-500 mt-2">
					How can our logistics and trade experts assist you today?
				</p>
			</div>

			<div className="grid md:grid-cols-3 gap-6 mb-12">
				{supportFeatures.map((feature) => (
					<div
						key={feature.id}
						className="bg-white border border-slate-200 p-6 rounded-2xl text-center">
						<div className="w-12 h-12 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-4">
							{feature.icon}
						</div>
						<h2 className="font-bold text-lg text-ink">{feature.title}</h2>
						<p className="text-slate-500 text-xs mt-2">{feature.description}</p>
					</div>
				))}
			</div>

			<div className="bg-ink text-white rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center gap-6">
				<div>
					<h2 className="text-2xl font-bold text-slate-500">
						Need Immediate Assistance?
					</h2>
					<p className="text-slate-500 text-sm mt-1">
						Submit a ticket and our account managers will contact you within 2
						hours.
					</p>
				</div>
				<a
					href="contact.html"
					className="bg-gold text-white bg-[#d29a25] font-bold px-6 py-3 rounded-xl hover:text-ink transition-colors whitespace-nowrap">
					Open Support Ticket
				</a>
			</div>
		</main>
	);
}
