import axios, {
  AxiosHeaders,
  HeadersDefaults,
  RawAxiosRequestHeaders,
} from "axios";
// import { NavigationService } from 'navigators/navigation-service';
const defaultHeaders:
  | RawAxiosRequestHeaders
  | AxiosHeaders
  | Partial<HeadersDefaults> = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const instance = axios.create({
  headers: defaultHeaders,
  // timeout: 90000,
});
instance.defaults.baseURL = process.env.REACT_APP_API_URL;
instance.interceptors.request.use(async (config: any) => {
  try {
    // const accessToken = await AsyncStorage.getItem(AsyncStorageKey.AccessToken);

    const accessToken = null;
    config.headers = {
      ...config.headers,
    };

    if (accessToken) {
      // append token to request headers in case of available access token in async storage
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${accessToken}`,
      };
    }
  } catch (e) {
    console.error("Error reading access token in async storage: ", e);
  } finally {
    return config;
  }
});

instance.interceptors.response.use(
  async (response) => {
    if (response.data) {
      return response.data;
    }
    return Promise.reject({ message: "" });
    // return Promise.resolve({ message: response });
  },
  async (error) => {
    console.log("err11", error);
    //   if (error?.status === 401) {
    //     // await asyncStorageService.clearAccessToken();
    //     //   NavigationService.reset(Screen.Login);
    //     return Promise.reject(error);
    //   }
    //   if (error?.status === ResponseCode.FAILED_VALIDATION) {
    //     console.log('err422', error);

    //     // const errors: Array<any> = Object.values(
    //     //   error?.response?.data?.errors,
    //     // )[0] as Array<any>;
    //     return Promise.reject(error?.message);
    //   }
    //   if (error?.status === ResponseCode.INTERNAL_SERVER_ERROR) {
    //     return Promise.reject(
    //       error?.response?.data?.errors?.msg ?? 'Hệ thống đang lỗi',
    //     );
    //   }

    // Toast.show({
    //   type: 'error',
    //   text1: error?.response?.data?.message,
    // });
    return Promise.reject(error?.response?.data?.message || "");
  }
);

export const get = async (path: string, params: any) => {
  try {
    const res = await instance.get(path, {
      params: params,
    });
    return res?.data;
  } catch (error) {
    console.log("error33", error);
    return null;
  }
};

export const post = async (path: string, params: any) => {
  const res = await instance.post(path, params);
  return res;
};

export const postFormData = async (path: string, formData: FormData) => {
  const res = await instance.post(path, formData, {
    headers: { ...defaultHeaders, "Content-Type": "multipart/form-data" },
  });
  return res;
};

export const put = async (path: string, params: any) => {
  const res = await instance.put(path, params);

  return res;
};

export const del = async (path: string) => {
  const res = await instance.delete(path);
  return res;
};
