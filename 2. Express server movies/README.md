## omdbapi server using Node JS

install NodeJS (https://nodejs.org/en/download/) and Mysql 8 (https://dev.mysql.com/doc/mysql-installation-excerpt/8.0/en/installing.html)

## Settings:
- `npm install` or `yarn install`
- `npm start` or `yarn start`
- create database named `apiLog` and run `database.sql` file

note: using latest (npm or yarn) and node is recommended

## Routes Available:
- /search -> query string available is `keyword` (required) and `page` optional default 1
- /detail/:id -> id is needed and passed in params ex /detail/tt0372784

backend configuration in included in .env variable
