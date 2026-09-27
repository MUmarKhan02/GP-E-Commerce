"use client";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function Cart() {
	const { items, removeItem, updateQuantity, total } = useCart();
	const [checkingOut, setCheckingOut] = useState(false);
	const [confirmation, setConfirmation] = useState<string | null>(null);
	const [checkoutError, setCheckoutError] = useState<string | null>(null);

	const handleCheckout = async () => {
		setCheckingOut(true);
		setCheckoutError(null);
		try {
			const res = await fetch("http://localhost:5000/api/cart/checkout", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ items, total }),
			});
			if (!res.ok) throw new Error("Checkout failed");
			const data = await res.json();
			setConfirmation(data.confirmation);
		} catch (err) {
			setCheckoutError(
				err instanceof Error ? err.message : "Something went wrong",
			);
		} finally {
			setCheckingOut(false);
		}
	};

	return (
		<>
			<div className="bg-[#fcf8f2] border-b border-[#f3e6d3] py-12 text-center">
				<h1 className="font-display font-extrabold text-4xl lg:text-5xl text-ink">
					Your Cart
				</h1>
			</div>

			<main className="w-[92%] mx-auto py-8 flex-1">
				{items.length === 0 ? (
					<div className="text-center py-12 text-slate-500">
						Your cart is empty.
					</div>
				) : (
					<div className="max-w-2xl mx-auto space-y-4">
						{confirmation ? (
							<div className="text-center py-12">
								<p className="text-green-600 font-bold text-lg">
									Order confirmed!
								</p>
								<p className="text-slate-500 text-sm mt-1">
									Confirmation: {confirmation}
								</p>
							</div>
						) : (
							<>
								{items.map((item) => (
									<div
										key={item.id}
										className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-4">
										<img
											src={item.image}
											alt={item.title}
											className="w-20 h-20 object-cover rounded-lg"
										/>
										<div className="flex-1">
											<h3 className="font-bold text-ink">{item.title}</h3>
											<p className="text-sm text-slate-500">
												${item.price}.00 each
											</p>
										</div>
										<div className="flex items-center gap-2">
											<button
												onClick={() =>
													updateQuantity(item.id, item.quantity - 1)
												}
												className="w-8 h-8 border border-slate-300 rounded-lg">
												-
											</button>
											<span className="w-6 text-center">{item.quantity}</span>
											<button
												onClick={() =>
													updateQuantity(item.id, item.quantity + 1)
												}
												className="w-8 h-8 border border-slate-300 rounded-lg">
												+
											</button>
										</div>
										<b className="w-16 text-right text-ink">
											${(item.price * item.quantity).toFixed(2)}
										</b>
										<button
											onClick={() => removeItem(item.id)}
											className="text-red-500 text-sm font-bold">
											Remove
										</button>
									</div>
								))}

								<div className="flex justify-between items-center pt-4 border-t border-slate-200">
									<span className="text-lg font-bold text-ink">Total</span>
									<span className="text-lg font-bold text-ink">
										${total.toFixed(2)}
									</span>
								</div>

								<button
									onClick={handleCheckout}
									disabled={checkingOut}
									className="w-full bg-gold text-white font-bold py-3 rounded-lg hover:bg-black transition-colors disabled:opacity-50">
									{checkingOut ? "Processing..." : "Checkout"}
								</button>
								{checkoutError && (
									<p className="text-red-500 text-sm mt-2">{checkoutError}</p>
								)}
							</>
						)}
					</div>
				)}
			</main>
		</>
	);
}