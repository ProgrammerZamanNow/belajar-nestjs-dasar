import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { Connection, createConnection } from './connection/connection';
import { mailService, MailService } from './mail/mail.service';
import {
  createUserRepository,
  UserRepository,
} from './user-repository/user-repository';
import { MemberService } from './member/member.service';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: Connection,
      useFactory: createConnection,
      inject: [ConfigService],
    },
    {
      provide: MailService,
      useValue: mailService,
    },
    {
      provide: 'EmailService',
      useExisting: MailService,
    },
    {
      provide: UserRepository,
      useFactory: createUserRepository,
      inject: [Connection],
    },
    MemberService,
  ],
})
export class UserModule {}
