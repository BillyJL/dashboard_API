import { IsEmail, IsString } from 'class-validator';
export class UserLoginDto {
	@IsEmail({}, { message: 'Incorrectly specified email' })
	email: string;

	@IsString()
	password: string;
}
