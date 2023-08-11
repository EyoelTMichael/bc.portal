import axios, { AxiosRequestConfig } from "axios";
import { BaseQueryFn } from "@reduxjs/toolkit/dist/query";

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" },
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      uploadProgress?:AxiosRequestConfig["onUploadProgress"]
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        // params: { ...params, access_token: "token" },
        params: { ...params},
      });
      return { data: result.data };
    } catch (axiosError) {
      return {
        error: axiosError,
      };
    }
  };