import React from "react";
import { NavLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

const Breadcrumb = () => {
    const breadcrumbs = useBreadcrumbs();

    return (
        <div className="container">
               <div aria-label="breadcrumb">
                    <ol className="breadcrumb" id="bread">
                    {breadcrumbs.map(({ match,breadcrumb }) =>(
                        <li className="breadcrumb-item" key={match.pathname} >
                            <NavLink  to={match.pathname}> {breadcrumb}</NavLink>
                        </li>
                    ))}
                    </ol>
                </div>
            
        </div>
   
        );
}
 
export default Breadcrumb;