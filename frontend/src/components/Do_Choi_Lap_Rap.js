import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryDetail = () => {
  const { categoryName } = useParams();
  const decodedName = decodeURIComponent(categoryName); // Giải mã tên danh mục
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Danh mục: {decodedName}</h1>
      <p>Đây là trang chi tiết cho danh mục {decodedName}.</p>
    </div>
  );
};

export default CategoryDetail;