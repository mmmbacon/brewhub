/* eslint-disable require-jsdoc */
export default function reducer(state, { type, payload }) {
  switch (type) {
    case 'GET_ALL_BREWERIES':
      return {
        ...state,
        breweries: payload,
      };
    default:
      return { state };
  }
}
