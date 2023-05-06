import { useContext } from "react";
import { MemeContext } from "../contexts/MemeContext";
// import "../css/Meme.css";
import { Card, CardMedia, Typography } from "@mui/material";

export default function Meme() {
  const {
    randomMeme,
    textTop,
    textBottom,
    file,
    imageURL,
    topTextSize,
    bottomTextSize,
    ttx,
    tty,
    tbx,
    tby,
    colorTop,
    colorMiddle,
    colorBottom,
    middleTextSize,
    tmx,
    tmy,
    textMiddle,
  } = useContext(MemeContext);

  const url = imageURL || randomMeme.url;
  const name = file?.name || randomMeme.name;
  const imgWidth = imageURL
    ? 500
    : // : randomMeme.height > 700
      // ? randomMeme.width * 0.66
      randomMeme.width;
  const imgHeight = imageURL
    ? 500
    : // : randomMeme.height > 700
      // ? randomMeme.height * 0.66
      randomMeme.height;

  return (
    <Card sx={{ position: "relative" }} id="meme">
      <CardMedia
        sx={{
          alignSelf: "center",
          // height: 600,
          width: 400,
          display: "block",
          aspectRatio: `${imgWidth} / ${imgHeight}`,
        }}
        // className="Meme"
        image={url}
        title={name}
      />
      <Typography
        sx={{
          position: "absolute",
          bottom: `${tty}%`,
          textTransform: "uppercase",
          color: colorTop,
          textShadow:
            "1.25px 1.25px 0 black, -1.25px 1.25px 0 black, -1.25px -1.25px 0 black, 1.25px -1.25px 0 black",
          left: `${ttx}%`,
          transform: "translateX(-50%)",
          textAlign: "center",
          fontSize: topTextSize,
          // imgWidth / imgHeight > 0.75
          //   ? 27.5
          //   : imgWidth / imgHeight > 0.5
          //   ? (imgWidth / imgHeight) * 45
          //   : (imgWidth / imgHeight) * 100,
          maxWidth: 485,
          // backgroundColor: "#eeeeee55",
        }}
        variant="h2"
        fontFamily={"Oswald"}
      >
        {/* <pre>{textTop}</pre> */}
        {textTop}
      </Typography>

      <Typography
        sx={{
          position: "absolute",
          bottom: `${tmy}%`,
          textTransform: "uppercase",
          color: colorMiddle,
          textShadow:
            "1.25px 1.25px 0 black, -1.25px 1.25px 0 black, -1.25px -1.25px 0 black, 1.25px -1.25px 0 black",
          left: `${tmx}%`,
          transform: "translateX(-50%)",
          textAlign: "center",
          fontSize: middleTextSize,
          // imgWidth / imgHeight > 0.75
          //   ? 27.5
          //   : imgWidth / imgHeight > 0.5
          //   ? (imgWidth / imgHeight) * 45
          //   : (imgWidth / imgHeight) * 100,
          maxWidth: 485,
          // backgroundColor: "#eeeeee55",
        }}
        variant="h2"
        fontFamily={"Oswald"}
      >
        {/* <pre>{textTop}</pre> */}
        {textMiddle}
      </Typography>

      <Typography
        sx={{
          position: "absolute",
          bottom: `${tby}%`,

          textTransform: "uppercase",
          color: colorBottom,
          textShadow:
            "1.25px 1.25px 0 black, -1.25px 1.25px 0 black, -1.25px -1.25px 0 black, 1.25px -1.25px 0 black",
          left: `${tbx}%`,
          transform: "translateX(-50%)",
          textAlign: "center",
          // fontSize: 27.5,
          fontSize: bottomTextSize,
          // imgWidth / imgHeight > 0.75
          //   ? 27.5
          //   : imgWidth / imgHeight > 0.5
          //   ? (imgWidth / imgHeight) * 45
          //   : (imgWidth / imgHeight) * 100,
          maxWidth: 485,
          // backgroundColor: "#eeeeee55",
        }}
        variant="h2"
        fontFamily={"Oswald"}
      >
        {/* <pre>{textBottom}</pre> */}
        {textBottom}
      </Typography>
    </Card>
  );
}
