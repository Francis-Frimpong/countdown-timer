class CountDownTimer {
  constructor() {
    this.days = document.getElementById("days");
    this.hours = document.getElementById("hours");
    this.minutes = document.getElementById("minutes");
    this.seconds = document.getElementById("seconds");

    this.timer;

    this.day = 5;
    this.days.textContent = "0".concat(this.day);
    this.hour = 24;
    this.hours.textContent = this.hour;

    this.minute = 0;
    this.minutes.textContent = "0".concat(this.minute);
    this.second = 0;
    this.seconds.textContent = "0".concat(this.second);
  }

  countDown() {
    this.timer = setInterval(() => {});
  }
}

const timer = new CountDownTimer();
