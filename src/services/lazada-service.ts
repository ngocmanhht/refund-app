import { post } from ".";

class LazadaService {
  getProductCommission = async (link: string) => {
    return await post("lazada/product-commission", { link });
  };
}

export const lazadaService = new LazadaService();
