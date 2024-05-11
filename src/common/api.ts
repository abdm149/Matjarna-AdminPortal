import commInstance from "../communicator/comm";

export const uploadImage = async (file: File): Promise<string | undefined> => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await commInstance.post(
      "/api/private/image/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch {
    return undefined;
  }
};

export const fetchTableData = async (
  url: any,
  config: any,
  params: any = {}
): Promise<any> => {
  params = params || {};  
  if(params.sort){
  const sorting = [];
  for (let i = 0; i < params.sort.length; i++) {
    const sortItem = params.sort[i];
    if (sortItem.field.includes(",")) {
      const [field1, field2, field3] = sortItem.field.split(",");
      sorting.push(`${field1},${field2}`, `${field3},${sortItem.dir}`);
    } else {
      sorting.push(`${sortItem.field},${sortItem.dir}`);
    }
  }
  params.sort = sorting;
}

  for (let i = 0; i < params.filter.length; i++) {
    params[params.filter[i]?.field] = params.filter[i]?.value;
  }
  params.filter = [];
  try {
    const response = await commInstance.get(url, {
      params: {
        ...params,
        page: params.page - 1,
      },
      paramsSerializer: {
        indexes: null,
      },
    });
    const data = response.data.results;
    const lastPage = Math.ceil(response.data.totalNumber / 10);
    return { data: data, last_page: lastPage };
  } catch (error) {
    return error;
  }
};
