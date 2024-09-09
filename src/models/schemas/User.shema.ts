import { ObjectId } from 'mongodb';

type UserContructor = {
  _id?: ObjectId;

  name: string;
  email: string;
  password: string;
  description?: string;

  refresh_token?: string;
  forget_password_token?: string;
  otp_code?: string;

  created_at?: Date;
  updated_at?: Date;
};

class User {
  _id: ObjectId;

  name: string;
  email: string;
  password: string;
  description: string;

  refresh_token: string;
  forget_password_token: string;
  otp_code: string;

  created_at: Date;
  updated_at: Date;

  constructor(payload: UserContructor) {
    const now = new Date();

    this._id = payload._id || new ObjectId();

    this.name = payload.name;
    this.email = payload.email;
    this.password = payload.password;
    this.description = payload.description || '';

    this.refresh_token = payload.refresh_token || '';
    this.forget_password_token = payload.forget_password_token || '';
    this.otp_code = payload.otp_code || '';

    this.created_at = payload.created_at || now;
    this.updated_at = payload.updated_at || now;
  }
}

export default User;
