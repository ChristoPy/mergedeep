const isObject = item => item && typeof item === "object" && !Array.isArray(item) && item !== null;

function mergeDeep(target, source) {
	if (isObject(target) && isObject(source)) {
		Object.keys(source).forEach(key => {
			if (isObject(source[key])) {
				if (!target[key]) {
					Object.assign(target, {[key]: {}});
				}
				mergeDeep(target[key], source[key]);
			} else if (Array.isArray(source[key])) {
				if (!target[key]) {
					target[key] = [];
				}
				target[key] = [...target[key], ...source[key]];
				mergeDeep(target[key], source[key]);
			} else {
				Object.assign(target, {[key]: source[key]});
			}
		});
	}
	return target;
}

module.exports = mergeDeep;
