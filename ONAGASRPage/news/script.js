async function fetchHtmlAsText(url) {
    return await (await fetch(url)).text();

}

async function GetNews_info(id) {
    document.getElementById("News").innerHTML = await fetchHtmlAsText("News/news_${id}.html");
}