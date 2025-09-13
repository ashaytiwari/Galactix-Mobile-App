import { axiosClient } from "@axiosClient/index";

import { handleRESTServerInteractionError } from "@utilities/serviceHandlers";

class CommonServices {

  fileUpload = (uri: any, fileName: string, fileType: string) => async (dispatch: any) => {
    try {
      const fileFormData = new FormData();

      fileFormData.append('file', {
        uri, name: fileName, type: fileType
      });

      const response = await axiosClient.post('uploadFile', fileFormData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      if (response.data.statusCode !== 200) {
        throw response.data;
      }

      return response;

    } catch (error) {
      handleRESTServerInteractionError(dispatch, error);
    }
  };

};

export const commonServices = new CommonServices();