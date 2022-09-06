import "./works.scss";
import { useState } from "react" ;

export default function Works() { 
    const [ currentSlide,setCurrentSlide] = useState(0);

    const data = [
        {
            id: "1",
            icon: "./assets/licsync.png",
            title:" Lip Reading Automation System",
            desc:"The project uses convoluted neural network to determine the words spoken.",
            img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Advantages_and_Disadvantages_of_artificial_intelligence.jpg ",
        },
        {
            id: "2",
            icon: "./assets/bank.png",
            title: " Online-Banking System",
            desc:
            "The project uses HTML and CSS in front-end to interact with users.",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlOBj639_PpUuDPJSKH0HcdEMm6jpiMDXghg&usqp=CAU",
        },
        {
            id: "3",
            icon: "./assets/club-manage.png",
            title: "Club Management System",
            desc:
            "It is a menu-driven prooject which uses c++ programming language",
            img: "https://i0.wp.com/www.business-to-you.com/wp-content/uploads/2020/03/Leadership-Management.jpg?resize=800%2C445&ssl=1"
        },

    ];

    const handleClick = (way)=>{
        way === "left" 
        ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2)
        : setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1 : 0);
    }; 
    return ( 
    <div className="works" id="works">
        <div className="slider" style={{transform:`translateX(-${currentSlide*100}vw)`}}>
            { 
            data.map(d=>(
            <div className="container">
                <div className="item">
                    <div className="left">
                        <div  className="leftContainer">
                            <div className="imgContainer">
                              <img src={d.icon} alt=""/>
                            </div>
                            <h2>{d.title}</h2>
                            <p>
                             {d.desc}
                            </p>
                            <span>Projects</span>
                        </div>
                    </div>
                    <div className="right">
                        <img
                        src="https://images.shiksha.com/mediadata/images/articles/1565948235phpyxD4ZK.jpeg"
                        alt=""
                        />
            </div>
        </div>
    </div>
))};
            
        </div>
        <img src="assets/correctarrows.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
        <img src="assets/correctarrows.png" className="arrow right" alt="" onClick={()=>handleClick()}/>
        </div>
    );
}