import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Thêm Router
import Header from './components/Header';
import Footer from './components/Footer';
import ProductSection from './components/ProductSection';
import Book_NB from './components/Book_NB';
import Book_Goi_YY from './components/Book_Goi_Y';
import Home from './pages/Home';
import Duoi_QCQC from './components/Duoi_Qc';
import DanhMucSanPham from './components/Danh_Muc_San_Pham';
import CategoryDetail from './components/Do_Choi_Lap_Rap'; // Thêm component chi tiết danh mục
import { LiaDrumSteelpanSolid } from 'react-icons/lia';

// Component chính cho trang Home (bao gồm các section)
const HomePage = () => {
  return (
    <main>
      <Home />
      <Duoi_QCQC />
      <DanhMucSanPham />
      <ProductSection />
      <Book_NB />
      <Book_Goi_YY />
    </main>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Trang chính */}
          <Route path="/" element={<HomePage />} />
          {/* Route cho chi tiết danh mục */}
          <Route path="/category/:categoryName" element={<CategoryDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;