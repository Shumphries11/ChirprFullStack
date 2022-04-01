import { Query } from "./index";

const all = () => Query('SELECT * FROM chirps');

const one = (id) => Query(`SELECT * FROM chirps WHERE id= ?`, [id]);

const create = (userid, content, location) => Query(`INSERT INTO chirps(userid, content, location) VALUES (?, ?, ?)`, [userid, content, location]);

const remove = (id) => Query(`DELETE FROM chirps WHERE id=?`, [id]);

const update = (content, id) => {
    Query(`UPDATE chirps SET content=? WHERE id=? `, [content, id])
}



export default {
    all,
    one,
    create,
    remove,
    update
}