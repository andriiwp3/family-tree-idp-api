export interface IPerson {
  fullName: string;
  age: number;
}

export interface IPersonDocument extends IPerson {
  id: string;
}
