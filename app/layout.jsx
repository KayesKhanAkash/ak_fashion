import { Footer, Nav, ProductModal, TopNav } from "@/components";
import "./globals.css";
import "./index.css";

import LocationNav from "@/components/LocationNav";
import CartModal from "@/components/CartModal";
import UpdateProductModal from "@/components/dashboard/add-products/UpdateProductModal";
import Providers from "@/redux/provider";

export const metadata = {
  title: "Ak fashion",
  description: "Build by Md Kayesh",
};

export default function RootLayout({ children }) {
  // const router = useRouter();

  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        // className={`${
        //   router.pathname.includes("dashboard")
        //     ? "overflow-hidden"
        //     : "overflow-auto"
        // }`}
      >
        <Providers>
          <header>
            <TopNav />
            <Nav />
            <LocationNav />
          </header>
          {children}
          <ProductModal />
          <CartModal />
          <UpdateProductModal />
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
