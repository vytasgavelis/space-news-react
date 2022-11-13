export default interface Article
    // extends Response
{
    id: number,
    title: string,
    url: string,
    imageUrl: string,
    summary: string,
    publishedAt: string, //TODO change this to date
    updatedAt: string,
}

// export interface Response {
//     statusCode: number,
//     message: string,
// }