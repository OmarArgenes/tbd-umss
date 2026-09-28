# Real Estate Client Registry (UMSS, 2023)

University project at Universidad Mayor de San Simón (UMSS).

Frontend for a small real estate office to register clients and their property requirements, and to list registered clients.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap_4-7952B3?style=flat-square&logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

## Features

- Register clients (name, ID number, address, email)
- Register property requirements
- List registered clients in a table

## How it works

The page sends and reads data with `XMLHttpRequest` / `fetch` from a local PHP API (`registrar.php`, `requerimientos.php`, `obtener_datos.php`) connected to a relational database. The PHP API is not included in this repository.

## Run

Open `index.html` in a browser. Saving and listing data requires the PHP API running on `http://localhost/APItbd/`.

---

Early academic work (2023). For current projects see [my GitHub profile](https://github.com/OmarArgenes).
