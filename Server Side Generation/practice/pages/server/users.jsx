import styles from '../../styles/Users.module.css'
import Image from 'next/image';
import codeImage from '../../public/image.png'
const UserPage = (props) => {

    const myImageLoader = ({src, width, quality}) => {
        return `https://images.pixel.com/photos/270348/pexels-photo-270349.jpeg?auto=compress&cs=tinysgb&w=${width}&h=${height}&dpr=1`
    }
    console.log(props);
    return(
        <div className={styles.p}>
            <p >this is a SSR</p>
            {props.data.users.map(user => <li key={user.id}>{user.firstName}</li>)}
            <Image
            loader={myImageLoader}
             src={codeImage} alt="Code Image" width={300} height={300}/>
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