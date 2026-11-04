import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Naincy | Software Developer & CS Undergraduate",
  description: "Portfolio of Naincy — Computer Science undergraduate building full-stack applications and exploring data science, machine learning, and AI.",
  keywords: ["Naincy", "Computer Science", "Software Developer", "React", "Next.js", "Python", "Machine Learning"],
  openGraph: {
    title: "Naincy | Software Developer & CS Undergraduate",
    description: "Building thoughtful digital experiences through software engineering, data, and AI.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
