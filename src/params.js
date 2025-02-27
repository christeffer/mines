import { Dimensions } from 'react-native';

const params = {
  blockSize: 30,
  borderSize: 5,
  fontSize: 15,
  headerRatio: 0.15, // Proportion from superior panel fo screen
  difficultLevel: 0.1,
  getColumnsAmount() {
    const width = Dimensions.get('window').width;
    return Math.floor(width / this.blockSize);
  },
  getRowsAmount() {
    const height = Dimensions.get('window').height;
    const boardHeight = height * (1 - this.headerRatio);

    return Math.floor(boardHeight / this.blockSize);
  },
};

export default params;
