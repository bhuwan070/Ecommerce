import { Link } from "react-router-dom";
import { FaFire } from "react-icons/fa";

const NavItem = ({ to, label, icon, activeLink, onClick }) => {
  // Conditionally apply styles based on the activeLink and label
  const isActive = activeLink === label;
  const baseStyles = "flex items-center gap-1 ease duration-200";

  // If "Deals" is active, apply text-orange-600, otherwise apply text-primary for other items
  const activeStyles =
    label === "Deals"
      ? isActive
        ? "text-orange-600"
        : ""
      : isActive
      ? "text-primary"
      : "";
      
      const hoverStyles =
        label === "Deals"
            ? "hover:text-orange-600" : "hover:text-primary";

  return (
    <li className={hoverStyles}>
      <Link to={to} onClick={() => onClick(label)}>
        <span className={`${baseStyles} ${activeStyles} ${hoverStyles}`}>
          {icon && <FaFire />}
          <span>{label}</span>
        </span>
      </Link>
    </li>
  );
};

export default NavItem;
