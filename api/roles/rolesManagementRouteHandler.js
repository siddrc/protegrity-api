const router = require("express").Router();
const RolesBusinessLogic = require("./rolesBusinessLogic")
class RolesRouteHandler {
    static getRouter() {
        router.get("/", async(req, res) => {
            try {
                const results = await RolesBusinessLogic.getRoles()
                res.status(200).send(results);
            } catch (error) {
                res.status(500).send(error)
            }
        });
        return router;
    }
}
module.exports = RolesRouteHandler;