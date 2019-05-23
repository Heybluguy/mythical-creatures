class Dragon {
  constructor(name, rider, color) {
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hungry = true;
    this.meal = 0;
  }

  eat() {
    this.meal++;
    return (this.meal === 3 ? this.hungry = false : this.hungry = true);
  }
}

module.exports = Dragon;