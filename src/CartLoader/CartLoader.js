import { getShoppingCart } from "../utilities/fakedb";

const cartLoader = async () => {
    const loadedProducts = await fetch('products.json')
    const products = await loadedProducts.json();

    const storedCart = getShoppingCart()
    let savesCart = []
    for (const id in storedCart) {
        const addedProduct = products.find(product => product.id === id)
        if (addedProduct) {
            const quantity = storedCart[id]
            console.log(quantity)
            addedProduct.quantity = quantity

            savesCart.push(addedProduct)
            console.log(savesCart)
        }
    }

    return savesCart;
}
export default cartLoader