import MainSection from "@/components/sections/home/MainSection";
import StatSection from "@/components/sections/home/StatSection";

export default function Home() {
	return (
		<main className="px-container py-container max-w-full overflow-hidden xl:py-36">
			<MainSection />

			<StatSection />
		</main>
	);
}
