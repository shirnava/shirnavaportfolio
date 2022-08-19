import PortfolioList from "../portfolioList/PortfolioList"
import "./portfolio.scss"
import {useState} from "react";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured")
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
        <div className="item">
          <img src="https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002487/img/basic/a0002487_main.jpg?20220602111700&q=80&rw=750&rh=536" alt="" />
          <h3>Minion App</h3>
        </div>
        <div className="item">
          <img src="https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002487/img/basic/a0002487_main.jpg?20220602111700&q=80&rw=750&rh=536" alt="" />
          <h3>Minion App</h3>
        </div>
        <div className="item">
          <img src="https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002487/img/basic/a0002487_main.jpg?20220602111700&q=80&rw=750&rh=536" alt="" />
          <h3>Minion App</h3>
        </div>
        <div className="item">
          <img src="https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002487/img/basic/a0002487_main.jpg?20220602111700&q=80&rw=750&rh=536" alt="" />
          <h3>Minion App</h3>
        </div>
        <div className="item">
          <img src="https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002487/img/basic/a0002487_main.jpg?20220602111700&q=80&rw=750&rh=536" alt="" />
          <h3>Minion App</h3>
        </div>
        <div className="item">
          <img src="https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002487/img/basic/a0002487_main.jpg?20220602111700&q=80&rw=750&rh=536" alt="" />
          <h3>Minion App</h3>
        </div>
    </div>
    </div>
  )
}
