interface UserModel {
  id: number,
  name: string,
  username: string,
  email: string,
  highlighted: boolean,
  address: AddressModel
}

interface AddressModel {
  street: string;
  city: string,
  suite: string,
  zipcode: string,
  geo: {
    lat: string,
    lng: string
  }
}

export {UserModel, AddressModel}
