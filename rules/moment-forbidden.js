module.exports = {
	meta: {
		messages: {
			momentReference: 'Usage of Moment.js is not allowed.',
		},
	},
	create(context) {
		return {
			ImportDeclaration(node) {
				if (node.source.value === "moment") {
					context.report({ node: node, messageId: 'momentReference' });
				}
			}
		}
	}
}