import { IsNumber, Max, Min } from 'class-validator';

export enum Category {
  TRAILS = 'trails',
  TREKKING = 'trekking',
  CYCLING = 'cycling',
  FESTIVALS = 'festivals',
  WORKSHOPS = 'workshops',
}

export class Geo {
  @IsNumber()
  @Min(-90)
  @Max(90)
  latitude: number;

  @IsNumber()
  @Min(-180)
  @Max(180)
  longitude: number;
}
