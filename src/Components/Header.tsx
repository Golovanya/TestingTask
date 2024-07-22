import { IconHome } from "@consta/icons/IconHome";
import { Button } from "@consta/uikit/Button";
import { Link } from "react-router-dom";
import ContextMenuz from "./ContextMenu";


function Header() {
  return (
    <header id='todoform'>
      <div className="container header-content">
        <Link to="/">
          <Button label="Главная" iconRight={IconHome} />
        </Link>
          <ContextMenuz/>
      </div>
    </header>
  );
}

export default Header;
