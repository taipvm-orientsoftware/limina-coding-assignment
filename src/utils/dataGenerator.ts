import {
  ADDRESS,
  COMPANY,
  COUNTRY,
  DATE_OF_BIRTH,
  EMAIL,
  FIRST_NAME,
  GENDER,
  INVESTMENT,
  JOB_TYPE,
  LAST_NAME,
  PHONE_NUMBER,
  PRODUCT,
  STATE,
  ZIP_CODE
} from '../data';
import User, { IUser } from '../models/user.model';

export function generateUsers(total: number = 10000) {
  const users = [];
  const randomData = (length: number) => Math.floor(Math.random() * length);

  for (let i = 0; i < total; i += 1) {
    users.push(
      new User({
        id: i + 1,
        firstName: FIRST_NAME[randomData(FIRST_NAME.length)],
        lastName: LAST_NAME[randomData(LAST_NAME.length)],
        email: EMAIL[randomData(EMAIL.length)],
        phoneNumber: PHONE_NUMBER[randomData(PHONE_NUMBER.length)],
        dataOfBirth: DATE_OF_BIRTH[randomData(DATE_OF_BIRTH.length)],
        gender: GENDER[randomData(GENDER.length)] as IUser['gender'],
        address: ADDRESS[randomData(ADDRESS.length)],
        state: STATE[randomData(STATE.length)],
        country: COUNTRY[randomData(COUNTRY.length)],
        zipCode: ZIP_CODE[randomData(ZIP_CODE.length)],
        job: JOB_TYPE[randomData(JOB_TYPE.length)],
        company: COMPANY[randomData(COMPANY.length)],
        investment: INVESTMENT[randomData(INVESTMENT.length)],
        product: PRODUCT[randomData(PRODUCT.length)]
      })
    );
  }
  return users;
}
