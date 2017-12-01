{
  /*
	// Place your snippets for JavaScript here. Each snippet is defined under a snippet name and has a prefix, body and 
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
	// same ids are connected.
	// Example:

*/
  "Print to console": {
    "prefix": "log",
    "body": ["console.log($1);", "$2"],
    "description": "Log output to console"
  },
  "Comment": {
    "prefix": "com",
    "body":
      "//////////////////////////////////////////////////\n/**\n*\n*$1\n*\n*/\n//////////////////////////////////////////////////",
    "description": "Big comment"
  },
  "For Loop": {
    "prefix": "for",
    "body": [
      "let i;",
      "for (${1:i} = 0; ${1:i} < ${2:array}.length; ${1:i} += 1) {",
      "}"
    ],
    "description": "ESlint configured for Loop"
	},
	"React stateful component": {
		"prefix": "react smart",
		"body": [
			"Import React, {Component}  from 'react';",
			"\n",
			"class $1 extends Component {",
				"constructor() {",
					"\tsuper();",
					"};",
				"\trender() {",
					"\t\treturn()",
				"\t};",
				"};"
		],
    "description": "React component with state"
	},
	"React stateless component": {
		"prefix": "react dumb",
		"body": [
			"Import React from 'react';",
			"\n",
			"const $1 = ({}) => {",
					"\t\treturn()",
			"};"
		],
		"description": "React component without state"	
	}
}
