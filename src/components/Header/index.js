import {
  AppBar,
  Toolbar,
  TextField
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import SearchIcon from '@material-ui/icons/Search';

import logoImg from '../../assets/logo.png';

const useStyles = makeStyles(theme => ({
  toolbarImage: {
    width: '160px',
    height: '100%',
  },
  toolbarAppName: {
    fontWeight: '500',
    color: '#00da5d',
  },
  toolbarAppNameSpan: {
    fontWeight: '500',
    color: '#6d6e71',
  },
  searchContainer: {
    display: 'flex',
    marginTop: '10px',
    marginBottom: '10px',
    paddingTop: '5px',
    paddingBottom: '5px',
    paddingLeft: '20px',
    paddingRight: '20px',
    borderRadius: '4px',
    backgroundColor: '#f0f2f5',
  },
  searchIcon: {
    alignSelf: 'flex-end',
    marginBottom: '5px',
  },
  searchInput: {
    width: '200px',
    margin: '5px',
  },
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

export function Header() {
  const classes = useStyles();

  return (
    <AppBar position='static'>
      <Toolbar
        style={{
          justifyContent: 'space-between',
          backgroundColor: '#fff'
        }}>

        <a href='/'>
          <h1 className={classes.toolbarAppName}>Poké
            <span className={classes.toolbarAppNameSpan}>List</span>
          </h1>
        </a>

        <a
          href='https://www.looqbox.com/en/'
          target='_blank'
          rel='noopener noreferrer'>
          <img
            className={classes.toolbarImage}
            src={logoImg}
            alt='looqbox ~ PokéList' />
        </a>

        {/* <div className={classes.searchContainer}>
          <SearchIcon className={classes.searchIcon} />
          <TextField
            className={classes.searchInput}
            // onChange={handleSearchChange}
            variant='standard'
            label='Search'
          />
        </div> */}
      </Toolbar>
    </AppBar>
  )
}