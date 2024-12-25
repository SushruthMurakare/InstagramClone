import { Cloudinary } from "@cloudinary/url-gen";
import { upload } from "cloudinary-react-native";
import { UploadApiErrorResponse } from "cloudinary-react-native/lib/typescript/src/api/upload/model/params/upload-params";

export const cld = new Cloudinary({
    cloud: {
        cloudName: process.env.EXPO_PUBLIC_CLOUDINARY_CLOUD_NAME
    }
  });

export const uploadImage = async (file: string) => {
      const options = {
        upload_preset: "Default",
        //tag: 'sample',
        unsigned: true,
      };
      return new Promise<UploadApiErrorResponse>(async (resolve, reject) => {
        //upload the image
  
        await upload(cld, {
          file,
          options: options,
          callback: (error: any, response: any) => {
            //.. handle response
            error || !response ? reject(error) : resolve(response);
          },
        });
      });
    };