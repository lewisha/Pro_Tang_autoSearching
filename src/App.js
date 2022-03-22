import { useMemo, useState } from "react";
import "./styles.css";

const SearchResult = ({ searchRet, setInputVal }) => {
  if (!searchRet.length) {
    return null;
  }

  return (
    <ul>
      {searchRet.map((ele, index) => {
        return (
          <li key={`${ele}-${index}`} onClick={() => setInputVal(ele)}>
            {ele}
          </li>
        );
      })}
    </ul>
  );
};

export default function App() {
  const [keywords] = useState(["Apple iPad", "iPhone", "iWatch"]);
  const [inputVal, setInputVal] = useState("");

  const searchRet = useMemo(() => {
    return keywords.filter((keyword) => {
      if (!inputVal) {
        return false;
      }
      return keyword.toLowerCase().startsWith(inputVal.toLowerCase());
    });
  }, [inputVal, keywords]);

  return (
    <div className="App">
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <SearchResult searchRet={searchRet} setInputVal={setInputVal} />
    </div>
  );
}
