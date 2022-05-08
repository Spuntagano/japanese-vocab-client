import { useState } from "react";
// import FetchRequestService from "../services/FetchRequestService";
import words from "../words";

interface IWord {
  english: string;
  japanese: string;
  kanji: string;
}

// const ENV = (window as any).ENV;

// const fetchRequestService = new FetchRequestService();

const Words = () => {
  const [search, setSearch] = useState("");
  // const [words, setWords] = useState([]);

  // useEffect(() => {
  //   requestWords();
  // }, []);

  // const requestWords = async () => {
  //   try {
  //     const response = await fetchRequestService.request({
  //        hostname: ENV.API_HOST,
  //        path: "/api/words",
  //        port: ENV.API_PORT,
  //        method: "GET",
  //        protocol: "http:",
  //      });
  //     setWords(JSON.parse(response));
  //   } catch (error: any) {
  //     console.error(error);
  //   }
  // };

  return (
    <>
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search..."
        style={{
          width: "calc(100% - 10px)",
          padding: "5px",
          marginBottom: "10px",
        }}
      />
      <table>
        <thead>
          <tr
            style={{
              textAlign: "left",
            }}
          >
            <th>English</th>
            <th>Japanese</th>
            <th>Kanji</th>
          </tr>
        </thead>
        <tbody>
          {words
            .filter((word: IWord) => {
              return (
                word.english.toLowerCase().includes(search.toLowerCase()) ||
                word.japanese.toLowerCase().includes(search.toLowerCase()) ||
                word.kanji.toLowerCase().includes(search.toLowerCase())
              );
            })
            .map((word: IWord) => (
              <tr>
                <td
                  style={{
                    width: "33.33%",
                    verticalAlign: "top",
                  }}
                >
                  {word.english}
                </td>
                <td
                  style={{
                    width: "33.33%",
                    verticalAlign: "top",
                  }}
                >
                  {word.japanese}
                </td>
                <td
                  style={{
                    width: "33.33%",
                    verticalAlign: "top",
                  }}
                >
                  {word.kanji}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Words;
