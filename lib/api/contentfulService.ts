import { ContentfulClientApi, createClient } from 'contentful';

class ContentfulService {
	client: ContentfulClientApi;

	constructor() {
		this.client = createClient({
			space: process.env.CONTENTFUL_SPACE_ID || '',
			accessToken: process.env.CONTENTFUL_ACCESS_KEY || '',
		});
	}

	async getRecipes() {
		const res = await this.client.getEntries({
			content_type: 'recipes',
		});

		return res.items;
	}

	async getRecipesBySlug(slug: string | string[] | undefined) {
		const { items } = await this.client.getEntries({
			content_type: 'recipes',
			'fields.slug': slug,
		});

		return items;
	}
}

export default ContentfulService;
