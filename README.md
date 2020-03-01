# trackmyd-api

A simple REST API for trackmyd.

## Architecture

<img src="architecture.png" height="150">

## Paths & Operations

| Path          | Operation | Description       |
| ------------- | --------- | ----------------- |
| /devices      | GET       | Get devices       |
| /devices      | POST      | Add new device    |
| /devices?id=  | GET       | Get single device |
| /devices?id=  | PATCH     | Update device     |
| /device?id=   | DELETE    | Delete device     |
| /device?name= | GET       | Get single device |

## Installation

### Step by step

1. Install **NodeJS** and **NPM**.
2. Install **Mongodb**.
3. Clone this repository.
4. Install dependencies with `npm install`.
5. Configure **users** (app.auth.users) basic authentication into `config.json`.
6. Configure database (db) into `config.json`.
7. Start with `npm start`.

---

Made with ❤️ by Francesco Esposito ([@franjsco](https://github.com/franjsco))
