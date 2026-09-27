"use client";
import React, { useState, useEffect } from "react";

interface FormData {
	productName: string;
	fullName: string;
	email: string;
	quantity: string;
	details: string;
}

export default function Inquiry() {
	const [formData, setFormData] = useState<FormData>({
		productName: "",
		fullName: "",
		email: "",
		quantity: "",
		details: "",
	});

	const [submitting, setSubmitting] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [submitError, setSubmitError] = useState<string | null>(null);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const params = new URLSearchParams(window.location.search);
			const product = params.get("product");
			if (product) {
				setFormData((prev) => ({ ...prev, productName: product }));
			}
		}
	}, []);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setSubmitting(true);
		setSubmitError(null);
		try {
			const res = await fetch("http://localhost:5000/api/inquiry", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name: formData.fullName,
					email: formData.email,
					message: `Product: ${formData.productName}\nQuantity: ${formData.quantity}\nDetails: ${formData.details}`,
				}),
			});
			if (!res.ok) throw new Error("Failed to submit inquiry");
			setSubmitted(true);
		} catch (err) {
			setSubmitError(
				err instanceof Error ? err.message : "Something went wrong",
			);
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<>
			<div className="bg-[#fcf8f2] border-b border-[#f3e6d3] py-12 text-center">
				<h1 className="font-display font-extrabold text-4xl lg:text-5xl text-ink">
					Inquiry
				</h1>
				<p className="text-slate-500 mt-2 text-base">
					Empowering Global B2B Trade &amp; Logistics Solutions
				</p>
			</div>
			<main className="w-[92%] mx-auto py-12 flex-1">
				<div className="max-w-2xl mx-auto bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
					{submitted ? (
						<div className="text-center py-8">
							<p className="text-green-600 font-bold text-lg">
								Inquiry submitted!
							</p>
							<p className="text-slate-500 text-sm mt-1">
								We&apos;ll get back to you within 24 hours.
							</p>
						</div>
					) : (
						<>
							<div className="text-center mb-6">
								<span className="bg-gold/10 text-gold font-bold px-3 py-1 rounded-full text-xs uppercase">
									Wholesale Quote
								</span>
								<h2 className="font-bold text-3xl text-ink mt-2">
									Request Product Quote
								</h2>
							</div>

							<form
								onSubmit={handleSubmit}
								className="space-y-4">
								<div>
									<label className="block text-xs font-bold text-slate-700 mb-1">
										Target Product
									</label>
									<input
										type="text"
										name="productName"
										value={formData.productName}
										readOnly
										placeholder="No product selected"
										className="w-full h-12 border border-slate-200 rounded-xl px-4 text-sm font-semibold text-gold bg-slate-50 outline-none"
									/>
								</div>

								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
									<input
										type="text"
										name="fullName"
										value={formData.fullName}
										onChange={handleChange}
										placeholder="Full Name"
										required
										className="h-12 border border-slate-200 rounded-xl px-4 text-sm outline-none focus:border-gold"
									/>
									<input
										type="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										placeholder="Business Email"
										required
										className="h-12 border border-slate-200 rounded-xl px-4 text-sm outline-none focus:border-gold"
									/>
								</div>

								<input
									type="number"
									name="quantity"
									value={formData.quantity}
									onChange={handleChange}
									placeholder="Order Quantity (Units)"
									required
									className="w-full h-12 border border-slate-200 rounded-xl px-4 text-sm outline-none focus:border-gold"
								/>

								<textarea
									rows={4}
									name="details"
									value={formData.details}
									onChange={handleChange}
									placeholder="Destination port &amp; details..."
									className="w-full border border-slate-200 rounded-xl p-4 text-sm outline-none focus:border-gold"
								/>

								<button
									type="submit"
									disabled={submitting}
									className="w-full bg-gold text-white font-bold h-12 rounded-xl hover:bg-black transition-colors disabled:opacity-50">
									{submitting ? "Submitting..." : "Submit Inquiry"}
								</button>
								{submitError && (
									<p className="text-red-500 text-sm mt-2">{submitError}</p>
								)}
							</form>
						</>
					)}
				</div>
			</main>
		</>
	);
}