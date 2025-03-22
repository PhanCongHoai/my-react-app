import React, { useState } from 'react';
import "../CSS/Book_NB.css"
const Book = ({ image, title, subtitle, link }) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className="book-card">
      <img src={image} alt={title} className="book-image" />
      <h3 className="book-title">{title}</h3>
      {subtitle && <p className="book-subtitle">{subtitle}</p>}
    </a>
  );
  

const App = () => {
    const books = [
        { image: './img/tin12.jpg', title: 'Ôn Luyện THPT', subtitle: '', link: 'https://example.com/book1' },
        { image: './img/tin12.jpg', title: 'Kinh Đi - Bí Ẩn', subtitle: 'gon - Đê hộc', link: 'https://example.com/book2' },
        { image: './img/tin12.jpg', title: 'Take Note Ngắn', subtitle: 'Đề hộc', link: 'https://example.com/book3' },
        { image: './img/tin12.jpg', title: 'Ôn Luyện THPT', subtitle: '', link: 'https://example.com/book1' },
        { image: './img/tin12.jpg', title: 'Kinh Đi - Bí Ẩn', subtitle: 'gon - Đê hộc', link: 'https://example.com/book2' },
        { image: './img/tin12.jpg', title: 'Take Note Ngắn', subtitle: 'Đề hộc', link: 'https://example.com/book3' },
        { image: './img/tin12.jpg', title: 'Ôn Luyện THPT', subtitle: '', link: 'https://example.com/book1' },
        { image: './img/tin12.jpg', title: 'Kinh Đi - Bí Ẩn', subtitle: 'gon - Đê hộc', link: 'https://example.com/book2' },
        { image: './img/tin12.jpg', title: 'Take Note Ngắn', subtitle: 'Đề hộc', link: 'https://example.com/book3' },
      ];
      
  const [showAll, setShowAll] = useState(false);

  const visibleBooks = showAll ? books : books.slice(0, 6);

  return (
    <div className="app">
      <div className="featured-books-banner">
        <h2>SÁCH ĐƯỢC YÊU THÍCH</h2>
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

export default App;
