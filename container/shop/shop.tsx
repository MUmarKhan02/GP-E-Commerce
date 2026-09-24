"use client";
import { ArrowRight } from "lucide-react";
import { useState, useMemo } from "react";

interface Product {
	id: string;
	name: string;
	cat: string;
	price: number;
	img: string;
}

const CATEGORIES = [
	{ label: "All Products", value: "ALL" },
	{ label: "Used Phones", value: "Used Phones" },
	{ label: "Regular Clothes", value: "Regular Clothes" },
	{ label: "Jeans", value: "Jeans" },
	{ label: "Old & New Electronics", value: "Electronics" },
	{ label: "Vitamins (Pills)", value: "Vitamins" },
	{ label: "Perfumes & Colognes", value: "Perfumes" },
];

const PRODUCTS: Product[] = [
	{
		id: "1",
		name: "Refurbished iPhone 13 Pro",
		cat: "Used Phones",
		price: 90,
		img: "https://images.unsplash.com/photo-1592286927505-1def25115558?auto=format&fit=crop&w=700&q=85",
	},
	{
		id: "2",
		name: "Galaxy S22 Ultra 256GB",
		cat: "Used Phones",
		price: 85,
		img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=700&q=85",
	},
	{
		id: "3",
		name: "Cotton Basic T-Shirts Lot",
		cat: "Regular Clothes",
		price: 30,
		img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=85",
	},
	{
		id: "4",
		name: "Classic Fit Denim Jeans",
		cat: "Jeans",
		price: 45,
		img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=85",
	},
	{
		id: "5",
		name: "Smartwatch Pro Bulk Pack",
		cat: "Electronics",
		price: 60,
		img: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=700&q=85",
	},
	{
		id: "6",
		name: "Organic Vitamin C Pills",
		cat: "Vitamins",
		price: 25,
		img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=700&q=85",
	},
	{
		id: "7",
		name: "Luxury Oud Intense Parfum",
		cat: "Perfumes",
		price: 75,
		img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=700&q=85",
	},
];

export default function Shop() {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("ALL");
	const [maxPrice, setMaxPrice] = useState(200);

	const filteredProducts = useMemo(() => {
		return PRODUCTS.filter((product) => {
			const matchesCategory =
				selectedCategory === "ALL" || product.cat === selectedCategory;
			const matchesSearch = product.name
				.toLowerCase()
				.includes(searchTerm.toLowerCase());
			const matchesPrice = product.price <= maxPrice;

			return matchesCategory && matchesSearch && matchesPrice;
		});
	}, [searchTerm, selectedCategory, maxPrice]);

	return (
		<>
			<div className="bg-[#fcf8f2] border-b border-[#f3e6d3] py-12 text-center">
				<h1 className="font-display font-extrabold text-4xl lg:text-5xl text-ink">
					Shop
				</h1>
				<p className="text-slate-500 mt-2 text-base">
					Empowering Global B2B Trade &amp; Logistics Solutions
				</p>
			</div>

			<main className="w-[92%] mx-auto py-8 flex-1">
				<div className="bg-ink text-white rounded-2xl p-8 mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
					<div>
						<h2 className="font-display text-slate-500 text-3xl font-bold">
							Shop Wholesale Products
						</h2>
						<p className="text-slate-500 text-sm mt-1">
							Filter by categories or search specific items.
						</p>
					</div>
					<input
						type="text"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						placeholder="Search products..."
						className="w-full md:w-72 bg-white/10 border border-white/20 text-white placeholder-slate-400 rounded-xl px-4 py-2.5 outline-none focus:border-gold"
					/>
				</div>

				<div className="grid lg:grid-cols-[280px_1fr] gap-8">
					<aside className="bg-white border border-slate-200 rounded-2xl p-6 h-fit space-y-6">
						<div>
							<h3 className="font-bold text-lg text-ink mb-4">Categories</h3>
							<div className="space-y-2 text-sm text-slate-600">
								{CATEGORIES.map((cat) => (
									<label
										key={cat.value}
										className="flex items-center gap-2 cursor-pointer">
										<input
											type="radio"
											name="cat"
											value={cat.value}
											checked={selectedCategory === cat.value}
											onChange={() => setSelectedCategory(cat.value)}
											className="accent-gold"
										/>
										{cat.label}
									</label>
								))}
							</div>
						</div>

						<hr className="border-slate-200" />

						<div>
							<h3 className="font-bold text-lg text-ink mb-2">Max Price</h3>
							<input
								type="range"
								min="20"
								max="200"
								value={maxPrice}
								onChange={(e) => setMaxPrice(Number(e.target.value))}
								className="w-full accent-gold"
							/>
							<span className="text-xs text-slate-500 font-bold">
								Max: ${maxPrice}
							</span>
						</div>
					</aside>

					<div>
						{filteredProducts.length === 0 ? (
							<div className="text-center py-12 text-slate-500">
								No products found matching your filters.
							</div>
						) : (
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
								{filteredProducts.map((p) => (
									<article
										key={p.id}
										className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 flex flex-col justify-between">
										<div>
											<img
												className="w-full h-48 object-cover"
												src={p.img}
												alt={p.name}
											/>
											<div className="p-4">
												<span className="text-xs text-gold font-bold uppercase">
													{p.cat}
												</span>
												<h3 className="font-bold text-base mt-1 text-ink">
													{p.name}
												</h3>
											</div>
										</div>
										<div className="p-4 pt-0 flex items-center justify-between">
											<b className="text-lg text-ink">${p.price}.00</b>
											<a
												href={`inquiry.html?product=${encodeURIComponent(p.name)}`}
												className="bg-gold text-white text-xs font-bold px-3 py-2 rounded-lg hover:bg-black transition-colors flex items-center gap-1">
												Inquire <ArrowRight className="w-3 h-3" />
											</a>
										</div>
									</article>
								))}
							</div>
						)}
					</div>
				</div>
			</main>
		</>
	);
}
