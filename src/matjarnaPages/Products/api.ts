import commInstance from "../../communicator/comm";
import { uploadImage } from "../../common/api";
import { BASE_URL } from "../../common/constants";

export const saveProduct = async (data: any): Promise<any> => {
  const imageUrl = await uploadImage(data.mainImage.file);
  let subImages: any = [];

  if (imageUrl) {
    data.mainImage = imageUrl;
    const subImagesLength = data.subImages.length;

    await Promise.all(
      data.subImages.map(async (file: any, index: any) => {
        const path = await uploadImage(file);
        if (path) {
          subImages.push({
            path: path,
            sortOrder: subImagesLength - index,
          });
        }
      })
    );

    if (subImages.length) {
      data.subImages = subImages;

      try {
        const response = await commInstance.post(
          "/api/private/product/create",
          data
        );
        if (response.data.subImages.length == subImagesLength) {
          return { ...response, allSucceeded: true };
        } else {
          return { ...response, allSucceeded: false };
        }
      } catch (error: any) {
        return error;
      }
    } else {
      return Promise.reject();
    }
  }
  return Promise.reject();
};

export const checkUniqueness = async (
  value: string,
  id: any
): Promise<boolean> => {
  try {
    const response = await commInstance.get("api/private/product/unique", {
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

export const deleteProduct = async (id: any) => {
  try {
    const response = await commInstance.delete(`/api/private/product/${id}`);
    return response;
  } catch (error) {
    return error;
  }
};

export const getProductById = async (id: any): Promise<any> => {
  try {
    const response = await commInstance.get(`/api/product/${id}`, id);
    return response;
  } catch (error: any) {
    return error;
  }
};

export const updateProduct = async (data: any, id: any): Promise<any> => {
  let subImages: any = [];
  const subImagesLength = data.subImages.length;

  // Only if main image changed
  if (data.mainImage?.file) {
    const imageUrl = await uploadImage(data.image.file);
    data.image = imageUrl;
  }

  await Promise.all(
    data.subImages.map(async (file: any, index: any) => {
      if (file instanceof File) {
        const path = await uploadImage(file);
        if (path) {
          subImages.push({
            path: path,
            sortOrder: subImagesLength - index,
          });
        }
      } else {
        subImages.push({
          path: file.substring(BASE_URL.length),
          sortOrder: subImagesLength - index,
        });
      }
    })
  );

  data.subImages = subImages;

  try {
    const response = await commInstance.put(
      `/api/private/product/update/${id}`,
      data
    );
    return response;
  } catch (error: any) {
    return error;
  }
};
