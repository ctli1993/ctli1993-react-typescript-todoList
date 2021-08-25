import fetchData from "../common/dataFetcher";

interface InspirationDetails {
  activity: string;
  accessibility: number;
  type: string;
  participants: number;
  price: number;
  key: string;
}

export const getInspiration = async () => {
  const inspiration = await fetchData<InspirationDetails>({
    url: "/",
    method: "get",
  });

  return inspiration;
};

export const getInspirationByType = async (type: string) => {
  const inspirationByType = await fetchData<InspirationDetails>({
    url: `?type=${type}`,
    method: "get",
  });

  return inspirationByType;
};
