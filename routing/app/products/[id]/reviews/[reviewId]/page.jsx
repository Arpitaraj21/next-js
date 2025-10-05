export default async function ProductReviw({params}) {
    const {id, reviewId} = await params;
    return(
        <>
        <h1>review {reviewId} for product {id} </h1>
        </>
    )
}