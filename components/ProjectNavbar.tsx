import { FunctionComponent } from "react";
import { Category } from "../type";

const NavItem:FunctionComponent<{
    value:Category | 'all';
    handlerFilterCategory: Function;
    active: string;
}> = ({value, handlerFilterCategory, active}) => {

    let liStyle = "sm:px-4 rounded my-2 font-bold hover:text-green cursor-pointer";
    if (active === value) liStyle += " text-green";

    return (
        <li className={liStyle} onClick={() => handlerFilterCategory(value)}>
            {value}
        </li>
    );
};

const ProjectNavbar: FunctionComponent<{
    handlerFilterCategory: Function;
    active: string;
  }> = (props) => {
    return (
        <div className="block capitalize list-none sm:flex font-xl">
            <NavItem value="all" {...props}/>
            <NavItem value="react" {...props}/>
            <NavItem value="node" {...props}/>
            <NavItem value="firebase" {...props}/>
            <NavItem value="laravel" {...props}/>
            <NavItem value="web design" {...props}/>
        </div>
    );
};

export default ProjectNavbar;