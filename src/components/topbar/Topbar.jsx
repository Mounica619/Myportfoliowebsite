import "./topbar.scss";
import {Person,Mail} from "@material-ui/icons"

export default function Topbar({menuOpen , setMenuOpen }){
    return(
        <div className={"topbar "  + (menuOpen && "active")}>
           <div className="wrapper">
                <div className="left">
                   <a href="#intro" className="logo">M MOUNICA</a>
                  <div className="itemContainer">
                   <Person className="icon"/>
                   <span>+91-1111111111</span>
                </div>
                <div className="itemContainer">
                   <Mail className="icon"/>
                   <span>mounica@gmail.com</span>
                </div>
            </div>
            <div className="right">
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <span classsName="line1"> </span> 
                    <span classsName="line2"> </span>
                    <span classsName="line3"> </span>
                </div>

            </div>
         </div>
        </div>
    );
}