"use client";
import {
	ArrowRight,
	BadgeCheck,
	Headphones,
	Monitor,
	Pill,
	Scissors,
	Shirt,
	ShoppingCart,
	Smartphone,
	Sparkles,
	Truck,
	Zap,
	ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";

type Product = {
	name: string;
	image: string;
};

type Category = {
	title: string;
	description: string;
	products: Product[];
};

const productImages: Record<string, string> = {
	"Refurbished iPhone 13 Pro":
		"https://images.unsplash.com/photo-1592286927505-1def25115558?auto=format&fit=crop&w=700&q=85",

	"Refurbished Tablet Pro 11":
		"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=700&q=85",

	"Galaxy S22 Ultra 256GB":
		"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=700&q=85",

	"Noise Cancelling Earbuds":
		"https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=700&q=85",

	"Cotton Basic T-Shirts - Multipack":
		"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=85",

	"Unisex Fleece Pullover Hoodies":
		"https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=700&q=85",

	"Summer Casual Wear Lot":
		"https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=700&q=85",

	"Retail Apparel Bundle":
		"https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=700&q=85",

	"Classic Fit Denim Jeans - Mixed":
		"https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=85",

	"Women's High-Waisted Jeans":
		"https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=700&q=85",

	"Slim Fit Stretch Denim":
		"https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&w=700&q=85",

	"Vintage Washed Jeans Pack":
		"https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=700&q=85",

	"Smartwatch Pro - Bulk Pack":
		"https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=700&q=85",

	"Desktop Monitor Displays":
		"https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=700&q=85",

	"Refurbished Tech Gear":
		"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=85",

	"Audio Electronics Pack":
		"https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=700&q=85",

	"Organic Vitamin C Complex Pills":
		"https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=700&q=85",

	"High Potency Omega-3 Capsules":
		"https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=700&q=85",

	"Daily Multivitamin Pills":
		"https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=700&q=85",

	"Collagen Peptides Capsules":
		"https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=700&q=85",

	"Fragrance Assortment Pack":
		"https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=85",

	"Premium Men's Cologne Gift":
		"https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=700&q=85",

	"Signature Floral Eau de Parfum":
		"https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=700&q=85",

	"Luxury Oud Intense Parfum":
		"https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=700&q=85",
};

const categories: Category[] = [
	{
		title: "1. Used Phones",
		description: "Fully tested, unlocked pre-owned mobile devices",
		products: [
			{
				name: "Refurbished iPhone 13 Pro",
				image: productImages["Refurbished iPhone 13 Pro"],
			},
			{
				name: "Refurbished Tablet Pro 11",
				image: productImages["Refurbished Tablet Pro 11"],
			},
			{
				name: "Galaxy S22 Ultra 256GB",
				image: productImages["Galaxy S22 Ultra 256GB"],
			},
			{
				name: "Noise Cancelling Earbuds",
				image: productImages["Noise Cancelling Earbuds"],
			},
		],
	},
	{
		title: "2. Regular Clothes",
		description: "Everyday essential wear and apparel in bulk",
		products: [
			{
				name: "Cotton Basic T-Shirts - Multipack",
				image: productImages["Cotton Basic T-Shirts - Multipack"],
			},
			{
				name: "Unisex Fleece Pullover Hoodies",
				image: productImages["Unisex Fleece Pullover Hoodies"],
			},
			{
				name: "Summer Casual Wear Lot",
				image: productImages["Summer Casual Wear Lot"],
			},
			{
				name: "Retail Apparel Bundle",
				image: productImages["Retail Apparel Bundle"],
			},
		],
	},
	{
		title: "3. Jeans",
		description: "Premium denim and jeans for retail suppliers",
		products: [
			{
				name: "Classic Fit Denim Jeans - Mixed",
				image: productImages["Classic Fit Denim Jeans - Mixed"],
			},
			{
				name: "Women's High-Waisted Jeans",
				image: productImages["Women's High-Waisted Jeans"],
			},
			{
				name: "Slim Fit Stretch Denim",
				image: productImages["Slim Fit Stretch Denim"],
			},
			{
				name: "Vintage Washed Jeans Pack",
				image: productImages["Vintage Washed Jeans Pack"],
			},
		],
	},
	{
		title: "4. Old and New Electronics",
		description: "Commercial and consumer tech inventory",
		products: [
			{
				name: "Smartwatch Pro - Bulk Pack",
				image: productImages["Smartwatch Pro - Bulk Pack"],
			},
			{
				name: "Desktop Monitor Displays",
				image: productImages["Desktop Monitor Displays"],
			},
			{
				name: "Refurbished Tech Gear",
				image: productImages["Refurbished Tech Gear"],
			},
			{
				name: "Audio Electronics Pack",
				image: productImages["Audio Electronics Pack"],
			},
		],
	},
	{
		title: "5. Vitamins (Pills)",
		description: "Certified dietary pills and supplement bottles",
		products: [
			{
				name: "Organic Vitamin C Complex Pills",
				image: productImages["Organic Vitamin C Complex Pills"],
			},
			{
				name: "High Potency Omega-3 Capsules",
				image: productImages["High Potency Omega-3 Capsules"],
			},
			{
				name: "Daily Multivitamin Pills",
				image: productImages["Daily Multivitamin Pills"],
			},
			{
				name: "Collagen Peptides Capsules",
				image: productImages["Collagen Peptides Capsules"],
			},
		],
	},
	{
		title: "6. Perfumes and Colognes",
		description: "Authentic designer fragrances and eau de parfum",
		products: [
			{
				name: "Fragrance Assortment Pack",
				image: productImages["Fragrance Assortment Pack"],
			},
			{
				name: "Premium Men's Cologne Gift",
				image: productImages["Premium Men's Cologne Gift"],
			},
			{
				name: "Signature Floral Eau de Parfum",
				image: productImages["Signature Floral Eau de Parfum"],
			},
			{
				name: "Luxury Oud Intense Parfum",
				image: productImages["Luxury Oud Intense Parfum"],
			},
		],
	},
];

const heroSlides = [
	{
		tag: "Big Deals",
		title: (
			<>
				Premium Used
				<br />
				Smartphones
			</>
		),
		description: "Direct wholesale tested inventory ready to ship worldwide.",
		button: "Shop Wholesale",
		image:
			"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=85",
	},
	{
		tag: "New Stock",
		title: (
			<>
				Old & New
				<br />
				Electronics
			</>
		),
		description: "Refurbished laptops, gear, and brand-new electronics.",
		button: "Browse Tech",
		image:
			"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=85",
	},
	{
		tag: "Fashion Logistics",
		title: (
			<>
				Regular Clothes &
				<br />
				Jeans Collection
			</>
		),
		description: "High quality bulk clothing and denim for retailers.",
		button: "Explore Clothes",
		image:
			"https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=85",
	},
];

const perks = [
	{
		icon: Truck,
		title: "Global Shipping",
	},
	{
		icon: ShieldCheck,
		title: "Secure Payments",
	},
	{
		icon: Headphones,
		title: "24/7 Support",
	},
	{
		icon: BadgeCheck,
		title: "Verified Sellers",
	},
];

export default function Home() {
	const [activeSlide, setActiveSlide] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveSlide((current) => (current + 1) % heroSlides.length);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	const handleNewsletter = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		// Add your newsletter API call here.
	};

	return (
		<div className="min-h-screen bg-white text-slate-900">
			<main className="mx-auto w-[92%]">
				{/* Hero + Categories */}
				<section className="mt-6 grid gap-5 lg:mt-12 lg:grid-cols-[320px_1fr_380px] lg:gap-8 xl:grid-cols-[377px_1fr_438px]">
					{/* Categories Sidebar */}
					<aside className="hidden rounded-xl border border-[#e8e6f5] bg-[#f0efff] p-6 lg:block">
						<h2 className="text-2xl font-bold">⌘ &nbsp;Categories</h2>

						<p className="mt-1 text-xl text-slate-500">Browse by Department</p>

						<hr className="my-6 border-[#e3e1ef]" />

						<div className="space-y-5 text-lg font-semibold text-[#4c4a50] xl:text-xl">
							<CategoryLink
								href="/shop"
								icon={<Smartphone />}
								label="Used Phones"
							/>

							<CategoryLink
								href="/shop"
								icon={<Shirt />}
								label="Regular Clothes"
							/>

							<CategoryLink
								href="/shop"
								icon={<Scissors />}
								label="Jeans"
							/>

							<CategoryLink
								href="/shop"
								icon={<Monitor />}
								label="Old & New Electronics"
							/>

							<CategoryLink
								href="/shop"
								icon={<Pill />}
								label="Vitamins (Pills)"
							/>

							<CategoryLink
								href="/shop"
								icon={<Sparkles />}
								label="Perfumes & Colognes"
							/>
						</div>
					</aside>

					{/* Hero Slider */}
					<div className="relative min-h-[420px] overflow-hidden rounded-2xl bg-[#071323] lg:min-h-full">
						<div
							className="flex h-full w-full transition-transform duration-700 ease-in-out"
							style={{
								transform: `translateX(-${activeSlide * 100}%)`,
							}}>
							{heroSlides.map((slide) => (
								<div
									key={slide.tag}
									className="relative min-w-full flex-shrink-0 overflow-hidden">
									<Image
										src={slide.image}
										alt={slide.tag}
										fill
										priority
										className="object-cover"
										sizes="(max-width: 1024px) 92vw, 60vw"
									/>

									<div className="absolute inset-0 bg-gradient-to-r from-[#071323]/80 to-transparent" />

									<div className="relative z-10 p-7 text-white sm:p-12 lg:pt-36">
										<span className="rounded-full bg-[#d29a25] px-4 py-2 font-semibold">
											{slide.tag}
										</span>

										<h1 className="mt-7 text-4xl font-bold leading-tight sm:text-5xl xl:text-6xl">
											{slide.title}
										</h1>

										<p className="mb-8 mt-4 max-w-xl text-lg sm:text-xl">
											{slide.description}
										</p>

										<Link
											href="/shop"
											className="inline-flex items-center gap-2 rounded-xl bg-[#d29a25] px-7 py-4 font-bold transition-colors bg-[#d29a25] hover:text-black">
											{slide.button}
											<ArrowRight />
										</Link>
									</div>
								</div>
							))}
						</div>

						{/* Slider Dots */}
						<div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
							{heroSlides.map((slide, index) => (
								<button
									key={slide.tag}
									type="button"
									aria-label={`Go to slide ${index + 1}`}
									onClick={() => setActiveSlide(index)}
									className={`h-3 rounded-full transition-all ${
										activeSlide === index
											? "w-12 bg-white"
											: "w-4 bg-slate-400/60"
									}`}
								/>
							))}
						</div>
					</div>

					{/* Promo Cards */}
					<div className="grid grid-cols-2 gap-3 lg:grid-cols-1 lg:gap-6">
						<PromoCard
							title="Perfumes & Colognes"
							description="Luxury original wholesale scents"
							image="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=85"
						/>

						<PromoCard
							title="Vitamins (Pills)"
							description="Certified wellness supplements"
							image="https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=900&q=85"
						/>
					</div>
				</section>

				{/* Perks */}
				<section
					id="perks"
					className="my-10 grid grid-cols-2 gap-5 rounded-xl border border-[#e8e6f5] bg-[#f0efff] py-7 text-center md:grid-cols-4 lg:my-20">
					{perks.map((perk) => {
						const Icon = perk.icon;

						return (
							<div
								key={perk.title}
								className="flex flex-col items-center">
								<span className="mb-2 inline-grid h-14 w-14 place-items-center rounded-full bg-[#eee6e1] text-[#d29a25]">
									<Icon />
								</span>

								<h3 className="mt-1 text-base font-bold lg:text-lg">
									{perk.title}
								</h3>

								<p className="mt-1 text-sm text-slate-500">
									Lorem Ipsum is simply dummy text
								</p>
							</div>
						);
					})}
				</section>

				{/* First Product Groups */}
				<div>
					{categories.slice(0, 2).map((category) => (
						<ProductSection
							key={category.title}
							category={category}
						/>
					))}
				</div>

				{/* Flash Sale */}
				<section className="mb-16 grid overflow-hidden rounded-2xl bg-[#071323] text-white lg:mb-28 lg:grid-cols-[1fr_1.1fr]">
					<div className="p-8 lg:p-16">
						<span className="flex items-center gap-2 font-bold text-[#ffe2bf]">
							<Zap />
							FLASH SALE
						</span>

						<h2 className="mt-7 text-3xl font-bold lg:text-4xl">
							Old & New Electronics Clearance
						</h2>

						<p className="mt-6 text-slate-300">
							Limited wholesale stocks available for verified global buyers.
						</p>

						<div className="mt-8 flex gap-3">
							<CountdownBox
								value="02"
								label="Days"
							/>
							<CountdownBox
								value="14"
								label="Hours"
							/>
							<CountdownBox
								value="45"
								label="Mins"
							/>
						</div>

						<Link
							href="/shop"
							className="mt-8 inline-block rounded-xl bg-[#d29a25] px-8 py-4 font-bold transition-colors hover:bg-[#d29a25] hover:text-black">
							Buy Now
						</Link>
					</div>

					<div className="relative h-64 lg:h-full">
						<Image
							src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1300&q=85"
							alt="Clearance Warehouse"
							fill
							className="object-cover"
							sizes="(max-width: 1024px) 92vw, 50vw"
						/>
					</div>
				</section>

				{/* Remaining Product Groups */}
				<div>
					{categories.slice(2).map((category) => (
						<ProductSection
							key={category.title}
							category={category}
						/>
					))}
				</div>

				{/* Newsletter */}
				<section className="mb-16 rounded-2xl border border-[#e5cebb] bg-[#f8f0eb] p-8 text-center lg:mb-24 lg:p-16">
					<h2 className="text-2xl font-bold lg:text-3xl">
						Subscribe to Newsletter
					</h2>

					<p className="mt-4 text-slate-500">
						Get instant price drop alerts and new category arrivals.
					</p>

					<form
						onSubmit={handleNewsletter}
						className="mx-auto mt-7 flex max-w-3xl flex-col gap-3 sm:flex-row">
						<input
							type="email"
							required
							placeholder="Enter your email address"
							className="h-16 flex-1 rounded-xl border border-slate-200 px-5 text-lg outline-none focus:border-[#d29a25]"
						/>

						<button
							type="submit"
							className="h-16 rounded-xl bg-[#d29a25] px-9 font-bold text-white transition-colors hover:bg-black">
							Subscribe Now
						</button>
					</form>
				</section>
			</main>
		</div>
	);
}

