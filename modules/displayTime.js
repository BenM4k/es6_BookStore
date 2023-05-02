import { DateTime } from 'luxon';

const displayTime = () => {
  const now = DateTime.now();
  return now;
};

export default displayTime;