export const routes = {
    home: '/',
    post: {
        list : '/post/list',
        store: '/post/store',
        update: '/post/{id}/update',
        delete: '/post/{id}/delete'
    },
};

// this path of api endpoint, so use this to store api endpoint
// it is easy to modify later

/* so we can call its name like this
    if want to get list of post
    -> post.list

    if want to store post
    -> post.store

    if want to update
    -> post.update

    if want to delete
    -> post.delete
*/