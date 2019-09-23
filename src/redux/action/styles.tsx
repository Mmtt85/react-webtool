import * as Types from 'src/redux';

export function rootFilterAction(payload: boolean) {
  return {
    type: Types.ROOT_FILTER,
    payload,
  };
}
