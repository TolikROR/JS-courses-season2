function Car(brand, fuelTank, ownerFullName) {
  this.brand = brand;
  this.fuelTank = fuelTank;
  this.ownerFullName = fullName(ownerFullName);

  function fullName(receivedName) {
    receivedName = receivedName.trim();
    const arrayForName = receivedName.split(' ');

    let result = arrayForName.length == 2 ? receivedName : "John Doe";

    return result;
  }

  this.getBrand = function() {
    return this.brand;
  }

  this.getFuelTank = function() {
    return this.fuelTank;
  }

  this.getOwnerFullName = function() {
    return this.ownerFullName;
  }

  this.getFirstNamePart = function() {
    return this.ownerFullName.split(' ')[0];
  }

  this.getLastNamePart = function() {
    return this.ownerFullName.split(' ')[1];
  }
}
