import "windi.css";
import "~/global.css";

export const metadata = {
  title: {
    default: "Web app",
  },
  description: "A web app generated using @sfrady20/template-web",
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
