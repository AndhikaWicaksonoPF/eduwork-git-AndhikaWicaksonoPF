CREATE TABLE products (
  category_id INT,
  user_id INT,
  code VARCHAR(255),
  name VARCHAR(255),
  slug VARCHAR(255),
  description TEXT,
  photo VARCHAR(255),
  qty INT,
  unit VARCHAR(255),
  price DECIMAL(10,2),
  status VARCHAR(255)
);

INSERT INTO products (category_id, user_id, code, name, slug, description, photo, qty, unit, price, status)
VALUES
  (1, 1, 'PRD001', 'Laptop', 'laptop', 'High-performance laptop', 'laptop.jpg', 10, 'pcs', 1500.00, 'active'),
  (2, 2, 'PRD002', 'T-Shirt', 't-shirt', 'Cotton t-shirt', 'tshirt.jpg', 50, 'pcs', 25.99, 'active'),
  (3, 3, 'PRD003', 'Vase', 'vase', 'Decorative flower vase', 'vase.jpg', 20, 'pcs', 12.50, 'active'),
  (1, 4, 'PRD004', 'Book', 'book', 'Best-selling novel', 'book.jpg', 100, 'pcs', 9.99, 'active'),
  (4, 1, 'PRD005', 'Perfume', 'perfume', 'Fragrance for men', 'perfume.jpg', 30, 'pcs', 49.99, 'inactive'),
  (2, 2, 'PRD006', 'Basketball', 'basketball', 'Official size basketball', 'basketball.jpg', 15, 'pcs', 29.99, 'active'),
  (3, 3, 'PRD007', 'Teddy Bear', 'teddy-bear', 'Soft plush teddy bear', 'teddybear.jpg', 50, 'pcs', 19.99, 'active'),
  (1, 1, 'PRD008', 'Necklace', 'necklace', 'Silver pendant necklace', 'necklace.jpg', 5, 'pcs', 79.99, 'active'),
  (5, 5, 'PRD009', 'Refrigerator', 'refrigerator', 'Large capacity refrigerator', 'refrigerator.jpg', 2, 'pcs', 899.99, 'active'),
  (4, 4, 'PRD010', 'Gardening Gloves', 'gardening-gloves', 'Durable gardening gloves', 'gardeninggloves.jpg', 40, 'pcs', 8.99, 'active');
