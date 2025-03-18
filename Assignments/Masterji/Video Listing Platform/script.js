const url = "https://api.freeapi.app/api/v1/public/youtube/videos?page=1&limit=10&query=javascript&sortBy=keep%2520one%253A%2520mostLiked%2520%257C%2520mostViewed%2520%257C%2520latest%2520%257C%2520oldest";
const options = { method: "GET", headers: { accept: "application/json" } };

const factPara = document.getElementById('fact');
const btn = document.getElementById('btn');

// function getInfo() {
//     fetch(url).then((response) => {
//         console.log(response)
//         return response.json();
//     }).then((data) => {
//         console.log(data);
//         factPara.innerText = data.data.data[0].kind;
//     })
// }

const getInfo = async () => {
  console.log("getting data...")
  let response = await fetch(url);
  console.log(response)
  let data = await response.json();
  console.log(data.data.data[0].kind);

  factPara.innerText = data.data.data[0].kind;
};


btn.addEventListener('click', () => {
    getInfo();
})
