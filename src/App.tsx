import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import CharacterPage from "./pages/CharacterPage";
import CreatorPage from "./pages/CreatorPage";
import FavoritePage from "./pages/FavoritePage";
import RatingPage from "./pages/RatingPage";

import SearchOverlay from "./components/search/SearchOverlay";
import { SearchProvider } from "./context/SearchContext";

function App() {
  return (
    <BrowserRouter>
      <SearchProvider>
        <Navbar />

        <SearchOverlay /> {/* täcker över den sidan man är på */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<DetailPage />} />
          <Route path="/characters" element={<CharacterPage />} />
          <Route path="/creators" element={<CreatorPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="/ratings" element={<RatingPage />} />
        </Routes>

        <Footer />
      </SearchProvider>
    </BrowserRouter>
  );
}

export default App;
