import { uuid } from 'vue-uuid'; 
import moment from 'moment';

export interface Product {
   name: string,
   description: string,
   price: Number,
   qtd: Number,
   category: string,
   img: string,
   uuid: string,
   createdAt: string;

}

export function createProduct(
  name: string,
  description: string,
  price: Number,
  qtd: Number,
  category: string): Product {
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


