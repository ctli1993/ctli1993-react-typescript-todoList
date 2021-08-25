import Routes from "../routes";
import { getInspiration, getInspirationByType } from "../api/inspirationAPI";

export default function App() {
  getInspiration().then((result) => console.log(result));
  getInspirationByType("recreational").then((result) => console.log(result));

  return <Routes />;
}
