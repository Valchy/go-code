import { Schema, model, models } from 'mongoose';

const SnipperSchema = new Schema({
	author: {
		type: String,
		required: true
	},
	code_snippet: {
		type: String,
		required: true
	},
	code_language: {
		type: String,
		required: true
	}
});

const Snippet = models.Snippet || model('Snippet', SnipperSchema);

export default Snippet;
