# SQL para QA Testing (Nivel Básico)

Este módulo forma parte de mi portafolio y demuestra el uso de SQL básico aplicado a pruebas de software,
utilizando un escenario simulado de e-commerce basado en Automation Exercise.

## Objetivo del módulo
El objetivo de este módulo es aprender y aplicar consultas SQL básicas para validar datos en base de datos desde la perspectiva de un QA Tester.

## Estructura de la base de datos (simulada)
### Tabla: users
id
name
email
password
status
### Tabla: orders
id
user_id
total
## Consultas SQL aplicadas
### SELECT — Obtener todos los datos
SELECT * FROM users;
### WHERE — Filtrar datos específicos
SELECT * FROM users
WHERE email = 'ana@mail.com';
### COUNT — Contar registros
SELECT COUNT(*) FROM users;
### INNER JOIN — Relación entre tablas
SELECT users.name, orders.total
FROM users
INNER JOIN orders ON users.id = orders.user_id;
### LEFT JOIN — Validar datos faltantes
SELECT users.name, orders.total
FROM users
LEFT JOIN orders ON users.id = orders.user_id;
### GROUP BY — Resumen de datos
SELECT users.name, COUNT(orders.id) AS total_orders
FROM users
INNER JOIN orders ON users.id = orders.user_id
GROUP BY users.name;
### ORDER BY — Ordenar resultados
SELECT * FROM orders
ORDER BY total DESC;
### LIKE — Búsqueda parcial
SELECT * FROM users
WHERE email LIKE '%gmail%';
