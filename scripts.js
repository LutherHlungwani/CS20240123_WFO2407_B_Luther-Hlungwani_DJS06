// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

console.log(products.forEach(product => console.log(product.product)));

console.log(products.filter(product => product.product.length <= 5));

console.log(
  products
  .filter(product => product.price && !isNaN(product.price))
  .map(product => Number(product.price))
  .reduce((total, price) => toal + price, 0)
);

console.log(product.reduce((acc, product) => acc + product.product, ''));

console.log(
  products
  .filter(product => product.price && !isNaN(product.price))
  .map(product => ({ ...product, price: Number(product.price) }))
  .reduce(
    (acc, product) => ({
      highest: Math.max(acc.highest, product.price),
      lowest: Math.min(acc.lowest, product.price)
    }),
    { highest: -Infinity, lowest: Infinity}
  )
)

console.log(
  Object.entries(products).reduce((acc, [_, {product, price}]) =>{
    acc.push({name: product, cost: price});
    return acc;
  }, [])
);