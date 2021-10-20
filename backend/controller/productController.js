import Product from "../models/productModel.js";

export const getAllProducts = async (req, res) => {
	try {
		const products = await Product.findAll();
		res.json(products);
	} catch (error) {
		res.json({ error: error.message });
	}
};

export const getProductById = async (req, res) => {
	try {
		const product = await Product.findAll({
			where: {
				id: req.params.id,
			},
		});
		res.json(product[0]);
	} catch (error) {
		res.json({ error: error.message });
	}
};

export const createProducts = async (req, res) => {
	try {
		await Product.create(req.body);
		res.json({
			message: "Data has been sucsessfully added into databases",
		});
	} catch (error) {
		res.json({ error: error.message });
	}
};

export const updateProducts = async (req, res) => {
	try {
		await Product.update(req.body, {
			where: {
				id: req.params.id,
			},
		});
		res.json({
			message: "Data has been sucsessfully updated",
		});
	} catch (error) {
		res.json({ error: error.message });
	}
};

export const deleteProducts = async (req, res) => {
	try {
		await Product.destroy({
			where: {
				id: req.params.id,
			},
		});
		res.json({
			message: "Data has been deleted",
		});
	} catch (error) {
		res.json({ error: error.message });
	}
};
