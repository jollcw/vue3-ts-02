export type User = {
  id: number | null;
  name: string;
  age: number;
  gender: string;
  birthDate: string;
  job: string;
  image: string;
};

export type State = {
  loading: boolean;
  users: User[];
};

export const state: State = {
  loading: false,
  users: [],
};
