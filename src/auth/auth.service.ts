import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/models/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
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
