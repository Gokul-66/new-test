
import Product from '../models/product.js';
export async function createProduct (req, res) {
     try {
            const { name, slug, description, price, discountPrice, stock, category, images } = req.body;
            const product = new Product({ name, slug, description, price, discountPrice, stock, category, images });
            await product.save();
            res.status(201).json(product);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        } 
}

export async function updateProduct (req, res) {
    try {
            const { id } = req.params;
            const { name, slug, description, price, discountPrice, stock, category, images } = req.body;
            const product = await Product.findByIdAndUpdate(
                id,
                { name, slug, description, price, discountPrice, stock, category, images },
                { new: true }
            );
            res.status(200).json(product);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
}
export async function deleteProduct (req, res) {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        res.status(200).json("Product deleted successfully");
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}

export async function getProducts (req, res) {
     try {
            const { page_size, page_num } = req.params;
            const skip = page_size * (page_num - 1)
            const products = await Product.find().skip(skip).limit(parseInt(page_size));
            res.status(200).json(products);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
}
export async function getProductBySlug (req, res) {
    try {        
        const { slug } = req.params;
        const product = await Product.findOne({ slug });    
        return res.status(200).json(product);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}