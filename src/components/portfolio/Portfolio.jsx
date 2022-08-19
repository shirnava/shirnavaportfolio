import "./portfolio.scss"

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">
          Featured
        </li>
        <li>
          Discord Bot
        </li>
        <li>
          Video Game
        </li>
        <li>
          Machine Learning
        </li>
      </ul>
      <div className="container">
        <div className="item">
          <img src="https://pbs.twimg.com/profile_images/1510276954938920966/_jPqrcHD_400x400.jpg" alt="" />
          <h3>Minion App</h3>
        </div>
      </div>
      <div className="container">
        <div className="item">
          <img src="https://pbs.twimg.com/profile_images/1510276954938920966/_jPqrcHD_400x400.jpg" alt="" />
          <h3>Minion App</h3>
        </div>
      </div>
     
     
     
        
    </div>
  )
}
