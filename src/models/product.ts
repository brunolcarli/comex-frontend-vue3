import { uuid } from 'vue-uuid'; 
import moment from 'moment';

export interface Product {
   name: string,
   description: String,
   price: Number,
   qtd: Number,
   category: String,
   img: String,
   uuid: String,
   createdAt: String;

}

export function createProduct(
  name: string,
  description: String,
  price: Number,
  qtd: Number,
  category: String): Product {
  return {
    name,
    description,
    price,
    qtd,
    category,
    img: "assets/img/product8.jpg",
    uuid: uuid.v1(),
    createdAt: moment(new Date()).format('YYYY-MM-DD')
  }
}


