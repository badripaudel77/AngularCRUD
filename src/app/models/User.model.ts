interface UserModel {
  id: number,
  name: string,
  username: string,
  email: string,
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
