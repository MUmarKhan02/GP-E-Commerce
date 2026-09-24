import Link from "next/link";
import Image from "next/image";
import { features } from "@/constants";
import { CheckCircle2 } from "lucide-react";

export default function About() {
	return (
		<main className="w-[92%] mx-auto py-12 flex-1">
			<div className="grid lg:grid-cols-2 gap-12 items-center">
				<div className="relative">
					<div className="rounded-2xl overflow-hidden shadow-xl bg-blue-500 h-[380px] lg:h-[450px]">
						<Image
							src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=85"
							alt="Business Growth"
							width={1000}
							height={450}
							className="w-full h-full object-cover"
						/>
					</div>

					<div className="absolute -bottom-6 -right-4 w-1/2 rounded-2xl overflow-hidden border-4 border-white shadow-2xl hidden sm:block">
						<Image
							src="https://images.unsplash.com/photo-1592286927505-1def25115558?auto=format&fit=crop&w=700&q=85"
							alt="Shopping & Logistics"
							width={600}
							height={192}
							className="w-full h-48 object-cover"
						/>
					</div>
				</div>

				<div className="space-y-5">
					<h2 className="font-display text-3xl lg:text-4xl font-extrabold text-ink">
						GP Logistics - About Us.
					</h2>

					<p className="text-slate-600 leading-relaxed">
						GP Logistics, powered by Global Solutions LLC, is a premier global
						B2B marketplace platform that enables businesses, entrepreneurs, and
						organizations to create their own online trade network, source
						verified products, and connect with buyers worldwide.
					</p>

					<p className="text-slate-600 leading-relaxed">
						Guided by our mission,{" "}
						<i>"Achieve Development by Working Accurately,"</i> GP Logistics
						provides a secure, transparent, and reliable environment for global
						commerce.
					</p>

					<div className="pt-2">
						<p className="font-semibold text-ink mb-3">
							On GP Logistics, users can:
						</p>

						<ul className="space-y-2 text-slate-600 text-sm">
							{features.map((feature) => (
								<li
									key={feature}
									className="flex items-start gap-2">
									<CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
									<span>{feature}</span>
								</li>
							))}
						</ul>
					</div>

					<div className="pt-4">
						<Link
							href="/contact"
							className="inline-block  text-white font-bold px-8 py-3.5 rounded-xl bg-[#d29a25] transition-colors">
							Contact Us
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
}
