import { useState } from "react";
import axios from "axios";

import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";

const App = () => {
  const [page, setPage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  const [word, setWord] = useState();

  const fetchImages = async (pag, keyWord) => {
    const params = new URLSearchParams({
      key: "43605256-eead80bfe3e75f279f48bfba2",
      image_type: "photo",
      orientation: "horizontal",
      page: pag,
      per_page: 12,
      q: keyWord,
    });

    return await axios.get(`https://pixabay.com/api/?${params}`).finally(() => {
      setIsLoading(false);
    });
  };

  const handleSearch = async (ev) => {
    ev.preventDefault();
    setIsLoading(true);

    const word = ev.target.elements.inputSearch.value;
    const response = await fetchImages(1, word);

    setPage(2);
    setData(response.data.hits);
    setWord(word);
  };

  const handleFetchMore = async (ev) => {
    ev.preventDefault();
    setIsLoading(true);

    const response = await fetchImages(page, word);
    setData([...data, ...response.data.hits]);
    setPage(page + 1);
  };

  return (
    <>
      <div className="App">
        <Searchbar handleSubmit={handleSearch} />
        {data && (
          <>
            <ImageGallery data={data} />
            <Button buttonHandle={handleFetchMore} />
          </>
        )}
        {isLoading && <Loader />}
      </div>
    </>
  );
};

export default App;
