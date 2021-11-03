export interface Contentful {
	name: string;
	description: string;
	displayField: string;
	fields: Field[];
	sys: Sys;
}

export interface Field {
	id: string;
	name: string;
	type: string;
	localized: boolean;
	required: boolean;
	validations: Validation[];
	disabled: boolean;
	omitted: boolean;
	linkType?: string;
	items?: Items;
}

export interface Validation {
	linkMimetypeGroup?: string[];
	unique?: boolean;
	size?: Size;
	message?: string;
	regexp?: Regexp;
	enabledMarks?: string[];
	enabledNodeTypes?: string[];
	nodes?: Nodes;
}

export interface Size {
	min: number;
	max: number;
}

export interface Regexp {
	pattern: string;
	flags: any;
}

export interface Nodes {}

export interface Items {
	type: string;
	validations: any[];
}

export interface Sys {
	space: Space;
	id: string;
	type: string;
	createdAt: string;
	updatedAt: string;
	environment: Environment;
	publishedVersion: number;
	publishedAt: string;
	firstPublishedAt: string;
	createdBy: CreatedBy;
	updatedBy: UpdatedBy;
	publishedCounter: number;
	version: number;
	publishedBy: PublishedBy;
}

export interface Space {
	sys: Sys2;
}

export interface Sys2 {
	type: string;
	linkType: string;
	id: string;
}

export interface Environment {
	sys: Sys3;
}

export interface Sys3 {
	id: string;
	type: string;
	linkType: string;
}

export interface CreatedBy {
	sys: Sys4;
}

export interface Sys4 {
	type: string;
	linkType: string;
	id: string;
}

export interface UpdatedBy {
	sys: Sys5;
}

export interface Sys5 {
	type: string;
	linkType: string;
	id: string;
}

export interface PublishedBy {
	sys: Sys6;
}

export interface Sys6 {
	type: string;
	linkType: string;
	id: string;
}
