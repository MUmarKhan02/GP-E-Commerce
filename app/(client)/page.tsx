import { Metadata } from "next";
import { Home } from "@/container";

export const metadata: Metadata = {
	title: "GP Logistics - The Premier B2B Marketplace for Global Trade",
	description:
		"GP Logistics is a leading B2B marketplace connecting global buyers and sellers. Source verified products, request quotes, and build lasting trade relationships with our trusted platform.",
};

export default function HomePage() {
	return <Home />;
}
