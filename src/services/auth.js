import {auth,provider} from '../firebase'

export const signInWithGoogle= async () => {
    let user;
    await auth.signInWithPopup(provider)
    .then((res)=>{
        console.log(res.user);
        user=res.user;
    }).catch((error) => {
        console.log(error.message);
    });
    return user;
}

export const logOut = async () => {
    let signOut;
    await auth.signOut()
    .then((res) =>{
        signOut=true;
    } ).catch((error) => {
        console.log(error.message);
    });

    return signOut;
}