import type {Metadata} from "next";
import '@/styles/globals.css';
import {GlobalNav} from "@/ui/global-nav";
import {ReactNode} from "react";

export const metadata: Metadata = {
  title: "飄流幻境Online輔助工具",
  description: "Wonderland Tools",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="[color-scheme:dark]">
    <body className="overflow-y-scroll bg-gray-1100 pb-36">
    <GlobalNav/>

    <div className="lg:pl-72">
      <div className="mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:px-8 lg:py-8">

        <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
          <div className="rounded-lg bg-black p-3.5 lg:p-6">{children}</div>
        </div>
      </div>
    </div>
    </body>
    </html>
  );
}
