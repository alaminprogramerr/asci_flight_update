import React, { useState } from 'react';
import {  } from 'reactstrap';
import classnames from 'classnames';

import {
  TabContent, 
  TabPane, 
  Nav, 
  NavItem, 
  NavLink, 
  Row, 
  Col
} from "reactstrap";

import InternationalFlight from './InternationalFlight'
import DomesticFlight from './DomesticFlight'

const AddFlight =(props)=> {
    
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
    return (
      <>
        <div className="content">
          <Row>
            <div>
            <Nav tabs>
                <NavItem style={{cursor:"pointer"}}>
                <NavLink
                    className={classnames({ active: activeTab === '1' })}
                    onClick={() => { toggle('1'); }}
                >
                <span style={{color:"white", cursor:"pointer"}}> INTERNATIONAL FLIGHT</span>
                </NavLink>
                </NavItem>
                <NavItem style={{cursor:"pointer"}}>
                <NavLink
                    className={classnames({ active: activeTab === '2' })}
                    onClick={() => { toggle('2'); }}
                >
                <span style={{color:"white"}}>DOMESTIC FLIGHT</span>
                </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                            <InternationalFlight/>
                        </Col>
                    </Row>          
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                      <Col sm="12">
                        <DomesticFlight/>
                      </Col>
                    </Row>
                </TabPane>
            </TabContent>
            </div>
          </Row>
        </div>
      </>
    );
}

export default AddFlight;
