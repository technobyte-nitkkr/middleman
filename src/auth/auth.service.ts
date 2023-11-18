import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  //   generateJwt(payload) {
  //     return this.jwtService.sign(payload);
  //   }

  async signIn(user) {
    if (!user) {
      throw new BadRequestException('No user');
    }
    return {
      message: 'User Info from google',
      user: user,
    };

    const userExists = await this.findUserByEmail(user.email);

    if (!userExists) {
      //   return this.registerUser(user);
    }

    // return this.generateJwt({
    //   sub: userExists.id,
    //   email: userExists.email,
    // });
  }

  //   async registerUser(user: RegisterUserDto) {
  //     try {
  //       const newUser = this.userRepository.create(user);
  //       newUser.username = generateFromEmail(user.email, 5);

  //       await this.userRepository.save(newUser);

  //       return this.generateJwt({
  //         sub: newUser.id,
  //         email: newUser.email,
  //       });
  //     } catch {
  //       throw new InternalServerErrorException();
  //     }
  //   }

  async findUserByEmail(email: string) {
    try {
      const dbUser = this.prisma.user.findUnique({
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
}
