import { Metadata } from "next";
import { AboutUs } from "@/container";

export const metadata: Metadata = {
	title: "About Us | GP Logistics",
	description:
		"Learn about GP Logistics, a premier B2B marketplace for global trade, offering verified products, secure transactions, and worldwide connections.",
};

export default function AboutPage() {
	return <AboutUs />;
}
