import { ScrollToTop } from "@/components/ScrollToTop";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import RidesPage from "./pages/RidesPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import ShopPage from "./pages/ShopPage";
import ShopItemPage from "./pages/ShopItemPage";
import HowToPage from "./pages/HowToPage";
import HowToDetailPage from "./pages/HowToDetailPage";
import NotFound from "./pages/NotFound";

const App = () => (
  <>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/rides" element={<RidesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/:slug" element={<ShopItemPage />} />
        <Route path="/how-to" element={<HowToPage />} />
        <Route path="/how-to/:slug" element={<HowToDetailPage />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
