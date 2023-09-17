const selectTime = document.getElementById('time');
const selectDate = document.getElementById('date');

// Function
const updateTime = () => {
    const getTime = new Date();
    let hour = getTime.getHours();
    let minute = getTime.getMinutes();
    let second = getTime.getSeconds();

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let day = days[getTime.getDay()];
    let date = getTime.getDate();
    let month = months[getTime.getMonth()];
    let year = getTime.getFullYear();


    selectTime.textContent = `${hour} : ${minute} : ${second}`;
    selectDate.textContent = `${day}, ${date} ${month} ${year}`
}

setInterval(updateTime, 1000);
