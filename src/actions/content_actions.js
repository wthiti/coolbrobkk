import * as Data from "../data/contents";

import {
  CONTENT_SELECT
} from './types';

export const selectContent = (selectedContent) => {
  const payload = {
    selectedContent,
    content: Data[selectedContent].content
  };
  return {
    type: CONTENT_SELECT,
    payload: payload 
  };
};
