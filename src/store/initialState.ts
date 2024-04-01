type InitialState = {
  loading: boolean;
  data: Array<{ name: string; id: number }>;
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
