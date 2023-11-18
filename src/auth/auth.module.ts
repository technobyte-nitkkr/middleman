import { Module } from '@nestjs/common';
import { GoogleStrategy } from './strategy';

@Module({})
export class AuthModule {
  providers: [GoogleStrategy];
  exports: [GoogleStrategy];
}
