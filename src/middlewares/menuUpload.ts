import { Request } from "express";
import multer from "multer"
import {BASE_URL} from "../global";

const storage = multer.diskStorage ({
    destination: (request: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) => {
        cb(null, `${BASE_URL}/public/menu_picture/`)
    },
    filename: (request: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) => {
        cb(null, `${new Date().getTime().toString()}-${file.originalname}`)
    }
})

const uploadFile = multer({
    storage,
    limits: { fileSize: 2 * 1024 * 1024 } /** define max size of upload file, in this case max size 2 mb */
})

export default uploadFile