import { Users } from "../../models/user"
import { HttpRequest, HttpResponse } from "../protocols"

export interface IDeleteUserController {
    handle(htppRequest:HttpRequest<any>):Promise<HttpResponse<any>>
}

export interface IDeleteUserRepository {
    deleteUser(id: string):Promise<Users>
    
}