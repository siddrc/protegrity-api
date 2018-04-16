const router = require("express").Router();
const UserManagementBusinessLogic = require("./userManagementBusinessLogic")
class UserManagementRouteHandler {
    static getRouter() {
        router.get("/", async(req, res) => {
            try {
                const results = await UserManagementBusinessLogic.getUsers()
                res.status(200).send(results);
            } catch (error) {
                res.status(500).send(error)
            }
        })

        router.delete("/:id", async(req,res)=>{
            try {
                const userId = req.params.id;
                const results = await UserManagementBusinessLogic.deleteUser(userId)
                res.status(200).send(results);
            } catch (error) {
                res.status(500).send(error)
            }
        })
        router.post("/" , async(req,res)=>{
            try{
                const user = req.body;
                const result = await UserManagementBusinessLogic.createUser(user);
                res.status(200).send(result)
            }catch(error){
                res.status(500).send(error)
            }
        })
        router.get("/user/:userId",async(req,res)=>{
            try {
                const userId = req.params.userId;
                const results = await UserManagementBusinessLogic.getUser(userId)
                res.status(200).send(results);
            } catch (error) {
                res.status(500).send(error)
            }
        })
        router.put("/",async(req,res)=>{
           try {
                const user = req.body;
                const results = await UserManagementBusinessLogic.updateUser(user)
                res.status(200).send(results);
            } catch (error) {
                res.status(500).send(error)
            }
        })
        return router;
    }
}
module.exports = UserManagementRouteHandler;