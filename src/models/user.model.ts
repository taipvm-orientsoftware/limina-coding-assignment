export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  dataOfBirth: string;
  gender: 'Male' | 'Female';
  address: string;
  state: string;
  country: string;
  zipCode: number;
  job: string;
  company: string;
  investment: string;
  product: string;
}

export default class User implements IUser {
  public id: number;
  public firstName: string;
  public lastName: string;
  public email: string;
  public phoneNumber: string;
  public dataOfBirth: string;
  public gender: 'Male' | 'Female';
  public address: string;
  public state: string;
  public country: string;
  public zipCode: number;
  public job: string;
  public company: string;
  public investment: string;
  public product: string;

  constructor(user: IUser) {
    this.id = user.id;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.phoneNumber = user.phoneNumber;
    this.dataOfBirth = user.dataOfBirth;
    this.gender = user.gender;
    this.address = user.address;
    this.state = user.state;
    this.country = user.country;
    this.zipCode = user.zipCode;
    this.job = user.job;
    this.company = user.company;
    this.investment = user.investment;
    this.product = user.product;
  }
}
