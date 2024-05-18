import Model from './Model.js'

export class PostModel extends Model {
    async index(){
        try {
            const res = await this.request.get(this.route({ name : 'post.list' }));
            return {
                date : res.date,
                title : res.title,
                description : res.description,
            }
            /*
                Why do we need to return like this while the response and object keys are the same?
                Yes, this question is the answer.
                Let me tell you, when a backend or API developer changes something like a column or object 'date' to 'create_date',
                we don't need to change every object of 'postlist' or 'date' to 'create_date' on many pages because on the page where we display the result,
                we use the object 'date' from the return. So we just need to come to this PostModel and change the name here (that's all):

                return {
                    date: res.create_date,
                    title: res.title,
                    description: res.description,
                };
            */
        } catch (error) {
            throw new Error(error)
        }
    }
    async store({data : data}){
        try {
            return await this.request.post(this.route({ name : 'post.store' }), { data : data});
        } catch (error) {
            throw new Error(error)
        }
    }
    async update({postId : postId, data : data}){
        try {
            return await this.request.patch(this.route({ name : 'post.update', params : { postId : postId } }), { data : data });
        } catch (error) {
            throw new Error(error)
        }
    }
    async delete({postId : postId}){
        try {
            return await this.request.delete(this.route({ name : 'post.delete', params : { postId : postId } }));
        } catch (error) {
            throw new Error(error)
        }
    }
}