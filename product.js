class Produto {
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.inStock = 0;
    }

    addToStock(quantity) {
        this.inStock += quantity;

    }

    calculateDiscount(discountPercentage) {
        const discount = this.price * (discountPercentage / 100);
        return this.price - discount;
    }
}

const produto1 = new Produto("Smartphone", "Um smartphone moderno", 2000);

// Adicionando 10 unidades ao estoque
produto1.addToStock(10);

// Calculando o preço com desconto
const precoComDesconto = produto1.calculateDiscount(10);

console.log(`Nome do produto: ${produto1.name}`);
console.log(`Quantidade em estoque: ${produto1.inStock}`);
console.log(`Preço com 10% de desconto: R$ ${precoComDesconto.toFixed(2)}`);