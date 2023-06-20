CREATE TABLE categories (
  id INT PRIMARY KEY,
  user_id INT,
  code VARCHAR(255),
  name VARCHAR(255),
  slug VARCHAR(255),
  description TEXT,
  status VARCHAR(255),
  photo VARCHAR(255)
);

INSERT INTO categories (id, user_id, code, name, slug, description, status, photo)
VALUES
  (1, 1, 'CAT001', 'Electronics', 'electronics', 'Category for electronic devices', 'active', 'electronics.jpg'),
  (2, 2, 'CAT002', 'Clothing', 'clothing', 'Category for clothing items', 'active', 'clothing.jpg'),
  (3, 3, 'CAT003', 'Home Decor', 'home-decor', 'Category for home decoration items', 'active', 'homedecor.jpg'),
  (4, 1, 'CAT004', 'Books', 'books', 'Category for books', 'active', 'books.jpg'),
  (5, 4, 'CAT005', 'Beauty', 'beauty', 'Category for beauty products', 'inactive', 'beauty.jpg'),
  (6, 2, 'CAT006', 'Sports', 'sports', 'Category for sports equipment', 'active', 'sports.jpg'),
  (7, 3, 'CAT007', 'Toys', 'toys', 'Category for toys and games', 'active', 'toys.jpg'),
  (8, 1, 'CAT008', 'Jewelry', 'jewelry', 'Category for jewelry items', 'active', 'jewelry.jpg'),
  (9, 5, 'CAT009', 'Appliances', 'appliances', 'Category for home appliances', 'active', 'appliances.jpg'),
  (10, 4, 'CAT010', 'Garden', 'garden', 'Category for garden supplies', 'active', 'garden.jpg');
