import { sql } from "../config/db.js";

//Script para criar a tabela no banco de dados
sql`
CREATE TABLE videos (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    duration INT
);
`.then(() => {
  console.log("table created");
});
