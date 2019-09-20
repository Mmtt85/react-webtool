import * as Types from 'src/constants/redux-type';

export function rootFilterAction(payload: boolean) {
  return {
    type: Types.ROOT_FILTER,
    payload,
  };
}
