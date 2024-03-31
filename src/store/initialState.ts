import { Pokemon } from "../types/pokemon";

type InitialState = {
  loading: boolean;
  data: Array<Pokemon>;
  error: string;
  numTotalResults: number;
};

const initialState: InitialState = {
  loading: false,
  data: [],
  error: "",
  numTotalResults: 0,
};

export default initialState;
