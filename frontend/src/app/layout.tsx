import type { Metadata } from "next";
import "./globals.css";
import { TopNav } from "@/src/components/TopNav";

export const metadata: Metadata = {
  title: "电商素材生成工作台"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <TopNav />
        {children}
      </body>
    </html>
  );
}

