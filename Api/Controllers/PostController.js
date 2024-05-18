
import { Controller } from "./Controller";
import { PostModel } from "../Models/PostModel";

export class PostController extends Controller {

    constructor(PostModel){
        this.postModel = PostModel;
    }
    async index(){
        try {
            return await this.postModel.index();
        } catch (error) {
            // handle your popup message here ...
            window.alert(error);
        }
    }
    async store({data : data}){
        try {
            return await this.postModel.store({data : data});
        } catch (error) {
            // handle your popup message here ...
            window.alert(error);
        }
    }
    async update({postId : postId, data : data}){
        try {
            return await this.postModel.update({postId : postId, data : data});
        } catch (error) {
            // handle your popup message here ...
            window.alert(error);
        }
    }
    async delete({data : data}){
        try {
            return await this.postModel.delete({data : data});
        } catch (error) {
            // handle your popup message here ...
            window.alert(error);
        }
    }
}


/*

this controll u can use it in angular componant.

*/