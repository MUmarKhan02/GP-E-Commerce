import { Metadata } from "next";
import { Privacy } from "@/container";

export const metadata: Metadata = {
	title: "Privacy Policy | GP Logistics",
	description:
		"Privacy Policy GP Logistics, a premier B2B marketplace for global trade, offering verified products, secure transactions, and worldwide connections.",
};

export default function PrivacyPolicyPage() {
	return <Privacy />;
}
