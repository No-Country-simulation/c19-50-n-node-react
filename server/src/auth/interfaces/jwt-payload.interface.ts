export interface JwtPayload {
  //TODO: Añadir todo lo que quieran grabar
  id: string;
  email: string;
  image?: string;
  roles?: string[];
}
