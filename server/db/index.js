import * as mysql from 'mysql';
import Chirps from './chirpr';


let connection = mysql.createConnection(
    {
        host: 'localhost',
        port: 3306,
        database: 'chirpr',
        user: 'chirprapp',
        password: 'H4rdWorkPays$'
    }
);

export const Query = (query, values) => {
    return new Promise((resolve, reject) => {
        connection.query(query, values, (err, result) => {
            if (err) throw err;
            resolve(result);
        });
    });
};



export default {
    Chirps
}