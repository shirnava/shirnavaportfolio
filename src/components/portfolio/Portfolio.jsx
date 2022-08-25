import PortfolioList from "../portfolioList/PortfolioList"
import "./portfolio.scss"
import {useEffect, useState} from "react";
import { featuredPortfolio,
  discordPortfolio,
  videogamePortfolio,
  mlPortfolio,
  webappPortfolio,
  mobileappPortfolio
} from "../../data"

export default function Portfolio() {
  const [selected, setSelected] = useState("featured")
  const [data, setData] = useState([])
  const tags = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "discordbot",
      title: "Discord Bot",
    },
    {
      id: "videogame",
      title: "Video Game",
    },
    {
      id: "machinelearning",
      title: "Machine Learning",
    },
    {
      id: "webapp",
      title: "Web App",
    },
    {
      id: "mobileapp",
      title: "Mobile App",
    }
  ]

  useEffect(()=>{

    switch(selected){
      case "featured":
        setData(featuredPortfolio);
        break;
      case "discordbot":
        setData(discordPortfolio);
        break;
      case "videogame":
        setData(videogamePortfolio);
        break;
      case "machinelearning":
        setData(mlPortfolio);
        break;
      case "webapp":
        setData(webappPortfolio);
        break;
      case "mobileapp":
        setData(mobileappPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected])
  
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {tags.map(item => (
          <PortfolioList 
          title={item.title} 
          active ={selected === item.id} 
          setSelected ={setSelected}
          id={item.id}/>
        ))}
      </ul>
      <div className="container">
        {data.map(d=>(
          <div className="item">
          <img src= {d.img} alt="" />
          <h3>{d.title}
          </h3>
        </div>
        ))}
    </div>
    </div>
  )
}
