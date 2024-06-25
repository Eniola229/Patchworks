import { Box, Typography, useTheme, Button  } from "@mui/material";
import bg from '../assets/images/boy.png';
import ReadMoreIcon from '@mui/icons-material/ReadMore';


function Aboutus() {
	return(
		<Box 
		sx={{
			width: "100%",
			background: "black",
			display: 'flex',
			flexWrap: "wrap",
			justifyContent: "center",
			alignItems: "center"
		}}
		>
			<Box 
			sx={{
				width: {xs:"90%", md:"40%" },
				height:{xs: "50vh", md:"100vh"},
				display: 'flex',
				justifyContent: "center",
				alignItems: "center"
			}}
			>
			<Box
			sx={{
				width: 400,
				height: 400,
				backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(${bg})`,
		        backgroundPosition: 'center',
		        backgroundSize: 'cover',
		        borderRadius: "20px"
			}}
			>
			</Box>
			</Box>

			<Box
			sx={{
				width: {xs:"90%", md:"50%" },
				height: "100vh",
				display: 'flex',
				justifyContent: "center",
				alignItems: "center"
			}}>
			<Box
			sx={{
				width: 400,
				height: 400,
				padding: "10% 0px 0px 0px"
			}}
			>
			<Typography 
			variant="h3"
			sx={{
				fontFamily: "monospace",
				color: "white",
				fontWeight: "bolder"
			}}
			>
			About Us
			</Typography>
			<Typography
			sx={{
				color: "white",
			}}
			>
			At PatchWork, we specialize in providing top-notch installation services for a wide range of instruments tailored to meet the unique needs of our clients. With years of experience and a team of highly skilled technicians, we are committed to delivering exceptional quality, reliability, and customer satisfaction. Whether it's for residential, commercial, or industrial applications, our expertise ensures that every installation is done with  PatchWork and care. Trust  PatchWork Instruments to bring accuracy and efficiency to your projects, ensuring seamless integration and optimal performance.
			</Typography>
			<Button 
			sx={{
				backgroundColor: "white",
				color: "black",
				margin: "10% 0px 0px 0px"
			}}
			endIcon={<ReadMoreIcon/>}
			>
			Read More
			</Button>
			</Box>
			</Box>
		</Box>
)}
export default Aboutus;