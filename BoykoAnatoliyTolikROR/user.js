function User(name, age, profession) {
  this.name = name;
  this.age = age;
  this.profession = profession;

  this.getInfo = function() {
    return "Моё имя -  " + this.name + ", мне " + this.age + ", профессия " + this.profession;
  };

  this.businessCard = function() {
    let businessCard = {
      name: this.name,
      age: this.age,
      profession: this.profession
    };
    return businessCard;
  };
}
