import { ContactsService } from '../contacts.service';
import { Contact } from '../entities/contact.schema';
import { Injectable } from '@nestjs/common';
import {
  IsNotEmpty,
  MinLength,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  Validate,
  ValidationArguments,
  IsEmpty,
  IsOptional,
} from 'class-validator';

@ValidatorConstraint({ name: 'PhoneBr', async: true })
@Injectable()
export class PhoneBrRule implements ValidatorConstraintInterface {
  constructor(private readonly contactRepository: ContactsService) {}
  async validate(phone?: string) {
    try {
      if (!phone) return true;
      const phoneRegexBr = new RegExp(/^(\d{2})(\d{5}|\d{4})(\d{4})$/gm);
      const phoneIsValid = phoneRegexBr.test(phone);
      console.log('phoneIsValid', phoneIsValid);
      if (!phoneIsValid) return false;
    } catch (e) {
      console.log(e);
      return false;
    }

    return true;
  }

  defaultMessage(args: ValidationArguments) {
    return `Número ${args.value ?? ''} inválido, não coloque espaços e acentos`;
  }
}

export class CreateContactDto extends Contact {
  @IsNotEmpty({
    message: 'Informe um nome válido',
  })
  @MinLength(2, {
    message: 'Informe um nome com mínimo de 2 caracteres',
  })
  name: string;

  @IsOptional()
  @Validate(PhoneBrRule)
  phone?: string;
}
