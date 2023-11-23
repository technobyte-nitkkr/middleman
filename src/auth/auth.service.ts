import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

interface InputUser {
  name: string;
  email: string;
  picture: string;
}

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async signIn(user: UserDto) {
    if (!user) {
      throw new BadRequestException('No user');
    }

    const userExists = await this.findUserByEmail(user.email);

    if (userExists) {
      return this.signToken(user.email, user.name, true);
    }

    const filteredUser = this.filterUserFields(user) as InputUser;

    await this.registerUser(filteredUser);
    return this.signToken(user.email, user.name, false);
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

  async registerUser(user: InputUser) {
    try {
      const newUser = await this.prisma.user.create({
        data: user,
      });
      return newUser;
    } catch (error) {
      console.log(error);
    }
  }

  private filterUserFields(user: UserDto) {
    const allowedFields = ['email', 'name', 'picture'];
    return Object.keys(user)
      .filter((key) => allowedFields.includes(key))
      .reduce((obj, key) => {
        obj[key] = user[key];
        return obj;
      }, {});
  }

  async signToken(
    email: string,
    name: string,
    userExists: boolean,
  ): Promise<{ access_token: string }> {
    const payload = {
      email: email,
      name: name,
      userExists: userExists,
    };

    const token = await this.jwt.signAsync(payload, {
      expiresIn: '600m',
      secret: this.config.get('JWT_SECRET'),
    });

    return { access_token: token };
  }
}
