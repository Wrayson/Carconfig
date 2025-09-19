import { redirect } from '@sveltejs/kit';

// Placeholder; redirect to configuration page
// Had no time to implement a "Model Overview" Page.

export const load = () => {
	throw redirect(307, '/models/configure');
};