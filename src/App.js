import Home from "./components/Home";
import GlobalStyles from "./styles/GlobalStyles";

//---------- Mobile Images ----------//
import deepEarthMob from "./styles/images/mobile/image-deep-earth.jpg";
import nightArcadeMob from "./styles/images/mobile/image-night-arcade.jpg";
import soccerTeamMob from "./styles/images/mobile/image-soccer-team.jpg";
import gridMob from "./styles/images/mobile/image-grid.jpg";
import fromAboveMob from "./styles/images/mobile/image-from-above.jpg";
import pocketBorealisMob from "./styles/images/mobile/image-pocket-borealis.jpg";
import curiosityMob from "./styles/images/mobile/image-curiosity.jpg";
import fisheyeMob from "./styles/images/mobile/image-fisheye.jpg";

//---------- Desktop Images ----------//
import deepEarthDesk from "./styles/images/desktop/image-deep-earth.jpg";
import nightArcadeDesk from "./styles/images/desktop/image-night-arcade.jpg";
import soccerTeamDesk from "./styles/images/desktop/image-soccer-team.jpg";
import gridDesk from "./styles/images/desktop/image-grid.jpg";
import fromAboveDesk from "./styles/images/desktop/image-from-above.jpg";
import pocketBorealisDesk from "./styles/images/desktop/image-pocket-borealis.jpg";
import curiosityDesk from "./styles/images/desktop/image-curiosity.jpg";
import fisheyeDesk from "./styles/images/desktop/image-fisheye.jpg";
import { useEffect, useState } from "react";

//---------- Desktop Creations ----------//

const mobileCreations = [
  { id: 1, name: "DEEP EARTH", img: deepEarthMob },
  { id: 2, name: "NIGHT ARCADE", img: nightArcadeMob },
  { id: 3, name: "SOCCER TEAM VR", img: soccerTeamMob },
  { id: 4, name: "THE GRID", img: gridMob },
  { id: 5, name: "FROM UP ABOVE VR", img: fromAboveMob },
  { id: 6, name: "POCKET BOREALIS", img: pocketBorealisMob },
  { id: 7, name: "THE CURIOSITY", img: curiosityMob },
  { id: 8, name: "MAKE IT FISHEYE", img: fisheyeMob },
];

//---------- Desktop Creations ----------//
const desktopCreations = [
  { id: 1, name: "DEEP EARTH", img: deepEarthDesk },
  { id: 2, name: "NIGHT ARCADE", img: nightArcadeDesk },
  { id: 3, name: "SOCCER TEAM VR", img: soccerTeamDesk },
  { id: 4, name: "THE GRID", img: gridDesk },
  { id: 5, name: "FROM UP ABOVE VR", img: fromAboveDesk },
  { id: 6, name: "POCKET BOREALIS", img: pocketBorealisDesk },
  { id: 7, name: "THE CURIOSITY", img: curiosityDesk },
  { id: 8, name: "MAKE IT FISHEYE", img: fisheyeDesk },
];

function App() {
  const [creations, setCreations] = useState();

  useEffect(() => {
    if (window.innerWidth > 800) {
      setCreations(desktopCreations);
    } else {
      setCreations(mobileCreations);
    }
  }, []);

  return (
    <>
      <GlobalStyles />

      <Home creations={creations} />
    </>
  );
}

export default App;
