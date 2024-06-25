import { Box, Typography, useTheme, Button  } from "@mui/material";
import bg from '../assets/images/keyboard.jpg';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function Sectiontwo() {
	return(
     	<Box 
		sx={{
			width: "100%",
			background: "black",
			justifyContent: "center",
			alignItems: "center",
			marginTop:"4%",
		}}
		>
		<Typography
		variant="h5"
		sx={{
			color: 'white',
			marginLeft: {xs:"0%", md: 10},
			textAlign: "center",
			fontWeight: "bolder"
		}}
		>
		Testimonies
		</Typography>
		<Typography
		variant="body1"
		sx={{
			color: 'white',
			marginLeft:{xs:"0%", md: 10},
			textAlign: "center",
			fontWeight: "bolder"
		}}
		>
		This are what some of our customer says
		</Typography>
		<Box
		sx={{
			display: 'flex',
      		flexWrap:'wrap',
			justifyContent: "space-around",
			alignItems: "center",
			marginTop: "2%",
			gap:4,
		}}
		>
		<Box 
		sx={{
			height: 200,
			width: 250,
			border: "1px solid white",
			borderRadius: "20px"
		}}
		>
		<Typography 
		variant="h5"
		sx={{
			color: "white",
			fontWeight: "bolder",
			margin: 2
		}}
		>
		<AccountCircleIcon 
		sx={{
			height: 40,
			width: 40
		}}
		/> Adeyemi Joshua
		</Typography>
		<Typography 
		sx={{
			color: "white",
			margin: 2,
			fontSize: "0.75rem"
		}}
		>
			The team at PatchWork did an amazing job installing my new piano. They were professional, friendly, and ensured everything was perfectly tuned.
		</Typography>
		</Box>

		<Box 
		sx={{
			height: 200,
			width: 250,
			border: "1px solid white",
			borderRadius: "20px"
		}}
		>
		<Typography 
		variant="h5"
		sx={{
			color: "white",
			fontWeight: "bolder",
			margin: 2
		}}
		>
		<AccountCircleIcon 
		sx={{
			height: 40,
			width: 40
		}}
		/> James John
		</Typography>
		<Typography 
		sx={{
			color: "white",
			margin: 2,
			fontSize: "0.75rem"
		}}
		>
			As a beginner, I was nervous about setting up my drum kit, but PatchWork made it so easy. They installed everything quickly and showed me how to maintain it properly. 
		</Typography>
		</Box>

		<Box 
		sx={{
			height: 200,
			width: 250,
			border: "1px solid white",
			borderRadius: "20px"
		}}
		>
		<Typography 
		variant="h5"
		sx={{
			color: "white",
			fontWeight: "bolder",
			margin: 2
		}}
		>
		<AccountCircleIcon 
		sx={{
			height: 40,
			width: 40
		}}
		/> Michael T
		</Typography>
		<Typography 
		sx={{
			color: "white",
			margin: 2,
			fontSize: "0.75rem"
		}}
		>
			I needed a new sound system for my studio, and PatchWork exceeded my expectations. They installed everything flawlessly, and the sound quality is phenomenal. 
		</Typography>
		</Box>

		<Box 
		sx={{
			height: 200,
			width: 250,
			border: "1px solid white",
			borderRadius: "20px"
		}}
		>
		<Typography 
		variant="h5"
		sx={{
			color: "white",
			fontWeight: "bolder",
			margin: 2,
		}}
		>
		<AccountCircleIcon 
		sx={{
			height: 40,
			width: 40
		}}
		/>Emily R.
		</Typography>
		<Typography 
		sx={{
			color: "white",
			margin: 2,
			fontSize: "0.75rem"
		}}
		>
			As a beginner, I was nervous about setting up my drum kit, but PatchWork made it so easy. They installed everything quickly and showed me how to maintain it properly. 
		</Typography>
		</Box>

		</Box>
		</Box>
)}
export default Sectiontwo;


