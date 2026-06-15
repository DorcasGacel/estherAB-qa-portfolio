# API Testing - Automation Exercise

## Objetivo

Validar los principales servicios API de la plataforma Automation Exercise mediante pruebas funcionales utilizando Postman.

## Herramientas utilizadas

* Postman
* JSON
* JavaScript (Scripts de validación)
* GitHub

## Cobertura de pruebas

### Product APIs

* TC-API-001 Get All Products
* TC-API-002 Get Product Detail
* TC-API-003 Search Product
* TC-API-004 Search Product Empty Input
* TC-API-005 Search Product Missing Parameter

### User APIs

* TC-API-006 Verify Login User
* TC-API-007 Verify Login Invalid Credentials
* TC-API-008 Register User
* TC-API-009 Delete User Account

## Validaciones realizadas

* Verificación de códigos HTTP.
* Validación de responseCode.
* Validación de mensajes de respuesta.
* Verificación de estructura JSON.
* Validación de campos obligatorios.
* Pruebas positivas (Happy Path).
* Pruebas negativas.
* Manejo de parámetros vacíos y ausentes.

## Estructura del proyecto

* Postman Collection: colección exportada de Postman.
* Evidencias: capturas de ejecución de pruebas.
* Casos de Prueba API: documentación de casos de prueba.

## Resultados

Se ejecutaron pruebas sobre funcionalidades críticas relacionadas con productos y usuarios, validando tanto comportamientos esperados como escenarios negativos.
