import React from 'react';
import {Container,Row,Button} from 'reactstrap'
import {NavLink, Link} from 'react-router-dom'
import logo from '../../assets/images/logo3.jpg'
import './header.css'
const Nav__link=[
  {
    path:'/home',
    display:'home'
  },
  {
    path:'/#',
    display:'About'
  },
  {
    path:'/tours',
    display:'Tours'
  },

]

const Header = () => {
  return <header className="Header">
    <Container>
      <Row>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          {/*================= logo =================*/}
            <div className="logo">
            <img src={logo} alt="" />
          </div>
          {/*================= logo end =================*/}
          {/*================= menu =================*/}
          <div className="navigation">
            <ul className="menu d-flex align-items-center gap-5">
              {Nav__link.map((item,index)=>(
                <li className="nav__item" key={index}>
                  <NavLink to={item.path}className={navClass=>navClass.isActive ? 'active__link':"" }>
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/*================= menu end =================*/}
          <div className="nav__right d-flex align-items-cente gap-4">
            <div className="nav__btns d-flex align-items-cente gap-4">
              <Button className="btn secondary__btn"><Link to ='/login'>login</Link></Button>
              <Button className="btn primary__btn"><Link to ='/register'>Register</Link></Button>
            </div>
            <span className="mobile__menu"></span>
            <i class="ri-menu-add-fill"></i>
            </div>        
        </div>
      </Row>
    </Container>

  </header>

 
};

export default Header;
