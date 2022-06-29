import { Schema, model, models } from 'mongoose';

const SnipperSchema = new Schema({
	name: String,
	email: {
		type: String,
		required: true,
		unique: true
	}
});

const Snippet = models.Snippet || model('Snippet', SnipperSchema);

export default Snippet;
