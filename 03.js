class BankAccount {
#saldo; // Properti private
constructor(nama, saldoAwal) {
this.nama = nama;
this.#saldo = saldoAwal;
}
getSaldo() {
return `Saldo ${this.nama} Adalah Rp${this.#saldo}`;
}
deposit(jumlah) {
this.#saldo += jumlah;
}
}

const akun = new BankAccount("Alice", 200000);
akun.nama='Rakha';
akun.deposit(300000);

console.log(akun.getSaldo());
akun.deposit(500000);
console.log(akun.getSaldo());
// console.log(akun.#saldo); // Akan error karena saldo bersifat
