import HR from '../../components/hr';
import { AiOutlineLine } from 'react-icons/ai';

export default {
	title: 'Horizontal Ruler',
	name: 'horizontalRuler',
	type: 'object',
	icon: AiOutlineLine,
	fields: [
		{
			type: 'string',
			name: 'horizontalRuler',
			components: {
				input: HR,
			},
		},
	],
	preview: {
		prepare() {
			return {
				title: 'Horizontal Ruler',
			};
		},
	},
};
