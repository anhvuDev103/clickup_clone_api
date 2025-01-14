import { ValidationError as ExpressValidationError } from 'express-validator';
import _ from 'lodash';

import { HttpStatus } from '@/constants/enums';

type BaseErrorContructor = {
  status: number;
  message: string;
};

type ValidationErrorContructor = {
  details: Record<string, ExpressValidationError>;
} & BaseErrorContructor;

export class BaseError {
  status: number;
  error: string;
  message: string;
  stack: string;

  constructor(payload: BaseErrorContructor) {
    const now = new Date().toISOString();

    this.status = payload.status;
    this.error = _.findKey(HttpStatus, (v) => v === payload.status) || 'unknown';
    this.message = payload.message;
    this.stack = `[${now}] [Error] ${payload.message}`;
  }
}

export class ValidationError extends BaseError {
  details: Record<string, ExpressValidationError>;

  constructor({ details, ...payload }: ValidationErrorContructor) {
    super(payload);

    this.details = details;
  }
}
