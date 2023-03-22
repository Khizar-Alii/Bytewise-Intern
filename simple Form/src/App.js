import Form from "./My Components/Form";
import SubButton from "./My Components/SubButton";

const mystyle = {
  padding: "10px",
  fontFamily: "monospace",
  textAlign : 'center'
};
const mainStyle = {
  backgroundColor : 'cyan',
  opacity : '0.8',
  height : '590px'
}
function App() {
  return (
    <div className="App" style={mainStyle}>
      <h1 style={mystyle}>Subscribe</h1>
      <h2 style={mystyle}>Sign Up with your Email address to receive news and updates.</h2>
      <Form/>
      <SubButton/>
    </div>
  );
}

export default App;
