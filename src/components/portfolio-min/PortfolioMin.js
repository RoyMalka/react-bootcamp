import React from 'react';
import './PortfolioMin.css';
import {Image,Thumbnail} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EditPortfolio from '../edit/EditPortfolio';

export default class PortfolioMin extends React.Component {
  delete(id) {
    this.props.delete(id);
  }
  editView(portfolio) {
    this.props.editView(portfolio);
  }
  fullView(portfolio) {
    this.props.fullView(portfolio);
  }
  render() {
    return (
      <div className="Portfolio">
      <Thumbnail className="portfolio-container">
        <Image src={this.props.portfolio.image} onClick={this.fullView.bind(this,this.props.portfolio)} thumbnail responsive/>
        <hr />
        <h3>{this.props.portfolio.title}</h3>
        <div className="portfolio-min-buttons" >
          <a className="btn btn-xs btn-danger" onClick={this.delete.bind(this,this.props.portfolio.id)}>Delete</a>
          <a className="btn btn-xs btn-warning" onClick={this.editView.bind(this,this.props.portfolio)}>Edit</a>
        </div>
      </Thumbnail>
      </div>
    );
  }
}


