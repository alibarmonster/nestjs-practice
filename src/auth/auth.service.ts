import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signup() {
    return {
      msg: 'This action return signup',
      author: 'alibarmonster',
    };
  }

  signin() {
    return {
      msg: 'This action returns sign',
      author: 'alibarmonster',
    };
  }
}
