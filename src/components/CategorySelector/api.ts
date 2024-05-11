import commInstance from "../../communicator/comm";

export const getCategoryHierarchy = async (): Promise<any> => {
  try {
    const response = await commInstance.get("api/category/hierarchy");
    return response;
  } catch (error) {
    return error;
  }
};
