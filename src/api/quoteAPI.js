export default async function getInspirationApi() {
  const apiUrl = 'http://www.boredapi.com/api/activity/';
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data.activity;
}
