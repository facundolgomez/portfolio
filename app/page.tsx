import PortfolioGrid from "@/components/PortfolioGrid";
import { ThemeProvider } from "next-themes";
export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <ThemeProvider attribute="class" defaultTheme="dark">
        <PortfolioGrid />
      </ThemeProvider>
    </main>
  );
}
