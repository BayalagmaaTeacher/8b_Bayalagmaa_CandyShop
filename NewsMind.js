let newsList = [];
function DisplayNews() {
  let newsView = document.getElementById("newsList");
  let newDiv = "";
  for (let i = 0; i < newsList.length; i++) {
    newDiv += "<p>" + (i + 1) + ". " + newsList[i].title + "</p>" + "<br>";
    newDiv += "<p>" + newsList[i].body + "</p>" + "<br>";
  }
  newsView.innerHTML = newDiv;
}
function AddNews() {
  let new_title = document.getElementById("news_title").value;
  let new_body = document.getElementById("news_body").value;

  let newNews = {
    title: new_title,
    body: new_body,
  };
  console.log(newNews);
  newsList.push(newNews);
  DisplayNews();
}
