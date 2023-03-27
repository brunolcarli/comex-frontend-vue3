import { uuid } from 'vue-uuid';
import moment from 'moment';

export interface Category {
  name: string,
  uuid: string,
  status: String,
  createdAt: String,
  id: number
}

export function createCategory(name: string) {
  return {
    name,
    uuid: uuid.v1(),
    status: "ATIVA",
    createdAt: moment(new Date()).format('YYYY-MM-DD')
  }
}

