import { useState } from "react"; 
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuOptions = [
    { text: "Home" },
    { text: "About" },
    { text: "Testimonials" },
    { text: "Contact" },
  ];

  return (
    <nav>
      {/* Logo Section */}
      <div className="nav-logo-container">
        <img src={Logo} alt="Logo" />
      </div>

      {/* Desktop Navigation Links */}
      <div className="navbar-links-container">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
        
        {/* Cart Icon */}
        <a href="#cart">
          <BsCart2 className="navbar-cart-icon" />
        </a>
        
        <button className="primary-button">Bookings Now</button>
      </div>

      {/* Mobile  Menu Icon */}
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} style={{ cursor: "pointer", fontSize: "2rem" }} />
      </div>

      {/* Material  Mobile View */}
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;