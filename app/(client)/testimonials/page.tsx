import { Metadata } from "next";
import { Testimonials } from "@/container";

export const metadata: Metadata = {
	title: "Testimonials | GP Logistics",
	description:
		"Testimonials of GP Logistics, a premier B2B marketplace for global trade, offering verified products, secure transactions, and worldwide connections.",
};

export default function TestimonialsPage() {
	return <Testimonials />;
}
