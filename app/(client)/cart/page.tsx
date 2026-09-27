import { Metadata } from "next";
import { Cart } from "@/container";

export const metadata: Metadata = {
	title: "Cart | GP Logistics",
	description: "Review items in your cart before checkout.",
};

export default function CartPage() {
	return <Cart />;
}