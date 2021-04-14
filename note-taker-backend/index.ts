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
                origin: 'http://localhost:3500',
                credentials: true,
            })
        );
        app.put('/edit', jsonParser, async (req, res, e) => {
            const payload = req.body;
            const type = req.query.type;
            const id = req.query.id;
            try {
                switch (type) {
                    case 'Campaign':
                        let campaign = await Campaign.findOneAndUpdate({'_id': id}, payload);
                        await campaign.save();
                        res.send({message: 'Campaign saved'});
                        break;
                    case 'Character':
                        const character = await Character.findOneAndUpdate({'_id': id}, payload);
                        await character.save();
                        res.send({message: 'Campaign saved'});
                        break;
                    case 'Group':
                        const group = await Group.findOneAndUpdate({'_id': id}, payload);
                        await group.save();
                        res.send({message: 'Campaign saved'});
                        break;
                    case 'Item':
                        const item = await Item.findOneAndUpdate({'_id': id}, payload);
                        await item.save();
                        res.send({message: 'Campaign saved'});
                        break;
                    case 'Quest':
                        const quest = await Quest.findOneAndUpdate({'_id': id}, payload);
                        await quest.save();
                        res.send({message: 'Campaign saved'});
                        break;
                    case 'World':
                        const world = await World.findOneAndUpdate({'_id': id}, payload);
                        await world.save();
                        res.send({message: 'Campaign saved'});
                        break;
                    default:
                        res.status(404).send({error: 'Type not supported'});
                        break;
                }
            } catch {
                res.status(400).send({message: "Couldn't save"})
            }
        })

        // Adds object to database
        app.post('/add', jsonParser, async (req, res, e) => {
            const payload = req.body;
            delete payload._id;
            const type = req.query.type;
            try {
                switch (type) {
                    case 'Campaign':
                        const campaign = new Campaign(payload);
                        await campaign.save();
                        res.send({message: 'Campaign added'});
                        break;
                    case 'Character':
                        const character = new Character(payload);
                        await character.save();
                        res.send({message: 'Campaign added'});
                        break;
                    case 'Group':
                        const group = new Group(payload);
                        await group.save();
                        res.send({message: 'Campaign added'});
                        break;
                    case 'Item':
                        const item = new Item(payload);
                        await item.save();
                        res.send({message: 'Campaign added'});
                        break;
                    case 'Quest':
                        const quest = new Quest(payload);
                        await quest.save();
                        res.send({message: 'Campaign added'});
                        break;
                    case 'World':
                        const world = new World(payload);
                        await world.save();
                        res.send({message: 'Campaign added'});
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
                        res.send({message: 'Campaign deleted'});
                        break;
                    case 'Character':
                        const character = await Character.findOne({'_id': id});
                        await character.delete();
                        res.send({message: 'Character deleted'});
                        break;
                    case 'Group':
                        const group = await Group.findOne({'_id': id});
                        await group.delete();
                        res.send({message: 'Group deleted'});
                        break;
                    case 'Item':
                        const item = await Item.findOne({'_id': id});
                        await item.delete();
                        res.send({message: 'Item deleted'});
                        break;
                    case 'Quest':
                        const quest = await Quest.findOne({'_id': id});
                        await quest.delete();
                        res.send({message: 'Quest deleted'});
                        break;
                    case 'World':
                        const world = await World.findOne({'_id': id});
                        await world.delete();
                        res.send({message: 'World deleted'});
                        break;
                    default:
                        res.status(404).send({error: 'Type not supported'});
                        break;
                }
            } catch {
                res.status(400).send({message: "Couldn't delete"})
            }
        });

        // Fetches list of objects from the database
        app.get('/get', async (req, res, e) => {
            const type = req.query.type;
            try {
                switch (type) {
                    case 'All':
                        const campaigns = await Campaign.find();
                        const characters = await Character.find();
                        const groups = await Group.find();
                        const items = await Item.find();
                        const quests = await Quest.find();
                        const worlds = await World.find();
                        res.send({campaigns: campaigns, characters: characters, groups: groups, items: items, quests: quests, worlds: worlds})
                        break;
                    case 'Campaign':
                        const campaign = await Campaign.find();
                        res.send(campaign);
                        break;
                    case 'Character':
                        const character = await Character.find();
                        res.send(character);
                        break;
                    case 'Group':
                        const group = await Group.find();
                        res.send(group);
                        break;
                    case 'Item':
                        const item = await Item.find();
                        res.send(item);
                        break;
                    case 'Quest':
                        const quest = await Quest.find();
                        res.send(quest);
                        break;
                    case 'World':
                        const world = await World.find();
                        res.send(world);
                        break;
                    default:
                        res.status(404).send({error: 'Type not supported'});
                        break;
                }
            } catch {
                res.status(400).send({message: "Couldn't find"})
            }
        });
        app.use(express.json());
        app.listen(5000, () => {
            console.log("Server has started!");
        });
    });
