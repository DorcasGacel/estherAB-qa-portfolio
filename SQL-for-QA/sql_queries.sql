-- SELECT: ver usuarios
SELECT * FROM users;

-- WHERE: filtrar usuario
SELECT * FROM users
WHERE email = 'ana@mail.com';

-- COUNT: total usuarios
SELECT COUNT(*) FROM users;

-- INNER JOIN: relación usuarios - órdenes
SELECT users.name, orders.total
FROM users
INNER JOIN orders ON users.id = orders.user_id;

-- LEFT JOIN: usuarios sin órdenes
SELECT users.name, orders.total
FROM users
LEFT JOIN orders ON users.id = orders.user_id;

-- GROUP BY: total órdenes por usuario
SELECT users.name, COUNT(orders.id) AS total_orders
FROM users
INNER JOIN orders ON users.id = orders.user_id
GROUP BY users.name;

-- ORDER BY: ordenar órdenes
SELECT * FROM orders
ORDER BY total DESC;

-- LIKE: búsqueda parcial
SELECT * FROM users
WHERE email LIKE '%mail%';
