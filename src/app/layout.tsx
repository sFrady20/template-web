import "windi.css";
import "~/global.css";

export const metadata = {
  title: {
    default: "Web template",
  },
  description: "A website generated using @sfrady20/template-web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
