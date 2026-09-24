import { Metadata } from "next";
import { Terms } from "@/container";

export const metadata: Metadata = {
	title: "Terms & Conditions | GP Logistics",
	description:
		"Terms & Conditions GP Logistics, a premier B2B marketplace for global trade, offering verified products, secure transactions, and worldwide connections.",
};

export default function TermsPage() {
	return <Terms />;
}
