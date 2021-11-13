import Loopstudios from "./Loopstudios/Loopstudio";

const creations = [{ title: "deep earth" }, { title: "night arcade" }, { title: "soccer team vr" }, { title: "the grid" }, { title: "from up above vr" }, { title: "pocket borealis" }, { title: "the curiosity" }, { title: "make it fisheye" }];

function App() {
  return (
    <>
      <Loopstudios creations={creations} />
    </>
  );
}

export default App;
