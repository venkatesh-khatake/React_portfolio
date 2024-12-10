import './Work.css';
import Grediant from '../images/grediant.png';
import Ecommerce from '../images/ecommerce.png';
import Portfolio from '../images/portfolio.png';
import Weather from '../images/Weather.png';
import Desert from '../images/Desert.png';
import TempConverter from '../images/TempConverter.png';
import  Todo from '../images/Todo.png';

export function Work(props) {
    const WorkData = [
        {
            src: Grediant,
            skills: ["HTML", "CSS", "JavaScript"],
            title: "Gradient Generator",
            description: "A detailed description of Project 1 showcasing various skills.",
            link: "https://venkatesh-khatake.github.io/Gradient-Generator/"
        },
        {
            src: Ecommerce,
            skills: ["HTML", "CSS"],
            title: "Ecommerce Website",
            description: "A detailed description of Project 2 showcasing various skills.",
            link: "https://example.com/project2"
        },
        {
            src: Portfolio,
            skills: ["HTML", "CSS"],
            title: "Portfolio Website",
            description: "A detailed description of Project 3 showcasing various skills.",
            link: "https://example.com/project3"
        },
        {
            src: Weather,
            skills: ["HTML", "CSS", "JavaScript"],
            title: "Project 4",
            description: "A detailed description of Project 4 showcasing various skills.",
            link: "https://example.com/project4"
    
        }, {
            src: Desert,
            skills: ["HTML", "CSS", "Js"],
            title: "Desert Menu",
            description: "A detailed description of Project 4 showcasing various skills.",
            link: "https://example.com/project4"
    
        }, {
            src: TempConverter,
            skills: ["HTML", "CSS", "Js"],
            title: "Temperature Converter",
            description: "A detailed description of Project 4 showcasing various skills.",
            link: "https://example.com/project4"
    
        },
        {
            src: Todo,
            skills: ["HTML", "CSS", "Js"],
            title: "Todo List",
            description: "A detailed description of Project 4 showcasing various skills.",
            link: "https://example.com/project4"
    
        }
    ];

    return (
        <div className="work container-fluid py-5" id='work'>
            <h4 className="text-center mb-4">Skills</h4>
            <div className="container d-flex flex-wrap justify-content-center align-items-center">
                {WorkData.map((item, index) => (
                    <div className="card m-3" key={index} style={{ width: "18rem" }}>
                        <img src={item.src} className="card-img-top pro-img" alt={`${item.title} Image`} />
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.description}</p>
                            <p className="card-text">
                                 {item.skills.join(" | ")}
                            </p>
                            <a
                                href={item.link}
                                className="btn btn-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
