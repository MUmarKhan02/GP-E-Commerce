import { Metadata } from "next";
import { Blogs } from "@/container";

export const metadata: Metadata = {
	title: "Blogs | GP Logistics",
	description:
		"Blogs of GP Logistics, a premier B2B marketplace for global trade, offering verified products, secure transactions, and worldwide connections.",
};

export default function BlogsPage() {
	return <Blogs />;
}
