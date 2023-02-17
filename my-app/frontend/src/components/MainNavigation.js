import classes from "./MainNavigation.module.css";
import { FiAlignJustify } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { navActions } from "../store/index";
import NavigationBarPage from "../pages/NavigationBar";

const MainNavigation = () => {
  const dispatch = useDispatch();

  const isNavigationBarVisible = useSelector((state) => state.isNavBarVisible);

  const showBarHandler = () => {
    dispatch(navActions.showNavBar());
  };

  return (
    <>
      <nav className={classes.navbar}>
        <label onClick={showBarHandler}>
          <p>
            <FiAlignJustify />
          </p>
        </label>
        <p className={classes.logo}>
          <NavLink to="/">maziuk.</NavLink>
        </p>

        <div className={classes.menu}>
          <ul className={classes.list}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/kittens">Kittens</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      {isNavigationBarVisible && <NavigationBarPage />}
    </>
  );
};

export default MainNavigation;
