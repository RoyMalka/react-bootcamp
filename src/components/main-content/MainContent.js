import React from 'react';
// import './PortfolioMin.css'
import Portfolios from "../portfolios/Portfolios";
import NewPortfolio from '../new-portfolio/NewPortfolio';
import './MainContent.css'

export default class MainContent extends React.Component {

//   constructor(props) {
//     super(props);
   
//    this.add = this.add.bind(this);
// }
  add(portfolio){
    this.props.add(portfolio);
  }
  render() {
    return (
      <div className="MainContent container">
        <Portfolios portfolios={this.props.portfolios}/>
        <NewPortfolio add={this.add} />
      </div>
    );
  }
}


