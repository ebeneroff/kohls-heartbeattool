var styles = {
	serverDetails:{
		backgroundColor: '#FFFFFF',
		textAlign: 'left',
		padding: 10,
		paddingBottom: 1,
		cursor: 'pointer',
		color: '#333333',
		fontSize: '100%',
		boxShadow: '0px 0px 5px black',
		transition: 'all 200ms ease-in',
     	transform: 'scale(1.0)',
     	zIndex: 5,
      	position: 'relative'
	},
	currentlyRunning: {
		color: '#FFFFFF',
		backgroundColor: '#3C6478',
		padding: 10,
		paddingTop: 0,
		marginTop: 10,
		boxShadow: '0px 0px 10px black',
		marginBottom: 10
	},
	attentionRequired:{
		color: '#FFFFFF',
		backgroundColor: '#3C6478',
		padding: 10,
		paddingTop: 0,
		marginTop: 10,
		boxShadow: '0px 0px 10px black'
	},
	wellHeader: {
		marginLeft: '-.6%', 
		width: '101.2%', 
		marginBottom: -15, 
		marginTop: 0, 
		borderBottom: 'solid 1px black',
		padding: 10, 
		backgroundColor: '#093145',
		//boxShadow: '2px 2px 5px black'
	},
	server:{
		padding: '.5%'
	},
	serverHeader:{
		fontSize: '150%', 
		color: '#FFFFFF', 
		backgroundColor:'#0C374D', 
		margin: -11, 
		marginBottom: 5, 
		padding: 6,
		borderBottom: 'solid 1px black'
	},
	main: {
		fontFamily: '"Roboto", sans-serif'
	},
	modalTable: {
		width: '100%',
	},
	tableData: {
		color: '#000000',
		fontSize: '150%',
		padding: '1.5%',
		/*borderRight: '2px solid #BBBBBB', */
		opacity: '.85',
		//float: 'center',
		//marginLeft: '25%'
	},
	modalLink: {
		color: '#66AAFF',
		fontSize: '140%',
		float: 'left',
		marginLeft: '4%'
	},
	modalHeader: {
		color: '#FFFFFF',
		fontSize: '160%',
		margin: '2%',
		
	},
	tableRow: {
		/*borderTop: '2px solid #BBBBBB',
		borderBottom: '2px solid #BBBBBB'*/
	},
	textBox: {
		width: 250,
		height: 150, 
		borderRadius: 5,
		margin: 10,
		border: 'none'
	},
	horizontal:{
		border: '1px solid #888888',
		marginTop: '-5px',
		width: '340px',
		marginLeft: '10px',
		visibility: 'hidden'
	},
	horizontal2: {
		border: '1px solid #888888',
		marginTop: '0px',
		width: '48%',
		marginLeft: '5%'
	},
	navbar: {
		backgroundColor: '#093145',
		//background: 'linear-gradient(to bottom, #E8EAF6, #C5CAE9)',
		margin: 0,
		padding: 0,
		borderRadius: 0,
		marginLeft: -20,
		marginRight: -15,
		border: 'none',
		borderBottom: 'solid 1px black',
		boxShadow: '0px 0px 5px black'
	},
	modal: {
 		overlay: {
  			background			  : 'rgba(75, 75, 75, 0.75)'
 	},
  		content : {
		    top                   : '50%',
		    left                  : '50%',
		    right                 : 'auto',
		    bottom                : 'auto',
		    height				  : '60%',
		    width				  : '60%',
		    marginRight           : '-50%',
		    //transform             : 'translate(-50%, -50%)',
		    background            : 'transparent',
		    borderRadius          : 10,
		    padding				  : '0%'
  		}
	}
}

module.exports = styles;