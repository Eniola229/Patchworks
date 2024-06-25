import { Box, Typography, useTheme, Button  } from "@mui/material";
import bg from '../assets/images/homebg.jpg';
import VerifiedIcon from '@mui/icons-material/Verified';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

function Front() {

	const theme = useTheme();
	
	return (
		<Box 
		sx={{
			height: "100vh",
			width:"100%",
			backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(${bg})`,
	        backgroundPosition: 'center',
	        backgroundSize: 'cover',
		}}
		>
		<Box 
		sx={{
			width: { xs: "90%", md: "40%" },
			height: "auto",
			padding: { xs: "20% 0px 0px 3%",  md:10} ,
			}}
		>
			<Box 
			sx={{
				margin: "10px 10px 0px 0px",
				width: "100%",
			}}
			>
			<Typography 
				color="white" 
				sx={{textShadow: `3px 3px 4px #4a148c`, fontSize: { xs:"3em", sm:"3.5em", md:"4em"}}}
				variant="h2"> 
				WELCOME TO PATCHWORK
			</Typography>
			<Typography
		      color="white"
		      variant="h4"
		      sx={{ 
		        fontFamily: 'monospace',
		        fontWeight: 900, 
		        fontSize:{ xs: "2em", sm: "1.5em", md:"3em"}
		      }}
		    >
		      Take your sound quality to the next level
	       </Typography>
			</Box>
		 <Box 
		 sx={{ display:"flex", gap:"10px", margin: "10px 0px 0px 0px" }}
		 >	
		 <Button
		 variant="contained" 
		 sx={{background: "white", color: "black"}}>
		 	Our Products
		 </Button>
		 <Button 
		 variant="outlined" 
		 sx={{ color: "white", border: "1px solid white"}}>
		 	About Us
		 </Button>
		 </Box>

		 <Box 
		 sx={{
		 	height: "130px",
		 	width: "250px",
		 	margin: " 3% 0px 0px 0px ",
		 	border: "1px solid white",
		 	borderRadius: "5px",
		 	padding: 3,
		 }}
		 >
		 	<Box sx={{ display: 'flex', alignItems: 'center', }}>
		      <VerifiedIcon sx={{ mr: 1, color: 'white' }} />
		      <Typography variant="h5" color="white">
		        Verified By SON
		      </Typography>
		    </Box>
		    <Box sx={{ display: 'flex', alignItems: 'center' }}>
		      <DoneAllIcon sx={{ mr: 1, color: 'white' }} />
		      <Typography variant="h5" color="white">
		        Shipping Guaranteed
		      </Typography>
		    </Box>
		     <Box sx={{ display: 'flex', alignItems: 'center' }}>
		      <LocalShippingIcon sx={{ mr: 1, color: 'white' }} />
		      <Typography variant="h5" color="white">
		       Fast Delivery
		      </Typography>
		    </Box>
		 </Box>

		</Box>
		</Box>
)}
export default Front;