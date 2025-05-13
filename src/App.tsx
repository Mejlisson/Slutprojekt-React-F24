import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import FavoritePage from "./pages/FavoritePage";
import RatingPage from "./pages/RatingPage";

import SearchOverlay from "./components/search/SearchOverlay";
import { SearchProvider } from "./context/SearchContext";
import { FavoriteProvider } from "./context/FavoriteContext";
import { RatingProvider } from "./context/ratingContext";

function App() {
  return (
    <BrowserRouter>
      <FavoriteProvider>
        <RatingProvider>
          <SearchProvider>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <SearchOverlay />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/details/:id" element={<DetailPage />} />
                  <Route path="/favorites" element={<FavoritePage />} />
                  <Route path="/ratings" element={<RatingPage />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </SearchProvider>
        </RatingProvider>
      </FavoriteProvider>
    </BrowserRouter>
  );
}
export default App;