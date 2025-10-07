import { useRouter } from "next/router";

const Setting = () => {
    const router = useRouter();
    return(
        <>
        <h1>This is setting page for {router.query.user}</h1>
        </>
    )
}

export default Setting;