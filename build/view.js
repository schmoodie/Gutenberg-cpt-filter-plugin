/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
let selectedOptions = {};
function handleOptionChange(event) {
  const selectElementId = event.target.id;
  const selectedValues = Array.from(event.target.selectedOptions).filter(option => option.value.toLowerCase() !== 'visa alla').map(option => option.value.toLowerCase());
  const hasChanged = JSON.stringify(selectedValues) !== JSON.stringify(selectedOptions[selectElementId]);
  if (hasChanged) {
    if (selectedValues.length > 0) {
      selectedOptions[selectElementId] = selectedValues;
    } else {
      delete selectedOptions[selectElementId];
    }
    const filterPosts = document.getElementsByClassName('filter-post');
    Array.from(filterPosts).forEach(div => {
      const postClasses = Array.from(div.classList);

      // Check if the div contains all the selected classes from the URL filter
      const shouldShow = Object.values(selectedOptions).every(options => options.every(option => postClasses.includes(option)));

      // Show or hide the div based on the presence of all selected classes
      div.classList.toggle('hidden', !shouldShow);
    });
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('filter', Object.values(selectedOptions).flat().join(','));
    const newUrl = `${window.location.origin}${window.location.pathname}?${urlParams.toString()}`;
    window.history.replaceState(null, '', newUrl);
  }
}
const selectElements = Array.from(document.getElementsByClassName('selectElementClass'));
selectElements.forEach(selectElement => {
  selectElement.addEventListener('change', handleOptionChange);
});
function parseFilterFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  const filter = urlParams.get('filter');
  const filterPosts = document.getElementsByClassName('filter-post');
  Array.from(filterPosts).forEach(div => {
    const postClasses = Array.from(div.classList);
    if (filter) {
      const filterValues = filter.split(',');

      // Check if the div contains all the selected classes from the URL filter
      const shouldShow = filterValues.every(selectedClass => postClasses.includes(selectedClass));

      // Show or hide the div based on the presence of all selected classes
      div.classList.toggle('hidden', !shouldShow);
    } else {
      // Show all divs if no filter is present
      div.classList.remove('hidden');
    }
  });
}
parseFilterFromUrl();
window.addEventListener('DOMContentLoaded', parseFilterFromUrl);
/******/ })()
;
//# sourceMappingURL=view.js.map