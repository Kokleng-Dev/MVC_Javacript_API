const http = async (objs) => {

    if(typeof endPoints !== 'object' && endPoints === null){
        throw new Error(`Http is not defined. (RequestProvider)`);
    }
    try {
        // Making the fetch request
        const response = await fetch(objs.url, {
            method: objs.method,
            headers: {...objs.headers} | {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objs.data | null)
        });

        
        // Check if the response is okay (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parsing the response JSON
        const data = await response.json();
        
        // Returning the parsed data
        return data;
        /*
            or before return data we can check status code
            example:
            if(data.status == 200)
                return data.data;
            if(data.status == 401)
                window.alert(data.message)
            if(data.status == 503)
                ..... your message ....
                redirect back ... or sometings.
        */
    } catch (error) {
        throw error;
    }
};




export const RequestProvider = {
    get : async (objs) => await http({ url : objs.url ,method : 'GET', headers : objs.headers | {} }),
    post : async (objs) => await http({ url : objs.url ,method : 'POST', headers : objs.headers | {}, data : objs.data | null }),
    put : async (objs) => await http({ url : objs.url ,method : 'POST', headers : objs.headers | {}, data : objs.data | null }),
    patch : async (objs) => await http({ url : objs.url ,method : 'POST', headers : objs.headers | {}, data : objs.data | null }),
    delete : async (objs) => await http({ url : objs.url ,method : 'POST', headers : objs.headers | {}, data : objs.data | null }),
}

/*
It is an example, we need to use http client of angular

how to use?
=> Request.get(....)
=> Request.post(....)
=> Request.put(....)
=> Request.patch(....)
=> Request.delete(....)
*/