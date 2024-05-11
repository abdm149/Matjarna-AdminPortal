import commInstance from "../../communicator/comm";

export const saveUser = async (data: any): Promise<any> => {
      try {
        const response = await commInstance.post(
          "/api/private/admin/create",
          data
        );
        return response;
      } catch (error: any) {
        return error;
      }
  };

  export const activateUser = async (id: any) => {
    try {
      const response = await commInstance.patch(`/api/private/user/${id}/activate`);
      return response;
    } catch (error) {
      return error;
    }
  };

  export const deactivateUser = async (id: any) => {
    try {
      const response = await commInstance.patch(`/api/private/user/${id}/deactivate`);
      return response;
    } catch (error) {
      return error;
    }
  };