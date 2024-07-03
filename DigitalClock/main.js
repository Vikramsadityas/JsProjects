function updateClock() {
    const clock = document.querySelector('#clock');
    let date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    // let minsec=date.getMilliseconds()
    const digitaldate = `${hours}:${min}:${sec < 10 ? `0${sec}` : `${sec}`}`;
    clock.innerHTML = `${digitaldate}`;
  }
  setInterval(updateClock, 1000);
  