import classes from "./NavigationBar.module.css";
import { FiX } from "react-icons/fi";
import { navActions } from "../store/index";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

// how to align div to the left using flex?

const NavigationBarPage = () => {
  const dispatch = useDispatch();
  const onHideBarHandler = () => {
    dispatch(navActions.hideNavBar());
  };

  return (
    <nav className={classes.navbar}>
      <label onClick={onHideBarHandler}>
        <p>
          <FiX />
        </p>
      </label>

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
  );
};

export default NavigationBarPage;
