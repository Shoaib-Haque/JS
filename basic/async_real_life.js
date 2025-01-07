const getUser = () => {
    const user = {'id' : 100, 'name' : "User1"};
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(user);
        }, 2000);
    });
}

const getPosts = (user_id) => {
    const posts = {
        'post1' : {'id' : 10001, 'post' : "Post One", 'user_id' : 100},
        'post2' : {'id' : 10002, 'post' : "Post Two", 'user_id' : 200},
        'post3' : {'id' : 10003, 'post' : "Post Three", 'user_id' : 100},
        'post4' : {'id' : 10004, 'post' : "Post Four", 'user_id' : 100},
    };
    let filteredPosts = [];
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for(let key in posts) {
                if(posts[key].user_id == user_id) {
                    filteredPosts.push(posts[key]);
                }
            }
            resolve(filteredPosts);
        }, 3000);
    });
}

const getComments = (post_id) => {
    const comments = {
        'comment1' : {'id' : 20001, 'comment' : "Comment One", 'post_id' : 10001},
        'comment2' : {'id' : 20002, 'comment' : "Comment Two", 'post_id' : 10002},
        'comment3' : {'id' : 20003, 'comment' : "Comment Three", 'post_id' : 10001},
        'comment4' : {'id' : 20004, 'comment' : "Comment Four", 'post_id' : 10003},
        'comment5' : {'id' : 20005, 'comment' : "Comment Five", 'post_id' : 10001},
    };
    let filteredComments = [];
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for(let key in comments) {
                if(comments[key].post_id == post_id) {
                    filteredComments.push(comments[key]);
                }
            }
            if(filteredComments.length) {
                resolve(filteredComments);
            } else {
                reject(`No comment!`);
            }
        }, 3000)
    });
};

const showData = async () => {
    const user = await getUser();
    const user_id = user.id;
    console.log("User");
    console.log(user);

    let posts = await getPosts(user_id);

    for(let post of posts) {
        console.log("");
        console.log("Post");
        console.log(post);
        try {
            let comments = await getComments(post.id);
            console.log("Comments");
            console.log(comments);
        } catch(err) {
            console.log("Comments");
            console.log(err);
        }
    }
};

showData();