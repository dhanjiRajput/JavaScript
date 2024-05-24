const timer = (min) => {
    let hour = 0;
    let sec = 59;
    let temp = min;

    if (min > 60) {
        min = min % 60;
        temp -= min;
        hour = temp / 60;
    }

    let time = setInterval(() => {
        document.getElementById("show_data").innerHTML = ` ${hour}: ${min} : ${sec}`;

        sec -= 1;
        if (min == 0 && hour == 0 && sec == 0) {
            clearInterval(time);
            document.getElementById("show_data").innerHTML = "End";
        }

        if (min == 0 && sec == 0) {
            hour -= 1;
            min = 59;
        }

        if (sec == 0) {
            min -= 1;
            sec = 59;
        }
    }, 1000);
}




const handle = (e) => {
    e.preventDefault();
    let min = document.getElementById("minute").value
    timer(min);
};

document.getElementById("data").addEventListener("submit", handle);