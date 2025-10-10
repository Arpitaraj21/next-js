const UserPage = (props) => {
    return(
       <div>
            <p>this is a SSG</p>
            {props.data.users.map(user => <li key={user.id}>{user.firstName}</li>)}
        </div>
    )
};

export const getStaticProps = async() => {
    console.log('this is a static page');
    const data = await (await fetch('https://dummyjson.com/users')).json()
    return {
        props: {
            data,
        }
    }
}

export default UserPage;