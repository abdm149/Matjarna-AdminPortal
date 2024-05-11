import commInstance from "../../communicator/comm";
import { uploadImage } from "../../common/api";

export const saveCategory = async (data: any): Promise<any> => {
  const imageUrl = await uploadImage(data.image.file);

  if (imageUrl) {
    data.image = imageUrl;
    try {
      const response = await commInstance.post(
        "/api/private/category/create",
        data
      );
      return response;
    } catch (error: any) {
      return error;
    }
  }
  return Promise.reject();
};

export const updateCategory = async (data: any, id: any): Promise<any> => {
  // Only if image changed
  if (data.image?.file) {
    const imageUrl = await uploadImage(data.image.file);
    data.image = imageUrl;
  }

  try {
    const response = await commInstance.put(
      `/api/private/category/update/${id}`,
      data
    );
    return response;
  } catch (error: any) {
    return error;
  }
};

export const getCategoryById = async (id: any): Promise<any> => {
  try {
    const response = await commInstance.get(`/api/category/${id}`, id);
    return response;
  } catch (error: any) {
    return error;
  }
};

export const checkUniqueness = async (
  value: string,
  id: any
): Promise<boolean> => {
  try {
    const response = await commInstance.get("api/private/category/unique", {
      params: {
        code: value,
        id: id,
      },
    });
    return response.data.unique;
  } catch (error) {
    return false;
  }
};

export const deleteCategory = async (id: any) => {
  try {
    const response = await commInstance.delete(`/api/private/category/${id}`);
    return response;
  } catch (error) {
    return error;
  }
};
