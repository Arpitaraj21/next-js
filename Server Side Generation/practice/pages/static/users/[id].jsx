const userPages = (props) => {
    console.log(props.data);

    return (
        <div>
            <h1>Profile page of</h1>
        </div>
    )
}
export const getStaticPaths = async () => {
    return {
        // paths: [{
        //     params: { id: '1' },
        // },
        // {
        //     params: { id: '2' }
        // }],
        paths: allUserIds.map((userId) => ({ params: {id: `${userId}` }})),
        fallback: false,
    }
}
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = await (await fetch(`https://dummyjson.com/users`)).json();
    const allUserIds = data.users.map(user => user.id);

    console.log('alluser Id', allUserIds);

    return {
        props: {
            data
        }
    }
}

export default userPages;