import { createContext, useEffect, useState } from "react";
import { fetchData } from "../client";

export const MemeContext = createContext();

export default function MemeContextProvider({ children }) {
  const [memeArr, setMemeArr] = useState([]);
  const [randomMeme, setRandomMeme] = useState("");
  const [randomizeMeme, setRandomizeMeme] = useState(false);
  const [textTop, setTextTop] = useState("");
  const [textBottom, setTextBottom] = useState("");
  const [file, setFile] = useState(null);
  const [imageURL, setImageURL] = useState(null);

  const loadNewMemes = () => {
    fetchData("https://api.imgflip.com/get_memes")
      .then((data) => {
        if (data.success) {
          setMemeArr(data.data.memes);
          setRandomMeme(data.data.memes[Math.floor(Math.random() * 100)]);
        }
        if (!data.success) throw new Error("no success");
      })
      .catch((err) => console.log(err));
    console.log("new content loaded");
  };

  useEffect(() => {
    loadNewMemes();
  }, []);

  useEffect(() => {
    if (Math.random() < 0.05) loadNewMemes();
    else if (randomizeMeme) {
      const randomIndex = Math.floor(Math.random() * memeArr.length);
      console.log(randomIndex);
      setRandomMeme(memeArr[randomIndex]);
    }
    setRandomizeMeme(false);
  }, [randomizeMeme, memeArr]);

  useEffect(() => {
    if (file) {
      setImageURL(URL.createObjectURL(file));
    }
  }, [file]);

  console.log(randomMeme);
  return (
    <MemeContext.Provider
      value={{
        memeArr,
        setRandomizeMeme,
        randomMeme,
        setTextTop,
        textTop,
        setTextBottom,
        textBottom,
        file,
        setFile,
        imageURL,
        setImageURL,
      }}
    >
      {children}
    </MemeContext.Provider>
  );
}
