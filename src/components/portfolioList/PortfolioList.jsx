import React from 'react'
import "./portfolioList.scss"
import {
    featuredPortfolio, webPortfolio, mobilePortfolio, discordPortfolio, unityPortfolio, mlPortfolio
} from "../../data"

export default function PortfolioList({title, active, setSelected, id}) {
  return (
    <li className = {active ? "portfolioList active": "portfolioList"} onClick={()=> setSelected(id)}>
        {title}
    </li>
  )
}
 