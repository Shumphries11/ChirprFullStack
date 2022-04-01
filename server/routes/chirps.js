import * as express from 'express';
import db from '../db';

const router = express.Router();


// no more chirpstore! install mysql from npm and configure the routes to use that instead of chirpstore.

// REST API
router.get("/:id?", async (req, res) => {
    let id = req.params.id;
    try {
        if (id) {
            res.json((await db.Chirps.one(id))[0]);
        } else {
            res.json(await db.Chirps.all());
        }

    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});



// Create
router.post("/", async (req, res) => {
    const body = req.body
    try {
        res.json(await db.Chirps.create(body.userid, body.content, body.location));
        res.sendStatus(200);

    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// Delete
router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        res.json(await db.Chirps.remove(id));
        res.sendStatus(200);

    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }

});

// Update
router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const body = req.body;

    try {
        res.json(await db.Chirps.update(body.content, id));
        res.sendStatus(200);

    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

export default router;