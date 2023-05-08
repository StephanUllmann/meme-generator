import { createContext, useEffect, useState } from "react";
import { fetchData } from "../client";

export const MemeContext = createContext();

export default function MemeContextProvider({ children }) {
  const defaultTextSize = 30;

  const [memeArr, setMemeArr] = useState([]);
  const [randomMeme, setRandomMeme] = useState(0);
  const [randomizeMeme, setRandomizeMeme] = useState(false);
  const [textTop, setTextTop] = useState("");
  const [textMiddle, setTextMiddle] = useState("");

  const [textBottom, setTextBottom] = useState("");
  const [file, setFile] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [topTextSize, setTopTextSize] = useState(defaultTextSize);
  const [middleTextSize, setMiddleTextSize] = useState(defaultTextSize);
  const [bottomTextSize, setBottomTextSize] = useState(defaultTextSize);
  // Text Position
  const defaultX = 50;
  const defaultTopY = 85;
  const defaultBottomY = 5;
  const defaultMiddleY = 50;

  const [ttx, setTTX] = useState(defaultX);
  const [tty, setTTY] = useState(defaultTopY);
  const [tmx, setTMX] = useState(defaultX);
  const [tmy, setTMY] = useState(defaultMiddleY);

  const [tbx, setTBX] = useState(defaultX);
  const [tby, setTBY] = useState(defaultBottomY);

  // Color
  const defaultColor = "rgb(255, 255, 255)";
  const [colorTop, setColorTop] = useState(defaultColor);
  const [colorMiddle, setColorMiddle] = useState(defaultColor);
  const [colorBottom, setColorBottom] = useState(defaultColor);

  const loadNewMemes = () => {
    fetchData("https://api.imgflip.com/get_memes")
      .then((data) => {
        if (data.success) {
          setMemeArr(data.data.memes);
          setRandomMeme(Math.floor(Math.random() * 100));
        }
        if (!data.success) throw new Error("no success");
      })
      .catch((err) => console.log(err));
    // console.log("new content loaded");
  };

  useEffect(() => {
    loadNewMemes();
  }, []);

  useEffect(() => {
    if (Math.random() < 0.05) loadNewMemes();
    else if (randomizeMeme) {
      const randomIndex = Math.floor(Math.random() * memeArr.length);
      // console.log(randomIndex);
      setRandomMeme(randomIndex);
    }
    setRandomizeMeme(false);
  }, [randomizeMeme, memeArr]);

  useEffect(() => {
    if (file) {
      setImageURL(URL.createObjectURL(file));
    }
  }, [file]);

  // console.log(randomMeme);
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
        topTextSize,
        setTopTextSize,
        bottomTextSize,
        setBottomTextSize,
        defaultTextSize,
        ttx,
        tty,
        tbx,
        tby,
        setTBX,
        setTBY,
        setTTX,
        setTTY,
        defaultX,
        defaultTopY,
        defaultBottomY,
        defaultColor,
        colorTop,
        setColorTop,
        colorMiddle,
        setColorMiddle,
        colorBottom,
        setColorBottom,
        middleTextSize,
        setMiddleTextSize,
        tmx,
        setTMX,
        tmy,
        setTMY,
        defaultMiddleY,
        textMiddle,
        setTextMiddle,
        setRandomMeme,
      }}
    >
      {children}
    </MemeContext.Provider>
  );
}
