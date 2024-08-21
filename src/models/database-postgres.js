import { sql } from "../config/db.js";

export class DatabasePostgres {
  async list(search) {
    let videos;

    if (search) {
      videos = await sql`SELECT * FROM videos WHERE title ilike "%${search}%"`;
    } else {
      videos = await sql`SELECT * FROM videos`;
    }

    return videos;
  }

  async create(video) {
    const { title, description, duration } = video;

    await sql`INSERT INTO videos (title, description, duration) VALUES (${title}, ${description}, ${duration} )`;
  }

  async update(id, video) {
    const { title, description, duration } = video;

    await sql`UPDATE videos SET title = ${title}, description = ${description}, duration = ${duration} where id = ${id}`;
  }

  async delete(id) {
    await sql`delete from videos where id = ${id}`
  }
}
