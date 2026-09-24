import { Metadata } from "next";
import { Inquiry } from "@/container";

export const metadata: Metadata = {
	title: "Inquiry | GP Logistics",
	description:
		"Inquiry GP Logistics, a premier B2B marketplace for global trade, offering verified products, secure transactions, and worldwide connections.",
};

export default function InquiryPage() {
	return <Inquiry />;
}
