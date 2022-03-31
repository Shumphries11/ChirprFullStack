import { Query } from "./index";

const all = async () => Query('SELECT * FROM chirps');

const one = async (id) => Query(`SELECT * FROM chirps WHERE id= ?`, [id]);

const create = async (userid, content, location) => Query(`INSERT INTO chirps(userid, content, location) VALUES (?, ?, ?)`, [userid, content, location]);

const remove = async (id) => Query(`DELETE FROM chirps WHERE id=?`, [id]);

const update = async (content, id) => {
    Query(`UPDATE chirps SET content=? WHERE id=? `, [content, id])
}



export default {
    all,
    one,
    create,
    remove,
    update
}