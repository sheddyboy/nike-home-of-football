"use client";
import { ReducerState } from "@/types";
import { useReducer } from "react";

export const formDefaultStates = {
  language: {
    en: true,
    de: true,
    next: false,
    value: null,
  },
  leaderBoard: {
    amateur: true,
    pro: true,
    value: null,
    next: false,
  },
  game: {
    speed: true,
    touch: true,
    precision: true,
    next: false,
    value: null,
  },
  formInputs: {
    email: "",
    name: "",
    lastName: "",
    nickName: "",
    shoeSize: "",
    isAtLeast18: false,
    language: "",
    leaderBoard: "",
    game: "",
  },
};

function reducer(
  state: ReducerState,
  action: { type: string; payload?: any },
): ReducerState {
  switch (action.type) {
    case "language": {
      return {
        ...state,
        language: { ...action.payload },
        formInputs: { ...state.formInputs, language: action.payload.value },
      };
    }
    case "leaderBoard": {
      return {
        ...state,
        leaderBoard: { ...action.payload },
        formInputs: { ...state.formInputs, leaderBoard: action.payload.value },
      };
    }
    case "game": {
      return {
        ...state,
        game: { ...action.payload },
        formInputs: { ...state.formInputs, game: action.payload.value },
      };
    }
    case "formInputs": {
      return {
        ...state,
        formInputs: { ...state.formInputs, ...action.payload },
      };
    }
    case "reset": {
      return formDefaultStates;
    }
    default: {
      return state;
    }
  }
}

export default function FromReducer() {
  const [state, dispatch] = useReducer(reducer, formDefaultStates);
  return { state, dispatch };
}
