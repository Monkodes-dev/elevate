export interface PostRequest{
    content:string;
    authorId:string;
    tags:string[];
    feedId:string|null;
}

export interface Like{
    postId:string;
    userId:string;
}