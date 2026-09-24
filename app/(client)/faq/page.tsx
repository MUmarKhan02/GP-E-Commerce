import { Metadata } from "next";
import { FAQ } from "@/container";

export const metadata: Metadata = {
	title: "FAQ | GP Logistics",
	description:
		"FAQ GP Logistics, a premier B2B marketplace for global trade, offering verified products, secure transactions, and worldwide connections.",
};

export default function ContactPage() {
	return <FAQ />;
}
