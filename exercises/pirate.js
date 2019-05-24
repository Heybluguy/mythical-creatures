class Pirate {
  constructor(name, job = "Scallywag") {
    this.name = name;
    this.job = job;
    this.cursed = false;
    this.heinousAct = 0;
    this.booty = 0;
  }

  commitHeinousAct() {
    this.heinousAct++;
    (this.heinousAct >= 3 ? this.cursed = true : this.cursed = false);
  }

  robShip() {
    this.booty = 100;
    return 'YAARRR!';
  }
}

module.exports = Pirate;