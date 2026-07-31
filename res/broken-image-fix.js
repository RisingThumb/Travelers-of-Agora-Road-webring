const images = document.querySelectorAll("ol#icons > li > img")

for (const image of images) {
    image.addEventListener("error", () => {
        image.src = "img/idied.png"
        image.alt = "This site is offline"
    })
}
console.log(images)