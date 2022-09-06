import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { useEffect, useState } from "react";
import { ListeningtopodcastsHobbies,
    WatchingdocumentariesHobbies,
    ReadingnovelsHobbies} from "../../data";

export default function Portfolio(){
    const [selected,setSelected] = useState("podcasts");
    const [data,setData] = useState([]);
    const list = [
        {
            id: "podcasts",
            title: " Listening to podcasts",
        },
        {
            id: "documentaries",
            title: " Watching documentaries",
        },
        {
            id: "novels",
            title: "Reading novels",
        },  
    ];

     useEffect(()=>{
         switch(selected){
            case "podcasts":
                setData(ListeningtopodcastsHobbies);
                break;
            case "documentaries":
                setData(WatchingdocumentariesHobbies);
                break;
            case "novels":
                setData(ReadingnovelsHobbies);
                break;
            default:
                setData(ListeningtopodcastsHobbies);
         }
     },[selected]);
    return (  
        <div className="portfolio" id="portfolio">
         <h1>Hobbies</h1>
         <ul>
            {list.map((item) => (
                <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
            ))}
         </ul>
         <div className="container">
            {data.map((d) =>(
                <div className="item"> 
                 <img  
                  src={d.img}
                  alt=""
                  />
                <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
    );
 }
