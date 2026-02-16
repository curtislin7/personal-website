const ResumePageStyles = (theme) => ({
  resume: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#fff',
    minHeight: '100vh',
    padding: theme.spacing(3, 2),
  },
  content: {
    width: '80%',
    fontFamily: theme.typography.fontFamily,
    fontSize: '14px',
    lineHeight: 1.4,
    color: '#333',
  },
  header: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
  profilePic: {
    width: 140,
    height: 140,
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: theme.spacing(2),
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  name: {
    fontSize: '36px',
    fontWeight: 700,
    margin: '0 0 8px 0',
  },
  contact: {
    fontSize: '13px',
    color: '#333',
    '& a': {
      color: '#333',
      textDecoration: 'none',
    },
    '& a:hover': {
      textDecoration: 'underline',
    },
  },
  section: {
    marginBottom: theme.spacing(2),
  },
  sectionTitle: {
    fontSize: '16px',
    fontWeight: 700,
    margin: '0 0 8px 0',
    paddingBottom: 4,
    borderBottom: '1px solid #333',
  },
  summary: {
    margin: 0,
    textAlign: 'center',
  },
  job: {
    marginBottom: theme.spacing(2),
  },
  jobHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    flexWrap: 'wrap',
    gap: 8,
  },
  company: {
    fontWeight: 700,
  },
  location: {
    fontStyle: 'italic',
  },
  roleRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginTop: 2,
  },
  role: {
    fontStyle: 'italic',
  },
  date: {
    fontSize: '13px',
  },
  bulletList: {
    margin: '8px 0 12px 0',
    paddingLeft: '20px',
    color: '#333',
    '& li': {
      marginBottom: 4,
    },
  },
  educationDetail: {
    margin: '2px 0',
  },
  project: {
    marginBottom: theme.spacing(1.5),
  },
  projectHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    flexWrap: 'wrap',
    gap: 8,
  },
  projectName: {
    fontWeight: 700,
  },
  projectLink: {
    fontSize: '13px',
    color: '#333',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  projectDesc: {
    margin: '4px 0 0 0',
  },
  skillsRow: {
    margin: '4px 0',
  },
});

export default ResumePageStyles;
