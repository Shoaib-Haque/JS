const URLS = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3",
];

(async () => {
    for await(let url of URLS) {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.title);
    }
})();