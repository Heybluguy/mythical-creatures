class Wizard {
  constructor(data) {
    this.name = data.name;
    this.bearded = (data.bearded === undefined ? data.bearded = true : data.bearded = false);
    this.isRested = data.isRested = true;
    this.spellsCasted = 0;
  }

  incantation(phrase) {
    return phrase.toUpperCase();
  }

  cast() {
    if (this.isRested === false) {
      return 'I SHALL NOT CAST!'
    }

    this.spellsCasted++;
    if (this.spellsCasted >= 3) {this.isRested = false}
    return 'MAGIC BULLET'
  }
}

module.exports = Wizard;