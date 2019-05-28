class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  stare(victim) {
    this.statues.push(victim);
    victim.stoned = true;

    if (this.statues.length === 4) {
      var firstMostVictim = this.statues.shift();
      firstMostVictim.stoned = false;
    };
  }
}

module.exports = Medusa;