export const NEXT_PAGE = "NEXT_PAGE";
export const BACK_PAGE = "BACK_PAGE";

export const nextPage = (payload) => ({
  type: NEXT_PAGE,
  payload,
});

export const backPage = (payload) => ({
  type: BACK_PAGE,
  payload,
});

export const Reducer = (state = 1, action) => {
  switch (action.type) {
    case NEXT_PAGE:
      return state + 1;
    case BACK_PAGE:
      return state - 1;
    default:
      return state;
  }
};
