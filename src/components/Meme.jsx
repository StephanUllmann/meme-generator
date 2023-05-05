import { useContext } from "react";
import { MemeContext } from "../contexts/MemeContext";
// import "../css/Meme.css";
import { Card, CardMedia, Typography } from "@mui/material";

export default function Meme() {
  const { randomMeme, textTop, textBottom, file, imageURL } =
    useContext(MemeContext);

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
      <Typography
        sx={{
          position: "absolute",
          top: 15,
          textTransform: "uppercase",
          color: "white",
          textShadow:
            "1px 1px 0 black, -1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          fontSize:
            imgWidth / imgHeight > 0.75
              ? 27.5
              : imgWidth / imgHeight > 0.5
              ? (imgWidth / imgHeight) * 45
              : (imgWidth / imgHeight) * 100,
          maxWidth: 485,
          // backgroundColor: "#eeeeee55",
        }}
        variant="h2"
        fontFamily={"Oswald"}
      >
        {/* <pre>{textTop}</pre> */}
        {textTop}
      </Typography>
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
          bottom: 15,
          textTransform: "uppercase",
          color: "white",
          textShadow:
            "1px 1px 0 black, -1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          // fontSize: 27.5,
          fontSize:
            imgWidth / imgHeight > 0.75
              ? 27.5
              : imgWidth / imgHeight > 0.5
              ? (imgWidth / imgHeight) * 45
              : (imgWidth / imgHeight) * 100,
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
