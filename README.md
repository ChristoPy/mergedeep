# mergedeep
Mergedeep helps the usage of similar complex object structures without the need to rewrite them by hand.

# Installation

```shell
npm install @christopy/mergedeep
```

# Importing

```javascript
const mergedeep = require ("@christopy/mergedeep");
```

# Running

Code:
```javascript
// Setup base structure
const me = {
	name: "chris",
	age: 20,
	coding: {
		since: 12,
		technologies: ["node", "vue", "typescript", "sass/scss"],
	},
};

// Configure new data
const newInformation = {
	freelancer: true,
	loves: ["coding", "design", "music"],
	coding: {
		technologies: ["python", "node"],
	},
};

// Merge new data with the base structure
const result = mergedeep(me, newInformation);

console.log(JSON.stringify(result));
// {"name":"chris","age":20,"coding":{"since":12,"technologies":["node","vue","typescript","sass/scss","python","node"]},"freelancer":true,"loves":["coding","design","music"]}
```

# Version
1.0.2