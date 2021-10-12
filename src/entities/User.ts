import { v4 } from 'uuid';

export default class User {
  id: string;

  name: string;

  email: string;

  constructor() {
    this.id = v4();
  }
}
