import { Metadata } from "next";
import { Support } from "@/container";

export const metadata: Metadata = {
	title: "Support | GP Logistics",
	description:
		"Support GP Logistics, a premier B2B marketplace for global trade, offering verified products, secure transactions, and worldwide connections.",
};

export default function SupportPage() {
	return <Support />;
}
