import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'isGeoPair', async: false })
export class IsGeoPair implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    const object = args.object as any;
    const latitude = object.latitude;
    const longitude = object.longitude;

    if (latitude && !longitude) return false;
    if (!latitude && longitude) return false;

    return true;
  }

  defaultMessage(args: ValidationArguments) {
    return 'If one of latitude or longitude is provided, both must be present!';
  }
}
