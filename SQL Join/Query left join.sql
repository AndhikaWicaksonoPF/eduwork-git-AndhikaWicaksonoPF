SELECT users.id, users.name, categories.name AS category_name, products.name AS product_name
FROM users
LEFT JOIN categories ON users.id = categories.user_id
LEFT JOIN products ON categories.id = products.category_id;
