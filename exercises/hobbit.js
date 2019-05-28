class Hobbit {
  constructor(name) {
    this.name = name;
    this.disposition = 'homebody';
    this.age = 0;
    this.adult = false;
    this.old = false;
    this.isShort = true;
    this.hasRing = false;
    this.hasRingy();
  }

  celebrateBirthday() {
    this.age++;
    if (this.age >= 33) { this.adult = true };
    if (this.age >= 101) { this.old = true };
  }

  hasRingy() {
    if (this.name === 'Frodo') {this.hasRing = true };
  }
}

module.exports = Hobbit;