"use client";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
	const contactInfo = [
		{
			icon: MapPin,
			title: "Address",
			value: "1107 Kings Heather Dr, Bowie, MD 20721 USA",
		},
		{
			icon: Phone,
			title: "Phone",
			value: "+1 (123) 456-7890",
		},
		{
			icon: Mail,
			title: "Email",
			value: "info@yourdomain.com",
		},
	];

	return (
		<main className="w-[92%] mx-auto py-12 flex-1">
			<div className="grid lg:grid-cols-2 gap-12">
				<div>
					<span className="text-gold font-bold text-xs uppercase tracking-widest">
						Get In Touch
					</span>

					<h1 className="font-display font-extrabold text-4xl text-ink mt-2">
						Contact Our Global Support
					</h1>

					<p className="text-slate-600 mt-4 leading-relaxed">
						Reach out for custom logistics inquiries, seller onboarding, or
						order status checks.
					</p>

					<div className="space-y-4 mt-8">
						{contactInfo.map((item) => {
							const Icon = item.icon;

							return (
								<div
									key={item.title}
									className="p-4 bg-white rounded-xl border border-slate-200 flex items-center gap-4">
									<Icon className="text-gold w-6 h-6 flex-shrink-0" />

									<div>
										<h4 className="font-bold text-ink">{item.title}</h4>

										<p className="text-sm text-slate-500">{item.value}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				<div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm">
					<h2 className="font-bold text-2xl text-ink mb-6">
						Send Us a Message
					</h2>

					<form
						onSubmit={(e) => {
							e.preventDefault();
							alert("Message Sent!");
						}}
						className="space-y-4">
						<input
							type="text"
							placeholder="Full Name"
							required
							className="w-full h-12 border border-slate-200 rounded-xl px-4 text-sm outline-none focus:border-gold"
						/>

						<input
							type="email"
							placeholder="Email Address"
							required
							className="w-full h-12 border border-slate-200 rounded-xl px-4 text-sm outline-none focus:border-gold"
						/>

						<textarea
							rows={4}
							placeholder="Your Message"
							required
							className="w-full border border-slate-200 rounded-xl p-4 text-sm outline-none focus:border-gold"
						/>

						<button
							type="submit"
							className="w-full bg-gold text-white font-bold h-12 rounded-xl hover:bg-black transition-colors">
							Submit
						</button>
					</form>
				</div>
			</div>
		</main>
	);
}
