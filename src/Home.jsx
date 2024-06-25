import Header from "./components/Header";
import Front from "./components/Front";
import Sectionone from "./components/Sectionone";
import Sectiontwo from "./components/Sectiontwo";
import Testimony from "./components/Testimony";
import Aboutus from "./components/Aboutus";
import Footer from "./components/Footer";
import { Box } from "@mui/material";

function Home() {

	return (
		<Box
		sx={{
			background: "black"
		}}
		>
		<Header/>
		<Front/>
		<Sectionone/>
		<Sectiontwo/>
		<Testimony/>
		<Aboutus/>
		<Footer/>
		</Box>
)}

export default Home;