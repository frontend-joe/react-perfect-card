import Card from "./ThePerfectCard";

function App() {
  return (
    <div style={{ width: "500px", margin: "0 auto" }}>
      <Card
        isFlex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        padding="2rem"
        margin="0 0 2rem"
        background="linear-gradient(to right, #D763CD, #8F44FD)"
        border="1px solid white"
      >
        Card Content
      </Card>
    </div>
  );
}

export default App;
