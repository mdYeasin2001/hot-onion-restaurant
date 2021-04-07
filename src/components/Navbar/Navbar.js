import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo2 from '../../images/logo2.png';
import './Navbar.css';
import { UserTypeContext } from '../../UserTypeContext';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { LoggedInUserContext } from '../../LoggedInUserContext';
import { FiLogOut } from 'react-icons/fi';
import firebase from "firebase/app";
import "firebase/auth";
import Avatar from '@material-ui/core/Avatar';
import { CartFoodsContext } from '../../CartFoodsContext';



const Navbar = () => {
    const history = useHistory();
    const [newUser, setNewUser] = useContext(UserTypeContext);
    const [loggedInUser, setLoggedInUser] = useContext(LoggedInUserContext);
    const [addedCartFoods, setAddedCartFoods] = useContext(CartFoodsContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    // log out
    const handleLogout = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            setLoggedInUser({})
          }).catch((error) => {
            // An error happened.
          });
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white mx-md-5">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img className="logo" src={logo2} alt="logo" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link mb-3 mx-2" aria-current="page" to="/cart">
                            <Badge badgeContent={addedCartFoods.length} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                        </Link>
                        {!loggedInUser.email &&
                            <>
                                <Link onClick={() => setNewUser(false)} className="btn btn-outline-danger mb-3 mx-2 onion-btn" aria-current="page" to="/login">Login</Link>
                                <Link onClick={() => setNewUser(true)} className="btn btn-danger mb-3 mx-2 onion-btn" to="/login">Sign up</Link>
                            </>
                        }
                        {loggedInUser.name &&
                            <div>
                                <IconButton className="mb-3"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu className="mt-5"
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={open}
                                    onClose={handleClose}
                                >
                                    {loggedInUser.image ? <Avatar className="d-block mx-auto" alt="image" src={loggedInUser.image} />:<AccountCircle className="fs-1 d-block mx-auto" /> }
                                    {loggedInUser.name && <h4 className="px-5">{loggedInUser.name}</h4>}
                                    <hr className="text-secondary" />
                                    <MenuItem>Profile</MenuItem>
                                    <MenuItem onClick={() => history.push('/orders')}>Your Orders</MenuItem>
                                    <MenuItem onClick={handleLogout}><FiLogOut className="me-2" />Logout</MenuItem>
                                </Menu>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;