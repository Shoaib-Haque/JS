/* Asynchronous iteration in JavaScript allows you to handle asynchronous data sources in a clean and structured way. 
The for await...of loop is a modern tool designed for iterating over data from asynchronous sources, 
such as Promises, async generators, or any object implementing the AsyncIterable protocol. */

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
