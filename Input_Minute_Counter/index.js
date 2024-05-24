const timer = (min) => {

    let hour = 0;
    let sec = 0;
    let temp = min;
    let min1 = 0;
    let hour1 = 0;

    if (min > 60) {
        min = min % 60;
        temp -= min;
        hour = temp / 60;
    }

    let time = setInterval(() => {
        document.getElementById("show_data").innerHTML = ` ${hour1}: ${min1} : ${sec}`;

        sec += 1;
        if (min1 == min && sec == 59 && hour1 == hour) {
            clearInterval(time);
            document.getElementById("show_data").innerHTML = "End";
        }

        if (min1 == 59 && sec == 59) {
            hour1 += 1;
            min1 = 0;
        }
        if (sec == 59) {
            min1 += 1;
            sec = 0;
        }
    }, 1000);
}

const handle = (e) => {
    e.preventDefault();
    let min = document.getElementById("minute").value
    timer(min);
};

document.getElementById("data").addEventListener("submit", handle);