/* ---------------------------------------------
   Helper Components
--------------------------------------------- */

function CategoryLink({
	href,
	icon,
	label,
}: {
	href: string;
	icon: React.ReactNode;
	label: string;
}) {
	return (
		<Link
			href={href}
			className="flex items-center gap-4 transition-colors hover:text-[#d29a25]">
			{icon}
			{label}
		</Link>
	);
}

function PromoCard({
	title,
	description,
	image,
}: {
	title: string;
	description: string;
	image: string;
}) {
	return (
		<div className="group relative h-48 overflow-hidden rounded-2xl text-white lg:h-auto">
			<Image
				src={image}
				alt={title}
				fill
				className="object-cover transition-transform duration-300 group-hover:scale-105"
				sizes="(max-width: 1024px) 45vw, 30vw"
			/>

			<div className="absolute inset-0 bg-black/40" />

			<div className="absolute bottom-5 left-5 z-10 lg:bottom-8 lg:left-9">
				<h2 className="text-xl font-bold lg:text-3xl">{title}</h2>

				<p className="mt-1 hidden text-lg text-slate-200 lg:block">
					{description}
				</p>

				<Link
					href="/shop"
					className="mt-2 inline-block rounded bg-white px-5 py-2 font-semibold text-slate-800 transition-colors hover:bg-[#d29a25] hover:text-white">
					Explore
				</Link>
			</div>
		</div>
	);
}

