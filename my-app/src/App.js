import { Input } from "./Components/Input";
import { Image } from "./Components/Image";
import { Pagination } from "./Components/Pagination";

function App() {
  return (
    <div className="container">
      <Input  />

      <Image borderRadius="510px"  fit="cover" height="510px" width="500px" alt="demoimg" src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE.jpg"   />

      <Pagination total={10}  />
    </div>
  );
}

export default App;
