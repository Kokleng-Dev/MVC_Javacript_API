import { routes } from "../Routes.js/web";

function getRoute(path, obj) {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

export function routeService(name, params = {}, queryParams = {}){
    const path = getRoute(name, routes);

    if (!path) {
        throw new Error(`Route "${name}" not defined.`);
    }

    for (const param in params) {
        path = path.replace(`{${param}}`, params[param]);
    }

    const queryString = Object.keys(queryParams)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)
        .join('&');

    return queryString ? `${path}?${queryString}` : path;
}

/*
    How to user? 
    1.If user like this :
        Input : route('post', { id: postId }, { search: 'settings' })
        Output : /user/42?search=settings

    2.If user like this :
        Input : route('post', { id: postId , search: 'settings' })
        Output : /user/42/settings
*/