import Routes from "../routes";
import getQuoteApi from "../api/quoteAPI";

export default function App() {
  getQuoteApi().then((result) => console.log(result));

  return (
    <div>
      <Routes />
    </div>
  );
}
