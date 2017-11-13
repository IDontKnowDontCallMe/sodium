
export async function loginApi(param) {

    console.log(param);


    return {
        userId: 1,
        userName: 'firstUser',
    }

}

export async function cancelFollowingApi(param) {
    console.log('api:cancelFollowingApi')
    console.log(param)


    return true;

}