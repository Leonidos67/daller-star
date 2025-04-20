'use client'

import "./globals.css";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>TON Connect Demo</title>
      </head>
      <body>
        <TonConnectUIProvider manifestUrl="https://crimson-certain-hawk-162.mypinata.cloud/ipfs/bafkreihq4nzqhsndaq3eeuwmfoqwh4cdu7wvtghqzngsjoiwrlzksju2me">
          {children}
        </TonConnectUIProvider>
      </body>
    </html>
  );
}