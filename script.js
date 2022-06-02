var video = document.getElementById("video")
var play = document.getElementById("play")
var hide = document.getElementById("hide")

play.addEventListener("click", function(){

    video.style.display = "block"
    hide.style.display = "block"
    play.style.display = "none"
    video.play()

})

hide.addEventListener("click", function(){

    video.style.display = "none"
    play.style.display = "block"
    hide.style.display = "none"
    video.pause()
})
