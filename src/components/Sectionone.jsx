import { Box, Typography, useTheme, Button  } from "@mui/material";
import bg from '../assets/images/guiter.jpg';
import ReadMoreIcon from '@mui/icons-material/ReadMore';


function Sectionone() {
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
				width: {xs:"90%", md:"50%" },
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
			Music Sound Better with you
			</Typography>
			<Typography
			sx={{
				color: "white",
			}}
			>
			We believe that music is an essential part of life, and we’re here to make it sound even better.  Specializing in the installation and sales of musical instruments, we offer expert services to ensure your instruments are perfectly set up and ready to play. 
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
export default Sectionone;