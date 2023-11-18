import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signIn(user) {
    if (!user) {
      throw new BadRequestException('No user');
    }

    const userExists = await this.findUserByEmail(user.email);

    if (!userExists) {
      const filteredUser = this.filterUserFields(user);
      const registeredUser = await this.registerUser(filteredUser);

      return {
        message: 'User Info from google',
        user: registeredUser,
      };
    }

    return {
      message: 'User Info from google',
      user: user,
    };
  }

  async findUserByEmail(email: string) {
    try {
      const dbUser = await this.prisma.user.findUnique({
        where: {
          email: email,
        },
      });
      return dbUser;
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException();
    }
  }

  async registerUser(user) {
    console.log('going to register the fucker');
    try {
      const newUser = await this.prisma.user.upsert({
        where: { email: user.email },
        create: user,
        update: {},
      });
      console.log('added a new user');
      console.log(newUser);
      return newUser;
    } catch (error) {
      console.log(error);
    }
  }

  private filterUserFields(user) {
    const allowedFields = ['email', 'name', 'picture'];
    return Object.keys(user)
      .filter((key) => allowedFields.includes(key))
      .reduce((obj, key) => {
        obj[key] = user[key];
        return obj;
      }, {});
  }
}
