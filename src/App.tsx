import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLayout from "./components/layout/PageLayout";
import HomePage from "./pages/home";
import BooksPage from "./pages/books";
import NewsPage from "./pages/news";
import CommunityPage from "./pages/community";
import AboutPage from "./pages/about";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout><HomePage /></PageLayout>} />
        <Route path="/books" element={<PageLayout><BooksPage /></PageLayout>} />
        <Route path="/news" element={<PageLayout><NewsPage /></PageLayout>} />
        <Route path="/community" element={<PageLayout><CommunityPage /></PageLayout>} />
        <Route path="/about" element={<PageLayout><AboutPage /></PageLayout>} />
      </Routes>
    </BrowserRouter>
  );
}