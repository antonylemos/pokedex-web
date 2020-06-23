import { background } from '../styles/colors';

interface Background {
  background: string;
  shadow: string;
}

const generateBackgroundColorByTypes = (type: string): Background => ({
  background: background[type],
  shadow: `${background[type]}66`,
});

export default generateBackgroundColorByTypes;
