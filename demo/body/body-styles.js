export default theme => ({
  body: {
    'padding': theme.spacing.unit * 2,
    [theme.breakpoints.up('lg')]: {
      width: 'calc(100% - 250px)',
      marginLeft: 250,
    },
  },
});
