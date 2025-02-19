import express from "express"
import {createMenu, deleteMenu, getAllMenus, updateMenu} from "../controllers/menuController"
import { verifyAddMenu, verifyEditMenu } from "../middlewares/verifyMenu"
import { verifyRole, verifyToken } from "../middlewares/authorization"
import uploadFile from "../middlewares/menuUpload"

const app = express()

app.use(express.json())

app.get(`/`, [verifyToken, verifyRole(["CASHIER", "MANAGER"])], getAllMenus)
app.post(`/`, [verifyToken, verifyRole(["MANAGER"]), uploadFile.single("picture")], [verifyAddMenu], createMenu)
app.put(`/:id`, [verifyToken, verifyRole(["MANAGER"]), uploadFile.single("picture")], [verifyEditMenu], updateMenu)
app.put(`/pic/:id`, [uploadFile.single("picture"), verifyToken, verifyRole(["MANAGER"])] )
app.delete(`/:id`, [verifyToken, verifyRole(["MANAGER"])], deleteMenu)

export default app