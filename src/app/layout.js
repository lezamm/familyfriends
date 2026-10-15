import "./globals.css";

export const metadata = {
  title: "FamilyFriends",
  description: "Find your favorite dog breed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
