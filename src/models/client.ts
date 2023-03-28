import { uuid } from 'vue-uuid';


export interface Client {
    name: string,
    cpf: string,
    birth: Date,
    email: string,
    contact: string,
    address: Address,
    uuid: string
}

export function createClient(
    name: string,
    cpf: string,
    birth: Date,
    email: string,
    contact: string

): Client {
    return {
        name,
        cpf,
        birth,
        email,
        contact,
        address: createAddress('','','','','','',''),
        uuid: uuid.v1(),

    }
}

export interface Address {
    cep: string,
    address: string,
    number: string,
    complement: string,
    district: string,
    city: string,
    state: string
}

export function createAddress(
    cep: string,
    address: string,
    number: string,
    complement: string,
    district: string,
    city: string,
    state: string
): Address {
    return {
        cep,
        address,
        number,
        complement,
        district,
        city,
        state 

    }
}

