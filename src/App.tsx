import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import CharacterPage from "./pages/CharacterPage";
import CreatorPage from "./pages/CreatorPage";
import SearchPage from "./pages/SearchPage";
import FavoritePage from "./pages/FavoritePage";
import RatingPage from "./pages/RatingPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<DetailPage />} />
        <Route path="/characters" element={<CharacterPage />} />
        <Route path="/creators" element={<CreatorPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/favorites" element={<FavoritePage />} />
        <Route path="/ratings" element={<RatingPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
