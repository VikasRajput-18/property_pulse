import "@/assets/styles/globals.css";

export const metadata = {
  title: "Property Pulse",
  description: "Property Pulse is a property selling or buying website",
  keywords: "rental, find rentals,find properties",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
