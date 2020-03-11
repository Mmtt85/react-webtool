import { fromJS, Record } from 'immutable';

import { CareerId } from 'src/types';

export interface Props {
  career: CareerModel;
}

// types
interface CareerType {
  readonly id: CareerId;
  title: string;
  startTime: Date;
  endTime?: Date;
}

// init records
const init: Record.Factory<CareerType> = Record({
  id: '',
  title: '',
  startTime: new Date(null),
  endTime: null,
});

// export types and make record objects
export class CareerModel extends init implements CareerType {
  constructor(props: CareerType) {
    super(fromJS(props));
  }
}
