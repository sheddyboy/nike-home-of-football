export interface ReducerState {
  language: {
    en: boolean;
    de: boolean;
    next: boolean;
    value: null;
  };
  leaderBoard: {
    amateur: boolean;
    pro: boolean;
    next: boolean;
    value: null;
  };
  game: {
    speed: boolean;
    touch: boolean;
    precision: boolean;
    next: boolean;
    value: null;
  };
  formInputs: {
    email: string;
    name: string;
    lastName: string;
    nickName: string;
    shoeSize: string;
    isAtLeast18: boolean;
    language: string;
    leaderBoard: string;
    game: string;
  };
}
