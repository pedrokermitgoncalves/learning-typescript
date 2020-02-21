import "reflect-metadata";
//import { plainToClass } from "class-transformer";
import { Product } from "./product.model";
import { validate } from "class-validator";

const newProd = new Product("", -5);

validate(newProd).then(errors => {
  if (errors.length > 0) {
    console.log(errors);
  } else {
    console.log(newProd.getInformatioon());
  }
});

// const products = [
//   { title: "Carpet", price: 29.99 },
//   { title: "Book", price: 10.99 }
// ];

// const p1 = new Product("book", 15.99);
// console.log(p1.getInformatioon());

//const loadedProducts = plainToClass(Product, products);
// for (const product of loadedProducts) {
//   console.log(product.getInformatioon());
// }
