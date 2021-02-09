export const SET_LANGUAGE = 'LANGUAGE/SET_LANGUAGE';

export const setlanguage = lang => {
  return {
    type: SET_LANGUAGE,
    payload: lang,
  };
};
