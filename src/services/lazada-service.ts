import { get, post } from ".";
import { APP_TOKEN } from "../config/const";

class LazadaService {
  getProductIdFromLink = async (link: string) => {
    return await get("/api/v1/getProductIdFromShortLink", {
      link: link,
    });
  };
  getProductInfo = async (productId: string) => {
    return await get("/api/v1/GetProductById", {
      productId: productId,
    });
  };
}

export const lazadaService = new LazadaService();
