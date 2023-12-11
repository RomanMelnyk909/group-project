export const BASE_URL = "https://roman.itstep.click/api/";

export const QUERY_HEADERS = {
  "Content-Type": "application/json",
};

// Methods
export const GET_METHOD = "GET";
export const POST_METHOD = "POST";
export const PUT_METHOD = "PUT";
export const PATCH_METHOD = "PATCH";

// Endpoints

// Products

export const getProductsListEndpoint = () => "Products/list";
export const getProductAddEndpoint = () => "Products/add";
export const getProductAddImageEndpoint = () => "Products/upload";
export const getProductDeleteEndpoint = (id) => `Products/delete/${id}`;
