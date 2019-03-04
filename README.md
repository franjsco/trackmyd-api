# trackmyd-api

Simple REST API for trackmyd project


## Architecture
<img src="architecture.png" height="150">


## Paths & Operations


| Path      | Operation | Description |
|------     |-----      |----|
| /devices  | GET       | Get devices|
| /devices  | POST      | Add new device |
| /devices?id= | GET | Get single device
| /devices?id= | PATCH | Update device |
| /device?id= | DELETE | Delete device |
| /device?name= | GET | Get single device

## Installation

### Step by step

1. Install **NodeJS** and **NPM**.
2. Install **Mongodb**.
2. Clone this repository.
3. Install dependencies with `npm install`.
6. Configure **users** (app.auth.users) into `config.json`.
7. Configure database (db) into `config.json`.
8. Start with `npm start`.

 
 Made with ❤️ by Francesco Esposito ([@frab1t](https://github.com/frab1t))