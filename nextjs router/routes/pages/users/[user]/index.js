import { useRouter } from "next/router";

import { useEffect } from "react";

const useUser = () => ({
    user: null,
    loading: false
});
const functionPage = () => {
    const router = useRouter();
    const user = useUser();

    console.log(router);

    useEffect(() => {
        if(user.user == null){
            router.replace('/');
        }
    },[router, user.user]);

    return(
        <>
        <h1>This is index page for {router.query.user}</h1>
        {/* string interpolation */}
        {/* <button onClick={e => router.push(`/users/${router.query.user}/settings`)}>Open Setting Page</button> */}

        {/* <button 
        onClick={(e) => router.push({
            pathname: '/users/[user]/settings',
            query: {user: 'swati'}
        })}
        >Open setting page</button> */}

        <button onClick={(e) => router.replace(`/users/${router.query.user}/settings`)}> replace route</button>
        <button onClick={e => router.push('/')}>Go to Home</button>
        </>
    )
}

export default functionPage;