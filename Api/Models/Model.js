import { serviceProvider } from "../Providers/ServiceProvider";
import { routeServiceProvider } from "../Providers/RouteServiceProvider.js";
import { requestServiceProvider } from "../Providers/RequestServiceProvider.js";

export class Model{
    constructor(routeServiceProvider,requestServiceProvider,serviceProvider){
        //url and file url
        this.url = serviceProvider.URL;
        this.resource = serviceProvider.RESOURCE;

        // request and route
        this.request = requestServiceProvider;
        this.router = routeServiceProvider;
    }
    
    route(endPoints){
        if(typeof endPoints !== 'object' && endPoints === null){
            throw new Error(`Route is not defined.`);
        }
        let { name, params, queryParams } = endPoints;
        return `${this.url}${this.router(name, params | {}, queryParams | {})}`;
    }
}


/*
    when call route function in child class

    1.list of posts
        -> this.route({ name : 'post.list' })

    2. create post
        -> this.route({ name : 'post.store' })

    3. update post
        -> this.route({ name : 'post.update', params : { postId : 12 } }) 
        or this.route({ name : 'post.update', queryParams : { postId : 12 } })

    4. delete post
        -> this.route({ name : 'post.delete', params : { postId : 12 } }) 
        or this.route({ name : 'post.delete', queryParams : { postId : 12 } })

    5. your stuff here .....
*/