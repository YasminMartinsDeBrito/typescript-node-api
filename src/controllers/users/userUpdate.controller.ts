import { Request, Response} from "express"
import userUpdateService from "../../services/user/userUpdate.service"

const userUpdateController = async(req: Request, res: Response) => {
    try{
        const email = req.userEmail

        const { password } = req.body

        if(!password){
            throw new Error("No password informed")
        }

        const user = await userUpdateService(email, password)
        return res.status(201).json({message: "password update!"})

    }catch(err){
        if(err instanceof Error){
            return res.status(401).send({
                error: err.name,
                message: err.message,
            })
        }
    }
}
export default userUpdateController