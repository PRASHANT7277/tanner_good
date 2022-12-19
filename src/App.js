import "./App.css";
import { Box, ChakraProvider } from "@chakra-ui/react";

import Footer from "./Components/Footer";
import AllRoute from "./Routes/AllRoutes";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Box mt="30" mb="30">
          <Navbar />
        </Box>
        <AllRoute />
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;
