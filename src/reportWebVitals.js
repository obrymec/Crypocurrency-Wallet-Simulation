// Reports web vitals.
const reportWebVitals = onPerfEntry => {
	// Checks web vitals.
	if (onPerfEntry && onPerfEntry instanceof Function) {
		// Imports useful components.
		import ("web-vitals").then (({getCLS, getFID, getFCP, getLCP, getTTFB}) => {
			// Gets cls entry.
			getCLS (onPerfEntry);
			// Gets fid entry.
			getFID (onPerfEntry);
			// Gets fcp entry.
			getFCP (onPerfEntry);
			// Gets perf entry.
			getLCP (onPerfEntry);
			// Gets ttfb entry.
			getTTFB (onPerfEntry);
		});
	}
};

// Exports web vitals.
export default reportWebVitals;
