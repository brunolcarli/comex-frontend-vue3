import { uuid } from 'vue-uuid'; 
import moment from 'moment';

export class Category {
    public constructor(
      private _name: string,
      private _uuid: string = uuid.v1(),
      private _status: String = "ATIVA",
      private _createdAt: String = moment(new Date()).format('YYYY-MM-DD')
    ) { }
  
    public get uuid(): string {
      return this._uuid;
    }
  
    public get name(): string {
      return this._name;
    }
  
    public get status(): String {
      return this._status;
    }
  
    public get createdAt(): String {
      return this._createdAt;
    }

  }

