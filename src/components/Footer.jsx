import { Box, Typography, useTheme, Button  } from "@mui/material";
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


function Footer() {
return (	
	<Box
	sx={{
		height: "auto",
		width: "100%",
		marginTop: "2%",
		display:"flex",
		flexWrap: "wrap",
		justifyContent:"center",
		alignItems:"center",
		borderTop: "1px solid gray",
	}}
	>
	<Box
	sx={{
		height: "30vh",
		width: 300,
		textAlign: "left"
	}}
	>
	<Typography
	variant="h4"
	sx={{
		color: "white",
		fontWeight: "bolder"
	}}
	>
		About Us
	</Typography>
	<Typography
	variant="body2"
	sx={{
		color: "white",
		fontWeight: "bolder"
	}}
	>
		 Take your sound quality to the next level
	</Typography>
	</Box>

	<Box
	sx={{
		height: {xs:"20vh", md:"30vh"},
		width: 300,
		textAlign: "left"
	}}
	>
	<Typography
	variant="h4"
	sx={{
		color: "white",
		fontWeight: "bolder"
	}}
	>
		Contact Us
	</Typography>
	<Typography
	variant="body2"
	sx={{
		color: "white",
		fontWeight: "bolder"
	}}
	>
		 Email: info@patchwork.com
	</Typography>

		<Typography
	variant="body2"
	sx={{
		color: "white",
		fontWeight: "bolder"
	}}
	>
		 Phone Number:
	</Typography>

		<Typography
	variant="body2"
	sx={{
		color: "white",
		fontWeight: "bolder"
	}}
	>
		 Location: Lagos Nigeria
	</Typography>
	</Box>
	<Box
	sx={{
		height: "30vh",
		width: 300,
		textAlign: "left",
		justifyContent: "space-between",
		gap: "10px",
	}}
	>
	<XIcon 
	sx={{
		color: "white",
		padding: 2,
		cursor: "pointer"
	}} />
	<InstagramIcon 
	sx={{ 
		color: "white",
		padding: 2,
		cursor: "pointer"
	}}
	/>   
	<FacebookIcon 
	sx={{
		color: "white",
		padding: 2,
		cursor: "pointer"
	}}
	/>
	</Box>
	</Box>   
)}
export default Footer;    