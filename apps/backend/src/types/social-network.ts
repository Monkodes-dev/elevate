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

export interface Comment{
    content:string;
    authorId:string;
    postId:string;
    parentId:string|null;
    kinship:string|null;
}