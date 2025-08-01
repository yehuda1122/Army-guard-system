import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UsersService } from "../users/users.service";
import { UsersModule } from '../users/users.module';
import { ConfigModule } from '@nestjs/config';
import { JwtStrategy } from './Strategy';

// import { PassportModule } from '@nestjs/passport';

@Module({
  imports:[UsersModule,JwtModule.register({ secret: process.env.JWT_SECRET,signOptions: { expiresIn: '1h' }})],
  controllers: [AuthController],
  providers: [AuthService,JwtStrategy]
  
})
export class AuthModule {}
