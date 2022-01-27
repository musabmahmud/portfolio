import { FunctionComponent } from "react";
import { Category } from "../type";

const NavItem:FunctionComponent<{
    value:Category | 'all';
    handlerFilterCategory: Function;
    active: string;
}> = ({value, handlerFilterCategory, active}) => {

    let liStyle = "sm:px-4 rounded my-2 p-2 bg-gray-100 font-semibold  cursor-pointer hover:bg-green-500 hover:text-white";
    if (active === value) {liStyle += " bg-green-500 text-white";}

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
        <div className="flex flex-wrap items-center justify-center gap-4 text-center text-black uppercase list-none rounded">
            <NavItem value="all" {...props}/>
            <NavItem value="react" {...props}/>
            <NavItem value="mern" {...props}/>
            <NavItem value="laravel" {...props}/>
            <NavItem value="js" {...props}/>
            <NavItem value="web design" {...props}/>
        </div>
    );
};

export default ProjectNavbar;