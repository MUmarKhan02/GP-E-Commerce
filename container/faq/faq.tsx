"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
	{
		question: "How do I place a bulk order on GP Logistics?",
		answer:
			'You can browse our marketplace on the Shop page, select your required items, and click on "Inquire". Fill out the quantity and details on the inquiry form, and our sales team will reach out with a formal quotation.',
	},
	{
		question: "What are the accepted payment methods for international orders?",
		answer:
			"We support secure Wire Transfers (T/T), Letters of Credit (L/C), and verified platform payments for B2B transactions.",
	},
	{
		question: "How is product quality verified before shipping?",
		answer:
			"All goods pass through strict quality control inspections at our warehouses before dispatch. Detailed condition reports and origin verifications are available upon request.",
	},
	{
		question: "What is the average shipping lead time?",
		answer:
			"Lead times depend on the destination port and order volume. Air freight usually takes 5-10 business days, while ocean freight takes 20-35 days.",
	},
];

export default function FAQ() {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	const toggleFAQ = (index: number) => {
		setOpenIndex((current) => (current === index ? null : index));
	};

	return (
		<main className="w-[92%] max-w-4xl mx-auto py-12 flex-1">
			<div className="text-center mb-10">
				<h1 className="font-display font-extrabold text-4xl text-ink">
					Frequently Asked Questions
				</h1>

				<p className="text-slate-500 mt-2">
					Find quick answers to common questions about our wholesale and
					shipping operations.
				</p>
			</div>

			<div className="space-y-4">
				{faqs.map((faq, index) => {
					const isOpen = openIndex === index;

					return (
						<div
							key={faq.question}
							className="bg-white border border-slate-200 rounded-2xl p-6">
							<button
								type="button"
								onClick={() => toggleFAQ(index)}
								className="w-full flex justify-between items-center text-left cursor-pointer"
								aria-expanded={isOpen}>
								<span className="font-bold text-lg text-ink pr-4">
									{faq.question}
								</span>

								<ChevronDown
									className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${
										isOpen ? "rotate-180" : ""
									}`}
								/>
							</button>

							<div
								className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
									isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
								}`}>
								<div className="overflow-hidden">
									<p className="text-slate-600 text-sm mt-4 leading-relaxed">
										{faq.answer}
									</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</main>
	);
}
