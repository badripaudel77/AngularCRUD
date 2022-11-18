interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: Address
}

interface Address {
  street: string;
  city: string,
  suite: string,
  zipcode: string,
  geo: {
    lat: string,
    lng: string
  }
}

export {User, Address}
