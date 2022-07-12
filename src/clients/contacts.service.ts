import { Model } from 'mongoose';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Contact, ContactDocument } from './entities/contact.schema';

@Injectable()
export class ContactsService {
  constructor(
    @InjectModel(Contact.name) private contactModel: Model<ContactDocument>,
  ) {}

  async create(createContactDto: CreateContactDto): Promise<ContactDocument> {
    const { phone } = createContactDto;
    const findContactPhone = await this.hasPhoneExists(phone);
    if (findContactPhone) {
      throw new BadRequestException(
        `Telefone ${createContactDto.phone} em uso`,
      );
    }
    const createdContact = new this.contactModel(createContactDto);
    createdContact.save();
    return createdContact;
  }

  async findAll() {
    return this.contactModel.find().exec();
  }

  async findOne(id: string) {
    return this.contactModel.findOne({ _id: id });
  }

  async update(id: string, updateContactDto: UpdateContactDto) {
    const { phone } = updateContactDto;
    const findContactPhone = await this.hasPhoneExists(phone);
    if (findContactPhone && phone !== findContactPhone.phone) {
      throw new BadRequestException(
        `Telefone ${updateContactDto.phone} em uso`,
      );
    }
    return this.contactModel.findOneAndUpdate({ _id: id }, updateContactDto);
  }

  async remove(id: string) {
    return this.contactModel.findOneAndDelete({ _id: id });
  }

  private async hasPhoneExists(phone): Promise<Contact> {
    return this.contactModel.findOne({ phone });
  }
}
