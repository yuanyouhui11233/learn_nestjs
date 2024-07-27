import { PartialType } from '@nestjs/mapped-types';
import { CreateLearnDecoratorDto } from './create-learn_decorator.dto';

export class UpdateLearnDecoratorDto extends PartialType(CreateLearnDecoratorDto) {}
