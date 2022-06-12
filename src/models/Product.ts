import * as Yup from 'yup';

export type Product = {
	id: number;
	title: string;
	description: string;
	author: string;
	price: number;
	discount: number;
	quantity: number;
};

export const ProductSchema = Yup.object().shape({
	title: Yup.string().required(),
	description: Yup.string(),
	price: Yup.number().required()
});
