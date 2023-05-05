import { Box, TextField, Button, Grid } from "@mui/material";
import { MuiFileInput } from "mui-file-input";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import { useContext } from "react";
import { MemeContext } from "../contexts/MemeContext";

export default function Controls() {
  const {
    setTextTop,
    setTextBottom,
    setRandomizeMeme,
    setFile,
    file,
    setImageURL,
    randomMeme,
    textTop,
  } = useContext(MemeContext);

  const textTopEl = document.getElementById("text-top");
  const textBottomEl = document.getElementById("text-bottom");

  const fileName = file
    ? `${file.name}-${textTop}`
    : `${randomMeme.name}-${textTop}`;

  const handleInput = ({ target }) => {
    if (target.id === "text-top") setTextTop(target.value);
    if (target.id === "text-bottom") setTextBottom(target.value);
  };

  const handleKeydown = (e) => {
    if (e.key === "Enter") {
      e.target.value = "";
      e.target.blur();
    }
  };

  const randomize = () => {
    setImageURL(null);
    setRandomizeMeme(true);
    setTextTop("");
    setTextBottom("");
    textTopEl.value = "";
    textBottomEl.value = "";
  };

  const handleFileInput = (newFile) => setFile(newFile);

  const download = () => {
    domtoimage.toBlob(document.getElementById("meme")).then(function (blob) {
      saveAs(blob, `${fileName}.png`);
    });
  };

  return (
    <Grid container direction={"column"} gap={3}>
      <Grid item>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              label="Text Top"
              id="text-top"
              onChange={handleInput}
              // multiline
              maxRows={4}
              onKeyDown={handleKeydown}
              color="success"
            />
          </div>
          <div>
            <TextField
              label="Text Bottom"
              id="text-bottom"
              onChange={handleInput}
              // multiline
              maxRows={4}
              onKeyDown={handleKeydown}
            />
          </div>
        </Box>
      </Grid>
      <Grid item>
        <MuiFileInput
          value={file}
          onChange={handleFileInput}
          label="Upload"
          placeholder="your pic"
          id="upload"
          sx={{ width: 220, transform: "translateX(10px)" }}
        />
      </Grid>
      <Grid item>
        <Button
          onClick={randomize}
          variant="contained"
          color="warning"
          sx={{ width: 220, transform: "translateX(10px)" }}
        >
          Random Meme
        </Button>
      </Grid>
      <Grid item>
        <Button
          onClick={download}
          variant="outlined"
          color="success"
          sx={{ width: 220, transform: "translateX(10px)" }}
        >
          Download Meme
        </Button>
      </Grid>
    </Grid>
  );
}
