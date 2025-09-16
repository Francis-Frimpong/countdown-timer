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
    this.timer = setInterval(() => {
      if (
        this.day == 0 &&
        this.hour == 0 &&
        this.minute == 0 &&
        this.second == 0
      ) {
        clearInterval(this.timer);
        return;
      }

      if (this.second > 0) {
        this.second--;
      } else {
        if (this.minute > 0) {
          this.minute--;
          this.second = 59;
        } else if (this.hour > 0) {
          this.hour--;
          this.minute = 59;
          this.second = 59;
        } else if (this.day > 0) {
          this.day--;
          this.hour = 23;
          this.minute = 59;
          this.second = 59;
        }
      }

      this.days.textContent = this.day < 10 ? "0" + this.day : this.day;
      this.hours.textContent = this.hour < 10 ? "0" + this.hour : this.hour;
      this.minutes.textContent =
        this.minute < 10 ? "0" + this.minute : this.minute;
      this.seconds.textContent =
        this.second < 10 ? "0" + this.second : this.second;
    }, 1000);
    // update UI
  }
}

const timer = new CountDownTimer();
timer.countDown();
