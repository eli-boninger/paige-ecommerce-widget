import { Box } from "@mui/material";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paige product editor",
  description: "Coding challenge result",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Box sx={{ marginLeft: "1rem" }}>{children}</Box>
        </main>
      </body>
    </html>
  );
}
