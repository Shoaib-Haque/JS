const BASEURL = "https://cat-fact.herokuapp.com";


const promise = fetch(`${BASEURL}/facts`);
promise
    .then((res) => {
        console.log(res); // json format
        return res.json(); // This is also an async function // converting the res to readable data
    })
    .then((data) => { // data is coming from the first then
        // console.log(data);
        for(let val of data) {
            console.log(val.text);
        }
    })
    .catch((err) => {
        console.log(`error ${err}`);
    })