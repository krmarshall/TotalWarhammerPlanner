import { useMediaQuery } from 'react-responsive';

const useBulkMediaQueries = () => {
  return {
    isMobileWidth: useMediaQuery({ maxWidth: 1023 }),
    isMobileHeight: useMediaQuery({ maxHeight: 719 }),
    isShortWidth: useMediaQuery({ maxWidth: 965 }),
    isShortHeight: useMediaQuery({ maxHeight: 669 }),
    isThin: useMediaQuery({ maxWidth: 625 }),
    tallWindow: useMediaQuery({ minHeight: 920 }),
    isSmol: useMediaQuery({ maxWidth: 540 }),
  };
};

export default useBulkMediaQueries;