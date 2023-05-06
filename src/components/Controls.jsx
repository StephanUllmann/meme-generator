import { Box, TextField, Button, Grid, Slider } from "@mui/material";
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
    defaultTextSize,
    setTopTextSize,
    setBottomTextSize,
    bottomTextSize,
    topTextSize,
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
    setTopTextSize(defaultTextSize);
    setBottomTextSize(defaultTextSize);
    setTextBottom("");
    textTopEl.value = "";
    textBottomEl.value = "";
    setTTX(defaultX);
    setTTY(defaultTopY);
    setTBX(defaultX);
    setTBY(defaultBottomY);
  };

  const handleFileInput = (newFile) => setFile(newFile);

  const download = () => {
    domtoimage.toBlob(document.getElementById("meme")).then(function (blob) {
      saveAs(blob, `${fileName}.png`);
    });
  };

  const handleSlider = (e) => {
    const slider = e.target.name;
    const value = e.target.value;
    if (slider === "text-top-size") setTopTextSize(value);
    if (slider === "text-bottom-size") setBottomTextSize(value);
    if (slider === "text-top-posX") setTTX(value);
    if (slider === "text-top-posY") setTTY(value);
    if (slider === "text-bottom-posX") setTBX(value);
    if (slider === "text-bottom-posY") setTBY(value);
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
          <Grid container marginBottom={5}>
            <Grid item>
              <TextField
                label="Text Top"
                id="text-top"
                onChange={handleInput}
                // multiline
                maxRows={4}
                onKeyDown={handleKeydown}
                color="success"
              />
            </Grid>
            <Grid item width={100}>
              <Slider
                label="size"
                aria-label="Temperature"
                value={topTextSize}
                // getAriaValueText="something"
                color="success"
                id="text-top-size"
                name="text-top-size"
                onChange={handleSlider}
              />
              <Slider
                label="Position-X"
                aria-label="Temperature"
                value={ttx}
                // getAriaValueText="something"
                color="warning"
                id="text-top-posX"
                name="text-top-posX"
                onChange={handleSlider}
              />
            </Grid>
            <Grid item>
              <Slider
                label="Position-Y"
                sx={{
                  '& input[type="range"]': {
                    WebkitAppearance: "slider-vertical",
                  },
                }}
                orientation="vertical"
                // defaultValue={tty}
                value={tty}
                aria-label="Temperature"
                // valueLabelDisplay="auto"
                color="error"
                id="text-top-posY"
                name="text-top-posY"
                onChange={handleSlider}
                max={95}

                // onKeyDown={preventHorizontalKeyboardNavigation}
              />
            </Grid>
          </Grid>

          <Grid container marginBottom={5}>
            <Grid item>
              <TextField
                label="Text Bottom"
                id="text-bottom"
                onChange={handleInput}
                // multiline
                maxRows={4}
                onKeyDown={handleKeydown}
              />
            </Grid>
            <Grid item width={100}>
              <Slider
                aria-label="Temperature"
                value={bottomTextSize}
                // getAriaValueText="something"
                // color="secondary"
                id="text-bottom-size"
                name="text-bottom-size"
                onChange={handleSlider}
              />
              <Slider
                label="Position-X"
                aria-label="Temperature"
                value={tbx}
                // getAriaValueText="something"
                color="warning"
                id="text-bottom-posX"
                name="text-bottom-posX"
                onChange={handleSlider}
              />
            </Grid>
            <Grid item>
              <Slider
                label="Position-Y"
                sx={{
                  '& input[type="range"]': {
                    WebkitAppearance: "slider-vertical",
                  },
                }}
                orientation="vertical"
                value={tby}
                aria-label="Temperature"
                valueLabelDisplay="auto"
                color="error"
                id="text-bottom-posY"
                name="text-bottom-posY"
                onChange={handleSlider}
                max={95}
                // onKeyDown={preventHorizontalKeyboardNavigation}
              />
            </Grid>
          </Grid>
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
