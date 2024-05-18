
import { Controller } from "./Controller";
import { PostValidation } from "../Validations/PostValidation";
import { PostModel } from "../Models/PostModel";

export class PostController extends Controller {

    constructor(PostModel, PostValidation){
        this.postModel = PostModel;
        this.postValidation = PostValidation;
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
            if(!this.postValidation.store(data)){
                window.alert('Wooooooo, Check your data please .... xD');
                return ;
            }
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