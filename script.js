document.addEventListener("keydown", function (e){
    let audio = document.createElement("AUDIO");
    let key = e.code;
    if (key == "KeyA") {
        audio.src = "white_keys/A.mp3"
        audio.play()
    } else if (key == "KeyS") {
        audio.src = "white_keys/S.mp3"
        audio.play()
    } else if (key == "KeyD") {
        audio.src = "white_keys/D.mp3"
        audio.play()
    } else if (key == "KeyF") {
        audio.src = "white_keys/F.mp3"
        audio.play()
    } else if (key == "KeyG") {
        audio.src = "white_keys/G.mp3"
        audio.play()
    }else if (key == "KeyH") {
        audio.src = "white_keys/H.mp3"
        audio.play()
    }else if (key == "KeyJ") {
        audio.src = "white_keys/J.mp3"
        audio.play()
    } else if (key == "KeyW"){
        audio.src = "black_keys/W.mp3"
        audio.play()
    } else if (key == "KeyE") {
        audio.src = "black_keys/E.mp3"
        audio.play()
    } else if (key == "KeyT") {
        audio.src = "black_keys/T.mp3"
        audio.play()
    } else if (key == "KeyY") {
        audio.src = "black_keys/Y.mp3"
        audio.play()
    } else if (key == "KeyU"){
        audio.src = "black_keys/U.mp3"
        audio.play()
    } else {
        console.log("Warning!")
    }
})

