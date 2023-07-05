document.addEventListener("DOMContentLoaded", () => console.log('All set!'))

function fetchData(){
    fetch('https://xivapi.com/Action/127')
    .then((resp) => resp.json())
    .then((data) => console.log(data))
}
