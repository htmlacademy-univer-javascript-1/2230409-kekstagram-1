import {imageUploadNode} from './zoom.js';
import {formNode} from './text-inputs.js';

const FILTER_PREFIX = 'effects__preview--';
const filterNodes = formNode.querySelectorAll('.effects__radio');

let currentFilter;
const initFilters = () => {
  filterNodes.forEach((filterNode) => {
    filterNode.addEventListener('click', (evt) => {
      const filter = evt.target.value;

      imageUploadNode.classList.remove(currentFilter);
      if (filter !== 'none') {
        currentFilter = FILTER_PREFIX + filter;
        imageUploadNode.classList.add(currentFilter);
      }
    });
  });
};

export {initFilters};
