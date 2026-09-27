"use client";
import { createContext, useContext, useState, useMemo, ReactNode } from "react";

interface Product {
	id: string;
	title: string;
	category: string;
	description: string;
	price: number;
	image: string;
}

interface CartItem extends Product {
	quantity: number;
}

interface CartContextType {
	items: CartItem[];
	addItem: (product: Product) => void;
	removeItem: (id: string) => void;
	updateQuantity: (id: string, quantity: number) => void;
	total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
	const [items, setItems] = useState<CartItem[]>([]);

	const addItem = (product: Product) => {
		setItems((prev) => {
			const existing = prev.find((item) => item.id === product.id);
			if (existing) {
				return prev.map((item) =>
					item.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item,
				);
			}
			return [...prev, { ...product, quantity: 1 }];
		});
	};

	const removeItem = (id: string) => {
		setItems((prev) => prev.filter((item) => item.id !== id));
	};

	const updateQuantity = (id: string, quantity: number) => {
		if (quantity <= 0) {
			removeItem(id);
			return;
		}
		setItems((prev) =>
			prev.map((item) => (item.id === id ? { ...item, quantity } : item)),
		);
	};

	const total = useMemo(
		() => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
		[items],
	);

	return (
		<CartContext.Provider
			value={{ items, addItem, removeItem, updateQuantity, total }}>
			{children}
		</CartContext.Provider>
	);
}

export function useCart() {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
}