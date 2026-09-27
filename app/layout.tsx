import { CartProvider } from "@/context/CartContext";
import "@/styles/globals.css";
import ReactLenis from "lenis/react";
import { DM_Sans } from "next/font/google";

const dM_Sans = DM_Sans({
	variable: "--font-d-m_sans",
	subsets: ["latin"],
});

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="en"
			className={`${dM_Sans.className} antialiased`}>
			<body>
				<ReactLenis root>
					<CartProvider>
						{children}
					</CartProvider>
				</ReactLenis>
			</body>
		</html>
	);
}
