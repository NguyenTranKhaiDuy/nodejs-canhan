import express, { Express } from 'express';
const router = express.Router();

const webRoutes = (app: Express) => {
    router.get("/", (req, res) => {
        res.render("home.ejs")
    })

    router.get("/home", (req, res) => {
        res.send("Peter")
    })

    app.use("/", router);
}
export default webRoutes;