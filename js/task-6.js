const input = document.querySelector('#controls input'); // Вибираємо інпут
const createButton = document.querySelector('[data-create]'); // Вибираємо кнопку "Create"
const destroyButton = document.querySelector('[data-destroy]'); // Вибираємо кнопку "Destroy"
const boxesContainer = document.querySelector('#boxes'); // Вибираємо контейнер для квадратів

createButton.addEventListener("click", () => {
  const amount = Number(input.value);
  if(amount< 1 || amount > 100){
    alert("Please enter a number between 1 and 100");
    return; 
  }

  createBoxes(amount);
  input.value='';

});
destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount){
  destroyBoxes();

  const boxes = []; // Масив для зберігання нових div елементів
    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div'); // Створюємо новий div
        const size = 30 + i * 10; // Визначаємо розміри квадратів
        box.style.width = `${size}px`; // Задаємо ширину
        box.style.height = `${size}px`; // Задаємо висоту
        box.style.backgroundColor = getRandomHexColor(); // Задаємо випадковий колір
        boxes.push(box); // Додаємо div у масив
    }
boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = ''; // Очищаємо вміст контейнера
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
