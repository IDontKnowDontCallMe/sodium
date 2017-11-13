export function addPostCommentApi(param) {
    console.log('api:addPostCommentApi')
    console.log(param)

    return [
        {
            postId: 1,
            authorId: 1,
            authorName: 'Jack',
            toId: -1,
            toName: null,
            content: '说的很有道理',
            createdAt: '2017-11-12 16:12'
        },
        {
            postId: 2,
            authorId: 2,
            authorName: 'Tom',
            toId: 1,
            toName: 'Jack',
            content: '反对',
            createdAt: '2017-11-12 17:12'
        },
        {
            postId: 3,
            authorId: 1,
            authorName: 'Jack',
            toId: 2,
            toName: 'Tom',
            content: '反对啥?',
            createdAt: '2017-11-13 16:12'
        },
        {
            postId: 4,
            authorId: 3,
            authorName: 'Tony',
            toId: -1,
            toName: null,
            content: '楼上怎么了?',
            createdAt: '2017-11-12 16:12'
        },
        {
            postId: 5,
            authorId: 4,
            authorName: 'Jacky',
            toId: -1,
            toName: null,
            content: '不明白',
            createdAt: '2017-11-12 16:12'
        },
        {
            postId: 5,
            authorId: 4,
            authorName: 'Jacky',
            toId: -1,
            toName: null,
            content: '新的回帖',
            createdAt: '2017-11-12 16:12'
        },
    ];
}