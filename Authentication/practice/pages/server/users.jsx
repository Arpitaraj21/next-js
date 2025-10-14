import styles from '../../styles/Users.module.css'
import Image from 'next/image';
import codeImage from '../../public/image.png'
import {useSession, signIn, signOut} from 'next-auth/react'
const UserPage = (props) => {

    const myImageLoader = ({src, width, quality}) => {
        return `https://images.pixel.com/photos/270348/pexels-photo-270349.jpeg?auto=compress&cs=tinysgb&w=${width}&h=${height}&dpr=1`
    }
    console.log(props);
    const session = useSession();

    console.log('Session', session);

    if(session.data === null){
        return(
            <button onClick={signIn}>Login</button>
        )
    }
    return(
        <div className={styles.p}>
            {/* <p >this is a SSR</p>
            {props.data.users.map(user => <li key={user.id}>{user.firstName}</li>)} */}
            {/* <Image
            loader={myImageLoader}
             src={codeImage} alt="Code Image" width={300} height={300}/> */}

             <h1>Authentication</h1>
             <h1>hello {session?.data?.user?.name}</h1>
             <button onClick={signOut}>Logout</button>
        </div>


    )
}

export const getServerSideProps = async () => {
    console.log('A task is going on in server');
    const data = await (await fetch('https://dummyjson.com/users')).json()
    return {
        props: {
            data,
        }
    }
}

export default UserPage;