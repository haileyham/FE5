function calendar(newYear, newMonth) {
  // 1. 무슨 요일에 시작하는지 알아야 한다!
  const time = new Date(newYear, newMonth - 1, 1);

  // 2. 해당 월에 날이 며칠이나 있는지!
  // const timeLength = 32 - new Date(newYear, newMonth - 1, 32).getDate();
  const timeLength = new Date(newYear, newMonth, 0).getDate();

  let year = time.getFullYear(),
      month = time.getMonth(),
      date = time.getDate(),
      day = time.getDay();

  const captionYear = document.querySelector('.year'),
      captionMonth = document.querySelector('.month'),
      timeEl = document.querySelector('time'),
      days = document.querySelectorAll('tr td');


  for (let i = day; i < day + timeLength; i++) {
      days[i].textContent = date++;
  }

  captionYear.textContent = year;
  captionMonth.textContent = month + 1;
  timeEl.dateTime = `${year}-${month + 1}`;
}


let year = new Date().getFullYear(),
  month = new Date().getMonth() + 1;

calendar(year, month);