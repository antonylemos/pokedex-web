import { types } from '../styles/colors';

const generateColorByType = (type: string): string => types[type];

export default generateColorByType;
