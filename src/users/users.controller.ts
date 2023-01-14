import { injectable, inject } from 'inversify';
import { ILogger } from '../logger/logger.interface';
import { BaseController } from "../common/base.controller";
import { Response, Request, NextFunction } from 'express';
import { HTTPError } from '../errors/http-error.class';
import { TYPES } from '../types';
import 'reflect-metadata';

@injectable()
export class UserController extends BaseController {
	constructor(@inject(TYPES.ILogger) private loggerService: ILogger) {
		super(loggerService);
		this.bindRoutes([
			{path: '/register', method: 'post', func: this.register},
			{path: '/login', method: 'post', func: this.login}
		]);
		
	}

	login(req: Request, res: Response, next: NextFunction) {
		// this.ok(res, 'login');
		next(new HTTPError(401, 'authorithation error', 'login'));
	}

	register(req: Request, res: Response, next: NextFunction) {
		this.ok(res, 'register');
	}
}