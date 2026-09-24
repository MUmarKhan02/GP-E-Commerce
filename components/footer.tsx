import Link from "next/link";
import Image from "next/image";
import { logo } from "@/public";
import { quickLinks, supportLinks } from "@/constants";

export default function Footer() {
	return (
		<footer className="bg-black text-white">
			<div className="mx-auto grid w-[92%] grid-cols-2 gap-8 py-12 lg:grid-cols-4 lg:gap-16 lg:py-16">
				<div className="col-span-2 lg:col-span-1">
					<Link
						href="/"
						className="inline-block">
						<Image
							src={logo}
							alt="GP Logistics Logo"
							width={200}
							height={200}
							className="object-cover"
						/>
					</Link>

					<p className="mt-6 text-sm leading-relaxed text-slate-300">
						Global trade and logistics solutions for wholesale and retail buyers
						worldwide.
					</p>
				</div>

				<div>
					<h3 className="mb-5 text-xl font-bold">Quick Links</h3>

					<div className="flex flex-col space-y-3 text-slate-300">
						{quickLinks.map((link) => (
							<Link
								key={link.label}
								href={link.href}
								className="transition-colors hover:text-[#d29a25]">
								{link.label}
							</Link>
						))}
					</div>
				</div>

				<div>
					<h3 className="mb-5 text-xl font-bold">Support</h3>

					<div className="flex flex-col space-y-3 text-slate-300">
						{supportLinks.map((link) => (
							<Link
								key={link.label}
								href={link.href}
								className="transition-colors hover:text-[#d29a25]">
								{link.label}
							</Link>
						))}
					</div>
				</div>

				<div className="col-span-2 lg:col-span-1">
					<h3 className="mb-5 text-xl font-bold">Contact Us</h3>

					<p className="leading-8 text-slate-300">
						⌖ 1107 Kings Heather Dr, Bowie, MD 20721 USA
						<br />⌕{" "}
						<a
							href="tel:+11234567890"
							className="transition-colors hover:text-[#d29a25]">
							+1 (123) 456-7890
						</a>
						<br />✉{" "}
						<a
							href="mailto:info@yourdomain.com"
							className="transition-colors hover:text-[#d29a25]">
							info@yourdomain.com
						</a>
					</p>
				</div>
			</div>

			<div className="border-t border-zinc-700 py-5 text-center text-slate-300">
				&copy; {new Date().getFullYear()} GP Logistics. All rights reserved.
			</div>
		</footer>
	);
}
