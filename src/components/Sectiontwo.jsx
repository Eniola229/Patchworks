import { Box, Typography, useTheme, Button  } from "@mui/material";
import bg from '../assets/images/keyboard.jpg';
import ReadMoreIcon from '@mui/icons-material/ReadMore';


function Sectiontwo() {
	return(
		<Box 
		sx={{
			width: "100%",
			background: "black",
			display: 'flex',
			flexWrap:"wrap",
			justifyContent: "center",
			alignItems: "center"
		}}
		>
			<Box
			sx={{
				width: {xs:"90%", md:"50%" },
				height: { xs:"auto", md:"100vh"},
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
			Elevate Your Music with Us
			</Typography>
			<Typography
			sx={{
				color: "white",
			}}
			>
			We are passionate about enhancing your musical journey. Our expert team provides top-notch installation services and offers a wide selection of high-quality musical instruments for sale. 
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
			<Box 
			sx={{
				width: {xs:"90%", md:"50%" },
				height:{xs: "auto", md:"100vh"},
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

		</Box>
)}
export default Sectiontwo;


