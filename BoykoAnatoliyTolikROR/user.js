let user = {
  name: 'Tolik',
  age: '23',
  employment: 'undefined'
}

function BusinessCard(user) {
    this.name = user.name;
    this.employment = user.employment;
}

Object.defineProperty(user, "getInfo", {
  get: function() { return `Моё имя ${this.name}, мне ${this.age}, профессия ${this.profession}`; }
});

Object.defineProperty(user, 'businessCard', {
  get: function() { return new BusinessCard(this); }
});

user.willBe = function () {
  return this.age + 1;
}

console.log(user.businessCard);
