import { Metadata } from "next";
import { Shop } from "@/container";

export const metadata: Metadata = {
	title: "Shop | GP Logistics",
	description:
		"Shop of GP Logistics, a premier B2B marketplace for global trade, offering verified products, secure transactions, and worldwide connections.",
};

export default function ShopPage() {
	return <Shop />;
}
