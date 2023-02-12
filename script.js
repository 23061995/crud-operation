const form = document.getElementById("form");
const btn = document.getElementById("btn");
const inputText = document.getElementById("text");
const inputName = document.getElementById("name");
const mainDiv = document.getElementById("main");

form.addEventListener("submit", (e) => {
    e.preventDefault();
});

//get request 

  function getDataFromServer() {
    axios
    .get('https://jsonplaceholder.typicode.com/users/')
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
   
}
getDataFromServer()

 


function mapListToHTML(list) {
    const postList = list.reduce((htmlList, item) => {
        return (
            htmlList + 
            `
            <h3 class = 'title'>${item.title}</h3>
            <p class = 'text'>${item.body}</p>
            `
        )
    }, "");
    return postList;
}

//post request 
function addPost(e) {
    e.preventDefault();
    axios
    .post('https://jsonplaceholder.typicode.com/users/')
    .then(res => mapListToHTML(res))
    .catch(err => console.error(err));
    console.log("###",result)
    getDataFromServer();
}
form.addEventListener('submit', addPost);
