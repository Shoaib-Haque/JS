const BASEURL = "https://cat-fact.herokuapp.com";

const getData = async () => {
    let response = await fetch(`${BASEURL}/facts`); // JSON format
    // console.log(response);
    let data = await response.json(); // make it readable
    // console.log(data);
    for(let val of data) {
        console.log(val.text);
    }
};

getData();
