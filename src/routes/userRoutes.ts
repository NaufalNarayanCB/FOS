import express from "express";
import { authentication, createUser, deleteUser, getAllUser, updateUser } from "../controllers/userControllers";
import { verifyAuthentication, verifyAddUser, verifyEditUser } from "../middlewares/userValidation";
import {changePictureProf} from "../controllers/userControllers";
import uploadFile from "../middlewares/userUpload";
import { verifyRole, verifyToken } from "../middlewares/authorization";

const app = express();
app.use(express.json());

app.post(`/create`, [uploadFile.single("picture"), verifyAddUser], createUser);
app.post(`/login`, [uploadFile.single("picture"),verifyAuthentication], authentication);
app.put(`/pic/:id`, [uploadFile.single("picture")], changePictureProf)
app.get(`/`, getAllUser)
app.put(`/:id`,  [uploadFile.single("picture"), verifyEditUser], updateUser)
app.delete(`/:id`, deleteUser)

export default app;