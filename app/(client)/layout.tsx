import { Footer, Header } from "@/components";

export default function ClientLayout({ children }: LayoutProps<"/">) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}
