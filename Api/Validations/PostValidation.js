import { Validation } from "./Validation";

export class PostValidation extends Validation{
    
    store(data){
        // here is example 
        if(!data.title || !data.description || !data.date){
            return false;
        }
        return true;
    }
}