function scrollToNews() {
    console.log("scrollToNews");
    const news = document.getElementById("news-jump");

    console.log(news.offsetTop-10)
    console.log(news)

    window.scrollTo({
        top: news.offsetTop-22,
    });
    console.log("test")
}
