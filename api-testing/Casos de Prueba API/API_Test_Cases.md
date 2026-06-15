# Casos de Prueba API

## TC-API-001 Get All Products

Objetivo:
Validar que la API devuelva correctamente el catálogo de productos.

Resultado esperado:

* HTTP 200.
* Lista de productos presente.
* Estructura JSON válida.

---

## TC-API-006 Verify Login User

Objetivo:
Validar autenticación con credenciales válidas.

Resultado esperado:

* responseCode = 200.
* message = "User exists!".

---

## TC-API-007 Verify Login Invalid Credentials

Objetivo:
Validar autenticación con credenciales inválidas.

Resultado esperado:

* responseCode = 404.
* message = "User not found!".
