/* eslint-disable no-alert */
function randomise(value) {
  return Math.floor(Math.random() * (value + 1));
}
let goodClick = 0;
let appGoblin = -1;

const startGame = () => {
  const hole = document.getElementsByClassName('hole');
  const points = document.getElementById('points');
  const godlins = document.getElementById('godlins');

  const img = '<img src="./img/goblin.png">';
  const max = hole.length - 1;
  let index;
  let last;
  const Intervals = setInterval(() => {
    index = randomise(max);
    if (index === last) {
      index += 1;
      if (index > max) {
        index = 0;
      }
    }
    hole.item(index).innerHTML = img;
    hole.item(last).innerHTML = ' ';
    last = index;

    appGoblin++;
    // console.log(appGoblin)
    // console.log(godlins.innerText)
    godlins.innerText = `Пропущеных гоблинов ${appGoblin}`;

    if (appGoblin === 5) {
      alert('Игра окончена');
      clearInterval(Intervals);
      hole.item(last).innerHTML = ' ';
    }
  }, 1000);

  document.addEventListener('click', (event) => {
    const eventTarget = event.target;
    // console.log(eventTarget)

    if (eventTarget.closest('img')) {
      // console.log('Попал')
      goodClick++;
      appGoblin--;
      // console.log(goodClick)
      points.innerText = `Баллов ${goodClick}`;
      hole.item(last).innerHTML = ' ';
    }
  });
};

startGame();
