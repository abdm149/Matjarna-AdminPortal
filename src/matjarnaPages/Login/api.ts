import commInstance from "../../communicator/comm";

export const loginUser = async (loginCredentials: any): Promise<any> => {
  try {
    const response = await commInstance.post("/login", loginCredentials);
    return response;
  } catch (error: any) {
    return error;
  }
};
