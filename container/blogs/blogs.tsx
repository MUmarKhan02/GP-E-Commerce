import { ArrowRight } from "lucide-react";

interface BlogPost {
	id: string;
	category: string;
	title: string;
	description: string;
	imageUrl: string;
	link: string;
}

const blogPosts: BlogPost[] = [
	{
		id: "1",
		category: "Supply Chain",
		title: "Freight Logistics Guide 2026",
		description:
			"Reduce container shipping delays and streamline international custom clearances.",
		imageUrl:
			"https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=700&q=85",
		link: "inquiry.html",
	},
	{
		id: "2",
		category: "Electronics",
		title: "Used Smartphone Testing Standards",
		description:
			"How we grade Grade A and Grade B bulk refurbished phones before dispatch.",
		imageUrl:
			"https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=700&q=85",
		link: "inquiry.html",
	},
	{
		id: "3",
		category: "Apparel Sourcing",
		title: "Fabric GSM Ratings Explained",
		description:
			"Selecting heavy-duty denim and premium cotton lots for retail distribution.",
		imageUrl:
			"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=85",
		link: "inquiry.html",
	},
];

export default function Blogs() {
	return (
		<>
			<div className="bg-[#fcf8f2] border-b border-[#f3e6d3] py-12 text-center">
				<h1 className="font-display font-extrabold text-4xl lg:text-5xl text-ink">
					Blogs
				</h1>
				<p className="text-slate-500 mt-2 text-base">
					Empowering Global B2B Trade &amp; Logistics Solutions
				</p>
			</div>
			<main className="w-[92%] mx-auto py-12 flex-1">
				<div className="text-center max-w-2xl mx-auto mb-10">
					<h2 className="font-display font-extrabold text-4xl text-ink">
						Trade &amp; Supply Chain Blogs
					</h2>
					<p className="text-slate-500 mt-2">
						Latest market insights for wholesale buyers worldwide.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{blogPosts.map((post) => (
						<article
							key={post.id}
							className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
							<img
								src={post.imageUrl}
								alt={post.title}
								className="h-48 w-full object-cover"
							/>
							<div className="p-6 flex-1 flex flex-col justify-between">
								<div>
									<span className="text-gold font-bold text-xs uppercase">
										{post.category}
									</span>
									<h3 className="font-bold text-xl mt-2 text-ink">
										{post.title}
									</h3>
									<p className="text-slate-500 text-sm mt-2">
										{post.description}
									</p>
								</div>
								<a
									href={post.link}
									className="mt-4 text-gold font-bold text-sm flex items-center gap-1 hover:underline w-fit">
									Read More <ArrowRight className="w-4 h-4" />
								</a>
							</div>
						</article>
					))}
				</div>
			</main>
		</>
	);
}
