import axios from "axios";

export const addToWishlist = async (productId) => {
    try {
        const response = await axios.post("https://ecomerceapis.runasp.net/api/WishList/AddWishList", {
            productId: productId
        });

        return response;
    } catch (error) {
        console.error("Add to wishlist failed", error);
        return { status: 500 };
    }
};
