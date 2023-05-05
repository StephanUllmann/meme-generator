// import "./App.css";
import "@fontsource/oswald";
import Meme from "./components/Meme";
import Controls from "./components/Controls";
import CssBaseline from "@mui/material/CssBaseline";
import { Typography, Grid } from "@mui/material";

function App() {
  return (
    <Grid
      container
      className="App"
      sx={{
        backgroundColor: "#ececec",
        minHeight: "100vh",
        color: "#0a1929",
        justifyContent: "center",
        alignContent: "start",
      }}
    >
      <CssBaseline />
      <Typography variant="h1" fontFamily={"Oswald"} textAlign={"center"}>
        meme generator!
      </Typography>
      <Grid container justifyContent={"center"} sx={{ marginTop: 4, gap: 10 }}>
        <Grid item>
          <Meme />
        </Grid>
        <Grid item>
          <Controls />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