function ProductSection({ category }: { category: Category }) {
	return (
		<section className="mb-16 lg:mb-28">
			<div className="mb-6 flex items-end justify-between gap-4 lg:mb-8">
				<div>
					<h2 className="text-2xl font-bold lg:text-3xl">{category.title}</h2>

					<p className="mt-1 text-sm text-slate-500 lg:text-xl">
						{category.description}
					</p>
				</div>

				<Link
					href="/shops"
					className="shrink-0 font-bold text-[#d29a25] hover:underline">
					View All →
				</Link>
			</div>

			<div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-8">
				{category.products.map((product) => (
					<ProductCard
						key={product.name}
						product={product}
					/>
				))}
			</div>
		</section>
	);
}

function ProductCard({ product }: { product: Product }) {
	return (
		<article className="overflow-hidden rounded-xl bg-white shadow-[0_13px_22px_rgba(30,23,48,.07)]">
			<div className="relative aspect-square overflow-hidden">
				<Image
					src={product.image}
					alt={product.name}
					fill
					className="object-cover transition-transform duration-300 hover:scale-105"
					sizes="(max-width: 1024px) 45vw, 25vw"
				/>

				<span className="absolute left-3 top-3 rounded bg-[#12c66e] px-3 py-1 text-sm font-semibold text-white">
					NEW
				</span>

				<span className="absolute right-3 top-3 rounded bg-white px-3 py-1 text-sm font-bold shadow-sm">
					MOQ: 50
				</span>
			</div>

			<div className="p-4">
				<h3 className="truncate text-base font-bold lg:text-xl">
					{product.name}
				</h3>

				<p className="mt-2 text-sm text-slate-500">Wholesale Item</p>

				<div className="mt-4 flex items-center">
					<b className="text-lg font-bold lg:text-xl">$32.00</b>

					<small className="ml-1 text-slate-500">/Unit</small>

					<Link
						href="/cart"
						aria-label={`Add ${product.name} to cart`}
						className="ml-auto grid h-10 w-10 place-items-center rounded-full bg-[#f6f0eb] text-[#d29a25] transition-colors hover:bg-[#d29a25] hover:text-white">
						<ShoppingCart className="w-5" />
					</Link>
				</div>
			</div>
		</article>
	);
}

function CountdownBox({ value, label }: { value: string; label: string }) {
	return (
		<div className="grid h-20 w-20 place-items-center rounded-xl bg-[#273247] text-3xl lg:h-28 lg:w-24">
			<b>{value}</b>

			<small className="-mt-7 text-sm font-normal">{label}</small>
		</div>
	);
}
