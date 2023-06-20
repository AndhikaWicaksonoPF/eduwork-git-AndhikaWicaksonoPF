CREATE TABLE users (
  id INT PRIMARY KEY,
  email VARCHAR(255),
  name VARCHAR(255),
  password VARCHAR(255),
  address VARCHAR(255),
  role VARCHAR(255),
  status VARCHAR(255),
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

INSERT INTO users (id, email, name, password, address, role, status, created_at, updated_at)
VALUES
  (1, 'john@example.com', 'John Doe', 'password123', '123 Main St', 'admin', 'active', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 'jane@example.com', 'Jane Smith', 'secret123', '456 Elm St', 'user', 'active', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 'alice@example.com', 'Alice Johnson', 'qwerty123', '789 Oak St', 'user', 'inactive', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 'bob@example.com', 'Bob Anderson', 'abc123', '321 Pine St', 'user', 'active', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (5, 'emily@example.com', 'Emily Davis', 'password456', '654 Cedar St', 'admin', 'inactive', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (6, 'michael@example.com', 'Michael Wilson', 'admin123', '987 Birch St', 'admin', 'active', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (7, 'sarah@example.com', 'Sarah Thompson', '12345678', '789 Maple St', 'user', 'active', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (8, 'david@example.com', 'David Brown', 'pass123', '123 Oak St', 'user', 'inactive', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (9, 'olivia@example.com', 'Olivia Harris', 'hello123', '456 Pine St', 'user', 'active', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (10, 'james@example.com', 'James Taylor', 'test123', '789 Elm St', 'admin', 'active', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
