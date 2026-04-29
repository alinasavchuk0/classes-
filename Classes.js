// 1. Створюємо базовий клас для медіа-ресурсів
class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  // Геттери для доступу до приватних властивостей
  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  // Метод для зміни статусу (взято/в наявності)
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  // Метод для розрахунку середнього рейтингу
  getAverageRating() {
    if (this._ratings.length === 0) return 0;
    
    let ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    return (ratingsSum / this._ratings.length).toFixed(1);
  }

  // Метод для додавання нового рейтингу
  addRating(value) {
    if (value >= 1 && value <= 5) {
      this._ratings.push(value);
    } else {
      console.log("Рейтинг має бути від 1 до 5");
    }
  }
}

// 2. Створюємо підклас Book, який успадковує Media
class Book extends Media {
  constructor(author, title, pages) {
    super(title); // Викликаємо конструктор батьківського класу
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

// --- Перевірка роботи коду ---

const myHistoryBook = new Book('Юваль Ной Харарі', 'Sapiens', 512);

// Змінюємо статус
myHistoryBook.toggleCheckOutStatus();
console.log(`Чи видана книга: ${myHistoryBook.isCheckedOut}`); // true

// Додаємо рейтинги
myHistoryBook.addRating(5);
myHistoryBook.addRating(4);
myHistoryBook.addRating(5);

console.log(`Середній рейтинг: ${myHistoryBook.getAverageRating()}`); // 4.7
console.log(`Автор: ${myHistoryBook.author}`);