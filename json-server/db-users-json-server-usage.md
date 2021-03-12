# db-users-json-server-usage

## Uso json-server

- -h, --help -> json-server -h
- Arrancar server indicando la db ->  
  `json-server db-users.json`
- Arrancar server indicando la db y con un dalay de repuesta ->  
  `-d, --delay -> json-server db-users.json -d 1000`
- Arrancar server indicando la db y con un archivo de config de rutas ->  
  `-r, --routes Path-to-routes-file -> json-server db-users.json -r db-users-routes.json`

## Rutas

GET http://localhost:3001/db

GET http://localhost:3001/users
GET http://localhost:3001/users/2

POST http://localhost:3001/users

PUT http://localhost:3001/users/2

DELETE http://localhost:3001/users/2
