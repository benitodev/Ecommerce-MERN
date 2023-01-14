import { OptionValues } from '../pages/SingleProduct/context/OptionsContext';

enum OptionActionsTypes {
  add,
}

type Payload = {
  key: string;
  value: string | number;
};
export interface OptionActions {
  type: 'add';
  payload: Payload;
}

export const OptionsReducer = (state: OptionValues, action: OptionActions) => {
  switch (action.type) {
    case 'add': {
      return { ...state, [action.payload.key]: action.payload.value };
    }

    default: {
      throw new Error(`Unhandled type: ${action.type}`);
    }
  }
};
