"use client";
import { Dispatch, createContext } from "react";
import FromReducer, { formDefaultStates } from "./FromReducer";
import { ReducerState } from "@/types";

interface FormProviderProps {
  children: React.ReactNode;
}

export const FormCtx = createContext<{
  state: ReducerState;
  dispatch: Dispatch<{
    type: string;
    payload?: any;
  }>;
}>({
  state: formDefaultStates,
  dispatch: () => {},
});

export default function FormProvider({ children }: FormProviderProps) {
  const { state, dispatch } = FromReducer();
  return (
    <FormCtx.Provider value={{ state, dispatch }}>{children}</FormCtx.Provider>
  );
}
