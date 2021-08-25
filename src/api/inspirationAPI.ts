import fetchData from "../common/handlers/dataFetcher";

interface InspirationDetails {
  activity: string;
  accessibility: number;
  type: string;
  participants: number;
  price: number;
  key: string;
}

export const getInspirationByType = async (type: string) => {
  const url = type === "random" ? "/" : `?type=${type}`;
  const inspirationByType = await fetchData<InspirationDetails>({
    url,
    method: "get",
  });

  return inspirationByType.activity;
};
