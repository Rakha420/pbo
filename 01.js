class Motor {
constructor(merk, warna) {
this.merk = merk;
this.warna = warna;
}
info() {
return `Motor Ini Adalah ${this.merk} Berwarna ${this.warna}.`;
}
}
const beat = new Motor("Honda Beat", "Hitam");
console.log(beat.info());
