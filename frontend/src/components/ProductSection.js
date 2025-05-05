import React, { useState } from 'react';
import '../CSS/ProductSection.css';

const Book = ({ image, title, subtitle, price, link }) => (
  <div className="book-card">
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={image} alt={title} className="book-image" />
    </a>
    <div className="book-info">
      <h3 className="book-title">{title}</h3>
      {subtitle && <p className="book-subtitle">{subtitle}</p>}
      <p className="book-price">{price.toLocaleString('vi-VN')} đ</p>
      <button className="buy-button">Mua ngay</button>
    </div>
  </div>
);

const Book_NB = () => {
  const books = [
    { image: '/img/tin12.jpg', title: 'Ôn Luyện THPT', subtitle: '', price: 150000, link: 'https://example.com/book1' },
    { image: '/img/tin12.jpg', title: 'Kinh Đi - Bí Ẩn', subtitle: 'gon - Đê hộc', price: 200000, link: 'https://example.com/book2' },
    { image: '/img/tin12.jpg', title: 'Take Note Ngắn', subtitle: 'Đề hộc', price: 120000, link: 'https://example.com/book3' },
    { image: '/img/tin12.jpg', title: 'Ôn Luyện THPT', subtitle: '', price: 150000, link: 'https://example.com/book1' },
    { image: '/img/tin12.jpg', title: 'Kinh Đi - Bí Ẩn', subtitle: 'gon - Đê hộc', price: 200000, link: 'https://example.com/book2' },
    { image: '/img/tin12.jpg', title: 'Take Note Ngắn', subtitle: 'Đề hộc', price: 120000, link: 'https://example.com/book3' },
    { image: '/img/tin12.jpg', title: 'Ôn Luyện THPT', subtitle: '', price: 150000, link: 'https://example.com/book1' },
    { image: '/img/tin12.jpg', title: 'Kinh Đi - Bí Ẩn', subtitle: 'gon - Đê hộc', price: 200000, link: 'https://example.com/book2' },
    { image: '/img/tin12.jpg', title: 'Take Note Ngắn', subtitle: 'Đề hộc', price: 120000, link: 'https://example.com/book3' },
    { image: '/img/tin12.jpg', title: 'Ôn Luyện THPT', subtitle: '', price: 150000, link: 'https://example.com/book1' },
    { image: '/img/tin12.jpg', title: 'Kinh Đi - Bí Ẩn', subtitle: 'gon - Đê hộc', price: 200000, link: 'https://example.com/book2' },
    { image: '/img/tin12.jpg', title: 'Take Note Ngắn', subtitle: 'Đề hộc', price: 120000, link: 'https://example.com/book3' },
    { image: '/img/tin12.jpg', title: 'Ôn Luyện THPT', subtitle: '', price: 150000, link: 'https://example.com/book1' },
    { image: '/img/tin12.jpg', title: 'Kinh Đi - Bí Ẩn', subtitle: 'gon - Đê hộc', price: 200000, link: 'https://example.com/book2' },
    { image: '/img/tin12.jpg', title: 'Take Note Ngắn', subtitle: 'Đề hộc', price: 120000, link: 'https://example.com/book3' },
    { image: '/img/tin12.jpg', title: 'Ôn Luyện THPT', subtitle: '', price: 150000, link: 'https://example.com/book1' },
    { image: '/img/tin12.jpg', title: 'Kinh Đi - Bí Ẩn', subtitle: 'gon - Đê hộc', price: 200000, link: 'https://example.com/book2' },
    { image: '/img/tin12.jpg', title: 'Take Note Ngắn', subtitle: 'Đề hộc', price: 120000, link: 'https://example.com/book3' },
  ];

  const [showAll, setShowAll] = useState(false);

  const visibleBooks = showAll ? books : books.slice(0, 6);

  return (
    <div className="app">
      <div className="featured-books-banner">
        <h2>TỦ SÁCH</h2>
      </div>
      <div className="book-list">
        {visibleBooks.map((book, index) => (
          <Book key={index} {...book} />
        ))}
      </div>
      <div className="button-container">
        {!showAll ? (
          <button className="toggle-btn" onClick={() => setShowAll(true)}>
            Xem thêm
          </button>
        ) : (
          <button className="toggle-btn" onClick={() => setShowAll(false)}>
            Thu gọn
          </button>
        )}
      </div>
    </div>
  );
};

export default Book_NB;