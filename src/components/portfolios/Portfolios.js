import React from 'react';
import './Portfolios.css';
import { Grid, Row, Col } from 'react-bootstrap';
import PortfolioMin from '../portfolio-min/PortfolioMin'

class Portfolios extends React.Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.editView = this.editView.bind(this);
        this.fullView = this.fullView.bind(this);
    }
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
        <Grid >
          <Row className="show-grid Portfolios" >
          {
          this.props.portfolios.map((portfolio,index)=> {
            return  <Col xs={12} sm={12} md={12} lg={4} key={index}>
                        <PortfolioMin fullView={this.fullView} editView={this.editView} delete={this.delete} portfolio={portfolio} />
                    </Col>      
          })
          }
          </Row>
        </Grid>
    );
  }
}

export default Portfolios

