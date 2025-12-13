import toast from "react-hot-toast";
import axiosInstance from "./axiosInstance";

export const addEmployee = async (data: any) => {
  try {
    const res = await axiosInstance.post("/employees/add", data);

    toast.success("Employee Added successfully!");
    return res;
  } catch (error) {
    //@ts-ignore
    toast.error(error.response.data.message);
    return error;
  }
};
