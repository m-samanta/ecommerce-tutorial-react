import React, { useState } from "react";
import Navbar from "./ui/Navbar";
import Menu from "./ui/Menu";
import Cart from "./ui/Cart";

const Nav = () => {
  const [cartOpen, setCartOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
    <Navbar setCartOpen={setCartOpen} setMenuOpen={setMenuOpen} />
    <Menu />
    <Cart />
    </>
  );
};

export default Nav;

