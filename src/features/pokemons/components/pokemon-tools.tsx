import { KeyboardEventHandler, useReducer } from "react";

import { ActionType } from "../enums/pokemon-tools";
import { Input } from "antd";
import { useTranslation } from "react-i18next";

type State = {
  code?: string;
  name?: string;
};

const initialState: State = {
  code: undefined,
  name: undefined,
};

type Action =
  | { type: ActionType.SET_CODE; payload: string }
  | { type: ActionType.SET_NAME; payload: string }
  | { type: ActionType.RESET };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.SET_CODE:
      return { ...state, code: action.payload };
    case ActionType.SET_NAME:
      return { ...state, name: action.payload };
    case ActionType.RESET:
      return initialState;
    default:
      return state;
  }
};

type PokemonToolsProps = {
  onSearch: (state: State) => void;
};

export function PokemonTools({ onSearch }: PokemonToolsProps) {
  const { t } = useTranslation();
  const [state, dispatch] = useReducer(reducer, initialState);

  const onEnter: KeyboardEventHandler<HTMLInputElement> = ({ key }) => {
    if (key === "Enter") onSearch(state);
  };

  return (
    <Input
      allowClear
      className="w-full"
      placeholder={t("common.search_by_name")}
      classNames={{
        suffix: "[&>button>span>svg]:w-5! [&>button>span>svg]:first:h-5!",
        input:
          "py-4! px-6! placeholder:text-base! placeholder:text-neutral-500!",
      }}
      value={state.name ?? ""}
      onKeyDown={onEnter}
      onClear={() => {
        dispatch({ type: ActionType.RESET });
        onSearch(initialState);
      }}
      onChange={({ target }) =>
        dispatch({ type: ActionType.SET_NAME, payload: target.value })
      }
    />
  );
}
