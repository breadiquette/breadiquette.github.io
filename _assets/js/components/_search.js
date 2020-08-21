const Search = (() => {

	let sjs = require('simple-jekyll-search');

	return {
		init() {
			var search_results = SimpleJekyllSearch({
			  searchInput: document.getElementById('search-input'),
			  resultsContainer: document.getElementById('results-container'),
			  json: '/search.json'
			});
			const si = document.getElementById('search-input');
			const results = document.getElementById('results-container');
			si.onkeydown = function() {
			    let results_offset = si.getBoundingClientRect().left
			    results.style.left = `${results_offset}px`
			    results.style.width = `${si.getBoundingClientRect().right - results_offset}px`
			};

		},
	}
})();

export default Search;