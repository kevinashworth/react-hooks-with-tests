import { useState, useEffect, useRef } from "react";
import { useDebounce } from "../hooks";
import Typography from '@mui/material/Typography';

// API search function
function searchCharacters(search) {
  const apiKey = "f9dfb1e8d466d36c27850bedd2047687";
  return fetch(
    `https://gateway.marvel.com/v1/public/comics?apikey=${apiKey}&titleStartsWith=${search}`,
    {
      method: "GET",
    }
  )
    .then((r) => r.json())
    .then((r) => r.data.results)
    .catch((error) => {
      console.error(error);
      return [];
    });
}

const TestUseDebounce = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  // Searching status (whether there is pending API request)
  const [isSearching, setIsSearching] = useState(false);
  // Debounce search term so that it only gives us latest value ...
  // ... if searchTerm has not been updated within last 500ms.
  // The goal is to only have the API call fire when user stops typing ...
  // ... so that we aren't hitting our API rapidly.
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // Effect for API call
  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setIsSearching(true);
        searchCharacters(debouncedSearchTerm).then((results) => {
          setIsSearching(false);
          setResults(results);
        });
      } else {
        setResults([]);
        setIsSearching(false);
      }
    },
    [debouncedSearchTerm] // Only call effect if debounced search term changes
  );

  return (
    <div>
      <input
        placeholder="Search Marvel Comics"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {isSearching && <div>Searching ...</div>}

      {results.map((result) => (
        <div key={result.id}>
          <Typography variant="h4">{result.title}</Typography>
          <img
            alt={result.title}
            src={`${result.thumbnail.path}/portrait_incredible.${result.thumbnail.extension}`}
          />
        </div>
      ))}
    </div>
  );
}

export default TestUseDebounce;
