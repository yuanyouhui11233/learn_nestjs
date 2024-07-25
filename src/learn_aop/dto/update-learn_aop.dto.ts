import { PartialType } from '@nestjs/mapped-types';
import { CreateLearnAopDto } from './create-learn_aop.dto';

export class UpdateLearnAopDto extends PartialType(CreateLearnAopDto) {}
