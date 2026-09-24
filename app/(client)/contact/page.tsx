import { Metadata } from "next";
import { Contact } from "@/container";

export const metadata: Metadata = {
	title: "Contact Us | GP Logistics",
	description:
		"Contact GP Logistics, a premier B2B marketplace for global trade, offering verified products, secure transactions, and worldwide connections.",
};

export default function ContactPage() {
	return <Contact />;
}
