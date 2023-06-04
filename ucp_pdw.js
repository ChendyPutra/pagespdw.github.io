function updateTime() {
    var now = new Date();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var day = days[now.getDay()];
    var date = now.getDate();
    var month = months[now.getMonth()];
    var year = now.getFullYear();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    var date = day + ', ' + date + ' ' + month + ' ' + year;
    var time = hour + ':' + minute + ':' + second + '' + 'WIB';
    

    if (hour < 12) {
        greeting = "Good morning Chendy";
    } else if (hour < 18) {
        greeting = "Good afternoon Chendy";
    } else {
        greeting = "Good evening Chendy";
    }

    document.getElementById("date").textContent = date;
    document.getElementById("time").textContent = time;
    document.getElementById("greeting").textContent = greeting;
}

setInterval(updateTime, 1000);