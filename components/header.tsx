"use client";
import {
	Truck,
	Search,
	ArrowRight,
	ChevronDown,
	ShoppingBag,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { logo } from "@/public";
import { shopCategories } from "@/constants";

export default function Header() {
	return (
		<>
			<div className="hidden h-14 items-center justify-center gap-20 bg-[#b27600] font-semibold text-white sm:flex">
				<span>
					✿ &nbsp;Fast & Reliable Worldwide Delivery — Track Your Order Live!
				</span>

				<span className="flex items-center gap-2">
					<Truck className="w-5" />
					Secure Payments
				</span>

				<span>◉ Global Sourcing</span>
			</div>
			<header className="relative flex h-20 items-center gap-10 bg-black px-[4%] text-white lg:h-[121px]">
				<Link
					href="/"
					className="flex items-center">
					<Image
						src={logo}
						alt="GP Logistics Logo"
						width={220}
						height={80}
						priority
						className="h-auto w-auto max-w-[170px] lg:max-w-[220px]"
					/>
				</Link>

				<nav className="mx-auto hidden items-center gap-11 whitespace-nowrap font-semibold lg:flex">
					<Link
						href="/"
						className="py-2 transition-colors hover:text-[#d29a25]">
						Home
					</Link>

					<Link
						href="/about"
						className="py-2 transition-colors hover:text-[#d29a25]">
						About Us
					</Link>

					{/* Shops Dropdown */}
					<div className="group relative flex cursor-pointer items-center gap-1 py-2">
						<Link
							href="/shop"
							className="flex items-center gap-1 transition-colors group-hover:text-[#d29a25]">
							Shops
							<ChevronDown className="w-4 transition-transform duration-200 group-hover:rotate-180" />
						</Link>

						<div className="absolute left-0 top-full z-50 hidden w-56 rounded-lg bg-white py-2 text-black shadow-xl group-hover:block">
							{shopCategories.map((category) => (
								<Link
									key={category}
									href="/shop"
									className="block px-4 py-2 text-sm transition-colors hover:bg-gray-100 hover:text-[#d29a25]">
									{category}
								</Link>
							))}
						</div>
					</div>
					<Link
						href="/blogs"
						className="py-2 transition-colors hover:text-[#d29a25]">
						Blogs
					</Link>

					<Link
						href="/testimonials"
						className="py-2 transition-colors hover:text-[#d29a25]">
						Testimonials
					</Link>
				</nav>
				<div className="ml-auto flex items-center gap-4 whitespace-nowrap">
					<Link
						href="/search"
						aria-label="Search"
						className="transition-colors hover:text-[#d29a25]">
						<Search />
					</Link>
					<Link
						href="/cart"
						aria-label="Cart"
						className="transition-colors hover:text-[#d29a25]">
						<ShoppingBag />
					</Link>
					<Link
						href="/sell"
						className="hidden items-center text-white gap-1 rounded-full border-2 px-6 py-3 font-bold transition-colors hover:text-black hover:bg-[#d29a25] xl:flex">
						Sell on GP Logistics
						<ArrowRight className="w-5" />
					</Link>
					<Link
						href="/contact"
						className="hidden items-center gap-1 rounded-full bg-[#d29a25] px-6 py-4 font-bold text-white transition-opacity hover:opacity-90 md:flex">
						Request a Quote
						<ArrowRight className="w-5" />
					</Link>
				</div>
			</header>
		</>
	);
}
