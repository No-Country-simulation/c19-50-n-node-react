import { axios } from "@/lib/axios";


export const fetchCategories = async () => {
  try {
    const response = await axios.get("/categories");
    return { ok: true, data: response.data };
  } catch (error) {
    console.log(error);
    return { ok: false, data: "Hubo un error" };
  }
}