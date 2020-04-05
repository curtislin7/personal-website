const HomeStyles = (theme) => ({
    links: {
      '& > *': {
        margin: theme.spacing(0.5),
      },
      textAlign:'center',
      paddingTop:'0'
    },
    resume: {
      width:'80%',
      margin:'auto',
      height:'1000px',
      // backgroundColor: theme.palette.primary.main,
      fontFamily:theme.typography.fontFamily
    },
    header: {
      textAlign:'center',
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
    }
});



export default HomeStyles;