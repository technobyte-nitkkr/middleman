import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  provider: string;

  @IsNotEmpty()
  providerId: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  picture: string;

  @IsNotEmpty()
  _accessToken: string;
}
