let playlist = [
    {
        name: "Aapke Pyaar Main Hum Sawarne Lagay",
        url: "./play_list/Aapke Pyaar Main Hum Sawarne Lagay Nehaal Naseem-BarmanMusic.Com.mp3",
        img: "https://i0.wp.com/lyricshot.in/wp-content/uploads/2024/01/images-19-2.jpeg?fit=600%2C315&ssl=1",
    },
    {
        name: "Hamari Shaadi Mein",
        url: "./play_list/Hamari Shaadi Mein-BarmanMusic.Com (1).mp3",
        img: "https://i.ytimg.com/vi/DLUa69P6MMA/mqdefault.jpg",
    },
    {
        name: "Hamari Shaadi Mein",
        url: "./play_list/Hamari Shaadi Mein-BarmanMusic.Com.mp3",
        img: "https://i.ytimg.com/vi/jV5e3NmPC44/hqdefault.jpg",
    },
    {
        name: "Hum Naa Rahein Hum",
        url: "./play_list/Hum Naa Rahein Hum (Remix)-Benny Dayal-BarmanMusic.Com.mp3",
        img: "https://origin-staticv2.sonyliv.com/videoasset_images/hrnrh_landscape_thumb.jpg",
    },
    {
        name: "Intejar Mein Tere Khade Hum Yaha",
        url: "./play_list/Intejar Mein Tere Khade Hum Yaha Arijit Singh-BarmanMusic.Com.mp3",
        img: "https://harmonyshayri.com/wp-content/uploads/2019/09/IMG_20190913_084621.jpg",
    },
    {
        name: "Jaage Tere Waste Soniye Yaad Sataye Teri",
        url: "./play_list/Jaage Tere Waste Soniye Yaad Sataye Teri Himesh Reshammiya-BarmanMusic.Com.mp3",
        img: "https://i.ytimg.com/vi/3f8tFtcuIkI/maxresdefault.jpg",
    },
    {
        name: "Paisa Deke Tera Ni Me",
        url: "./play_list/Paisa Deke Tera Ni Me Diljit Dosanjh-BarmanMusic.Com.mp3",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAWm6_0COsuaGssg8HV4DSNQMEDjimM1UNVw&s",
    },
    {
        name: "Saiyan Dil Me Aana Re Aake Phir Na Jana Re",
        url: "./play_list/Saiyan Dil Me Aana Re Aake Phir Na Jana Re Shruti Rane-BarmanMusic.Com.mp3",
        img: "https://i.ytimg.com/vi/F3hbtKZbfgI/maxresdefault.jpg",
    },
    {
        name: "Sawan Aaya Hai",
        url: "./play_list/Sawan Aaya Hai (Remix)-Arijit Sing-BarmanMusic.Com.mp3",
        img: "https://i.ytimg.com/vi/_qcKoppvCvo/maxresdefault.jpg",
    },
]

const music = (index) => {

    document.getElementById("audio_image").innerHTML = "";
    document.getElementById("audio_control").innerHTML = "";

    let image = document.createElement("img");
    image.src = playlist[index].img;
    document.getElementById("audio_image").append(image);
    image.setAttribute("id", "a_image");

    let control = document.createElement("audio");
    control.src = playlist[index].url;
    control.controls = true;
    control.play();
    control.setAttribute("id", "audio");

    let play = document.createElement("button");
    play.innerHTML = "Play";
    play.addEventListener("click", () => {
        control.play();
    })
    play.setAttribute("class", "btnn");

    let pause = document.createElement("button");
    pause.innerHTML = "Pause";
    pause.addEventListener("click", () => {
        control.pause();
    })
    pause.setAttribute("class", "btnn");

    let previous = document.createElement("button");
    previous.innerHTML = "Previous";
    previous.addEventListener("click", () => {
        index--;
        image.src = playlist[index].img;
        control.src = playlist[index].url;
        control.controls = true;
        control.play();
    })
    previous.setAttribute("class", "btnn");

    let next = document.createElement("button");
    next.innerHTML = "Next";
    next.addEventListener("click", () => {
        index++;
        image.src = playlist[index].img;
        control.src = playlist[index].url;
        control.controls = true;
        control.play();
    })
    next.setAttribute("class", "btnn");

    let btn_div = document.createElement("div");
    btn_div.append(play, pause, previous, next);
    btn_div.setAttribute("class", "mt-4")

    document.getElementById("audio_control").append(control, btn_div);
}

playlist.map((item, i) => {
    let name = document.createElement("div");
    name.innerHTML = `${item.name}..........<img src="https://static.wixstatic.com/media/5a2d7b_f676415472ab425a8345b94ed3f36c06.gif" height="20px" width="40px">`;
    name.setAttribute("class","ps-3")
    name.addEventListener("click", () => {
        music(i);
    })

    let img=document.createElement("img");
    img.src=item.img;
    img.setAttribute("id","img_list");

    let box=document.createElement("div");
    box.append(name,img);
    box.setAttribute("id","music_name");
    document.getElementById("audio_list").append(box);
})