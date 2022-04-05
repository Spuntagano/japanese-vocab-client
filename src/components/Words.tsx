import { useEffect, useState } from "react";
import FetchRequestService from "../services/FetchRequestService";

interface IWord {
  english: string;
  japanese: string;
}

const ENV = (window as any).ENV

const fetchRequestService = new FetchRequestService();

const Words = () => {
  const [search, setSearch] = useState("");
  const [words, setWords] = useState([]);

  useEffect(() => {
    requestWords();
  }, []);

  const requestWords = async () => {
    try {
      const response = await fetchRequestService.request({
        hostname: ENV.API_HOST,
        path: "/api/words",
        port: ENV.API_PORT,
        method: "GET",
        protocol: "http:",
      });

      setWords(JSON.parse(response));
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <>
      <input value={search} onChange={(event) => setSearch(event.target.value)} />
      <table>
        <thead>
          <tr>
            <th>English</th>
            <th>Japanese</th>
          </tr>
        </thead>
        <tbody>
          {words
            .filter((word: IWord) => {
              return word.english.includes(search) || word.japanese.includes(search);
            })
            .map((word: IWord) => (
              <tr>
                <td>{word.english}</td>
                <td>{word.japanese}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Words;
