import { routes } from "../Routes.js/web";

function getRoute(path, obj) {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

export function routeServiceProvider(name, params = {}, queryParams = {}){
    const path = getRoute(name, routes);

    if (!path) {
        throw new Error(`Route "${name}" not defined.`);
    }

    let url = path;

    for (const param in params) {
        url = url.replace(`{${param}}`, params[param]);
    }

    const queryString = Object.keys(queryParams)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)
        .join('&');

    return queryString ? `${url}?${queryString}` : url;
}

/*
    How to use? 
    1.If use like this :
        Input : route('post', { id: postId }, { search: 'settings' })
        Output : /user/42?search=settings

    2.If use like this :
        Input : route('post', { id: postId , search: 'settings' })
        Output : /user/42/settings
*/
