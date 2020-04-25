const HomeStyles = (theme) => ({
    header: {
      textAlign:'center',
      paddingTop:'10px'
    },
    headerTitle: {
    },
    headerSubtitle:{
      fontSize:'15px'
    },
    links: {
      '& > *': {
        margin: theme.spacing(0.4),
      },
      paddingTop:'0'
    },
    resume: {
      width:'80%',
      margin:'auto',
      // backgroundColor: theme.palette.primary.main,
      fontFamily:theme.typography.fontFamily
    },
    section: {
      height:'auto',
      fontSize:'17px',
    },
    sectionTitle:{
      fontWeight:'bold',
      fontSize:'19px'
    },
    line:{
      marginTop:'0.5px',
      marginBottom:'0.5px'
    },
    sectionHeader:{
      width:'100%',
      height:'inherit',
      display:'flex',
    },
    company:{
      fontWeight:'bold',
      width:'auto'
    },
    location:{
      width:'auto'
    },
    date:{
      textAlign:'right',
      flexGrow:'1',
    },
    degree: {
    },
    role: {
      fontStyle:'italic',
    }, 
    points: {
      marginLeft: '10px',
    },
    pointHeader: {
      fontWeight:'bold'
    },
    lineContent: {
      display:'flex',
      flexDirection:'row'
    },
    footer: {
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      height:'150px'
    },
    footerItem: {
      
    },
    profilePicture: {
      width:'150px'
    }
});



export default HomeStyles;