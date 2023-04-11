export default interface ICard {
  id: string | number;
  name: string;
  description: string;
  image?: string;
  selected?: boolean;
}