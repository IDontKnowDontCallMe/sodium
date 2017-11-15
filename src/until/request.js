


export async function request(url, option) {

    if(option === undefined || option === null){
        option = {};
    }
    if(option.headers === undefined || option.headers===null){
        option.headers = new Headers();
    }

    option['credentials'] = 'include';
    option['mode'] = 'cors';
    //option.headers.append('Content-Type', 'multipart/form-data;------WebKitFormBoundaryzqIrxCNXAU7mKnUB');

    return fetch(url, option)
        .then(response => checkStatus(response))
        .then(response => parse(response))
        .catch(e => handleError(e));
        

}

function checkStatus(response) {



    if ( response.status!==undefined && response.status >= 200 && response.status < 300) {
        return response;
    }
    else {
        throw {
            message: 'status error!!!'
        };
    }

}

function parse( response ) {

    if(response===undefined || response===null){
        return {
            success: false,
            message: 'empty response'
        }
    }

    return response.json();

}

function handleError(e) {
    console.log(e)
}