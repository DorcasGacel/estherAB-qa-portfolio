# SQL Test Cases - QA Portfolio

## TC-SQL-001: Verify users exist
- Objective: Validate users are stored in DB
- Query:
SELECT * FROM users;

---

## TC-SQL-002: Verify specific user
- Objective: Validate user data after registration
- Query:
SELECT * FROM users WHERE email = 'ana@mail.com';

---

## TC-SQL-003: Count total users
- Objective: Validate number of registered users
- Query:
SELECT COUNT(*) FROM users;

---

## TC-SQL-004: Validate user orders
- Objective: Check relation between users and orders
- Query:
SELECT users.name, orders.total
FROM users
INNER JOIN orders ON users.id = orders.user_id;
