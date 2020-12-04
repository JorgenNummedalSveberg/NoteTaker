import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from "body-parser";
import Campaign from "./models/Campaign";
import Character from "./models/Character";
import Group from "./models/Group";
import Item from "./models/Item";
import Quest from "./models/Quest";
import World from "./models/World";

mongoose
    .connect("mongodb+srv://admin:admin@notetaker.cny6c.mongodb.net/NoteTaker", {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(() => {
        const app = express();
        const jsonParser = bodyParser.json()
        app.use(
            cors({
                origin: 'http://localhost:3000',
                credentials: true,
            })
        );

        // Adds object to database
        app.post('/add', jsonParser, async (req, res, e) => {
            const payload = req.body.payload;
            const type = req.query.type;
            try {
                switch (type) {
                    case 'Campaign':
                        const campaign = new Campaign(payload);
                        await campaign.save();
                        res.status(200).send({message: 'Campaign added'});
                        break;
                    case 'Character':
                        const character = new Character(payload);
                        await character.save();
                        res.status(200).send({message: 'Campaign added'});
                        break;
                    case 'Group':
                        const group = new Group(payload);
                        await group.save();
                        res.status(200).send({message: 'Campaign added'});
                        break;
                    case 'Item':
                        const item = new Item(payload);
                        await item.save();
                        res.status(200).send({message: 'Campaign added'});
                        break;
                    case 'Quest':
                        const quest = new Quest(payload);
                        await quest.save();
                        res.status(200).send({message: 'Campaign added'});
                        break;
                    case 'World':
                        const world = new World(payload);
                        await world.save();
                        res.status(200).send({message: 'Campaign added'});
                        break;
                    default:
                        res.status(404).send({error: 'Type not supported'});
                        break;
                }
            } catch {
                res.status(400).send({message: "Couldn't save"})
            }
        });

        // Deletes an object from the database
        app.delete('/delete', async (req, res, e) => {
            const id = req.query.id;
            const type = req.query.type;
            try {
                switch (type) {
                    case 'Campaign':
                        const campaign = await Campaign.findOne({'_id': id});
                        await campaign.delete();
                        res.status(200).send({message: 'Campaign added'});
                        break;
                    case 'Character':
                        const character = await Character.findOne({'_id': id});
                        await character.delete();
                        res.status(200).send({message: 'Campaign added'});
                        break;
                    case 'Group':
                        const group = await Group.findOne({'_id': id});
                        await group.delete();
                        res.status(200).send({message: 'Campaign added'});
                        break;
                    case 'Item':
                        const item = await Item.findOne({'_id': id});
                        await item.delete();
                        res.status(200).send({message: 'Campaign added'});
                        break;
                    case 'Quest':
                        const quest = await Quest.findOne({'_id': id});
                        await quest.delete();
                        res.status(200).send({message: 'Campaign added'});
                        break;
                    case 'World':
                        const world = await World.findOne({'_id': id});
                        await world.delete();
                        res.status(200).send({message: 'Campaign added'});
                        break;
                    default:
                        res.status(404).send({error: 'Type not supported'});
                        break;
                }
            } catch {
                res.status(400).send({message: "Couldn't delete"})
            }
        });
        app.use(express.json());
        app.listen(5000, () => {
            console.log("Server has started!");
        });
    });
