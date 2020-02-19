
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import {Link} from 'react-router-dom'
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Input,
  InputGroup,
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  Container,
  Modal
} from "reactstrap";
import Axios from 'axios'

class AdminNavbar extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      result:'',
      id:'',
      collapseOpen: false,
      modalSearch: false,
      color: "navbar-transparent"
    };
  }
  search=()=>{
    Axios.get('http://localhost:5000/api/findByID/'+this.state.id)
    .then(result=>{
      this.setState({
        result:result.data
      })
      console.log(this.state.result)
      console.log(this.state.result)
      console.log(this.state.result)
      console.log(this.state.result)
      console.log(this.state.result)
    })
    .catch(err=>{
      console.log(err)
    })
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateColor);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateColor);
  }
  logOut=()=>{
    window.localStorage.removeItem('asci-token')
    window.location.href=('/login')
  }
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  updateColor = () => {
    if (window.innerWidth < 993 && this.state.collapseOpen) {
      this.setState({
        color: "bg-white"
      });
    } else {
      this.setState({
        color: "navbar-transparent"
      });
    }
  };
  // this function opens and closes the collapse on small devices
  toggleCollapse = () => {
    if (this.state.collapseOpen) {
      this.setState({
        color: "navbar-transparent"
      });
    } else {
      this.setState({
        color: "bg-white"
      });
    }
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  // this function is to open the Search modal
  toggleModalSearch = () => {
    this.setState({
      modalSearch: !this.state.modalSearch,
      result:''
    });
  };
  changeHandler=(event)=>{
    this.setState({
      [event.target.name]:event.target.value
    })
  }
  render() {
    return (
      <>
        <Navbar
          className={classNames("navbar-absolute", this.state.color)}
          expand="lg"
        >
          <Container fluid>
            <div className="navbar-wrapper">
              <div
                className={classNames("navbar-toggle d-inline", {
                  toggled: this.props.sidebarOpened
                })}
              >
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={this.props.toggleSidebar}
                >
                  <span className="navbar-toggler-bar bar1" />
                  <span className="navbar-toggler-bar bar2" />
                  <span className="navbar-toggler-bar bar3" />
                </button>
              </div>
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                {this.props.brandText}
              </NavbarBrand>
            </div>
            <button
              aria-expanded={false}
              aria-label="Toggle navigation"
              className="navbar-toggler"
              data-target="#navigation"
              data-toggle="collapse"
              id="navigation"
              type="button"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
            </button>
            <Collapse navbar isOpen={this.state.collapseOpen}>
              <Nav className="ml-auto" navbar>
                <InputGroup className="search-bar">
                  <Button
                    color="link"
                    data-target="#searchModal"
                    data-toggle="modal"
                    id="search-button"
                    onClick={this.toggleModalSearch}
                  >
                    <i className="tim-icons icon-zoom-split" />
                    <span className="d-lg-none d-md-block">Search</span>
                  </Button>
                </InputGroup>
                <UncontrolledDropdown nav>
                  <DropdownToggle
                    caret
                    color="default"
                    data-toggle="dropdown"
                    nav
                    onClick={e => e.preventDefault()}
                  >
                    <div className="photo">
                      <img alt="..." src={require("../../assets/img/anime3.png")} />
                    </div>
                    <b className="caret d-none d-lg-block d-xl-block" />
                    <p className="d-lg-none">Log out</p>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-navbar" right tag="ul">
                    <NavLink tag="li">
                      <DropdownItem className="nav-item">
                        <Link to="/admin/user-profile" style={{color:'black' , fontSize:"16px" , fontWeight:"500"}}>Profile</Link>
                      </DropdownItem>
                    </NavLink>
                    <DropdownItem divider tag="li" />
                    <NavLink tag="li">
                      <DropdownItem className="nav-item" onClick={this.logOut}>
                      <Link to="/" style={{color:'black' , fontSize:"16px" , fontWeight:"500"}}>Log Out</Link>
                      </DropdownItem>
                    </NavLink>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <li className="separator d-lg-none" />
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
        <Modal
          modalClassName="modal-search"
          isOpen={this.state.modalSearch}
          toggle={this.toggleModalSearch}
        >
          <div className="modal-header">
            <Input id="inlineFormInputGroup" name="id" onChange={this.changeHandler} placeholder="Search international  flight, domestic flight , invoice with id" type="text" />
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
            >
              {this.state.id?
                <a onClick={this.search} style={{paddingLeft:'30px', paddingRight:"30px "}} className="">Search</a>
                  :''
              }
            </button>
          </div>
          {this.state.result?
            <div class="card-body">
                <h3 class="card-title text-dark ">Search result</h3>
              <div className="card-body">
                  {this.state.result.startDate?
                  <div>
                    
                  <p className="text-dark">ID : {this.state.result._id} </p>
                  <p className="text-dark">Start Date : {this.state.result.startDate} </p>
                  <p className="text-dark">End Date : {this.state.result.endDate} </p>
                  <p className="text-dark">Operator : {this.state.result.operator} </p>

                  </div>
                  :
                  <div>

                  <p className="text-dark">ID : {this.state.result._id} </p>
                  <p className="text-dark">Added Time : {this.state.result.addedTime} </p>
                  <p className="text-dark">Date and Time : {this.state.result.dateTime} </p>
                  <p className="text-dark">Tail Number : {this.state.result.tailNumber} </p>
                  <p className="text-dark">Operator : {this.state.result.operator} </p>
                  <p className="text-dark">ICAO : {this.state.result.icao} </p>
                  <p className="text-dark">Aircraft Type : {this.state.result.aircraft} </p>
                  <p className="text-dark">Callsign : {this.state.result.callsign} </p>
                  <p className="text-dark">Origin : {this.state.result.origin} </p>
                  <p className="text-dark">Destination : {this.state.result.destination} </p>
                  <p className="text-dark">Entry Way Point : {this.state.result.entryWayPoint} </p>
                  <p className="text-dark">Exit Way Point : {this.state.result.exitWayPoint} </p>
                  </div>}
              </div>
            </div>:''
          }
        </Modal>
      </>
    );
  }
}

export default AdminNavbar;
