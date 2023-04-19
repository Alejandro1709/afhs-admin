type STATUS = 'VIVO' | 'MUERTO' | 'LUCHITO' | 'DESCONOCIDO' | 'DESAPARECIDO';

type GENDER = 'HOMBRE' | 'MUJER';

export default interface ICharacter {
  _id?: string | number;
  name: string;
  slug?: string;
  actor: string | string[];
  image?: string;
  birthdate?: string[] | string;
  work?: string[] | string;
  otherWork?: string[] | string;
  status: STATUS | string;
  selected?: boolean;
  gender: GENDER | string;
  height?: number | string;
  nicknames?: string[] | string;
  catchphrases?: string[] | string;
}