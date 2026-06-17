import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import BooksPage from "./pages/books";
import NewsPage from "./pages/news";
import CommunityPage from "./pages/community";
import AboutPage from "./pages/about";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}