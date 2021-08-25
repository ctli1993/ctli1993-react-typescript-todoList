import axios from "axios";

type AxiosType = "get";
const BASE_URL = "http://www.boredapi.com/api/activity"; // this is a free api from https://www.boredapi.com/
axios.defaults.baseURL = BASE_URL;

export default async function fetchData<T>({
  url,
  method,
}: {
  url: string;
  method: AxiosType;
}) {
  const { data } = await axios[method](`${BASE_URL}${url}`);

  return data;
}
