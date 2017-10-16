import React, {Component} from 'react';
import style from './style.css';

class Header extends Component {
  render() {
    return (
      <header class={style.navbar} role="banner">
        <div class="navbar-header">
          <button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a href="https://www.thehomelike.com/en" class="navbar-brand">
            <img src="http://app.thehomelike.com/images/homelike.png"/>
          </a>

        </div>
        <nav class="collapse navbar-collapse bs-navbar-collapse" role="navigation">
          <ul class="nav navbar-nav navbar-left hidden-xs search-city-nav">
            <li>
              <form id="header-search">
                <input type="text" name="search" class="search-city" placeholder="Which city are you interested in?" autoComplete="off"/>
                <i class="fa fa-search"></i>
              </form>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">

            <li>
              <a href="https://www.thehomelike.com/landlords">For Landlords</a>
            </li>
            <li>
              <a href="/login" class="login">Log in</a>
            </li>

            <li class="dropdown languageChooser">
              <a href="#" class="dropdown-toggle _has-pic" data-toggle="dropdown">
                en
                <b class="caret"></b>
              </a>
              <ul class="dropdown-menu">
                <li data-language="en">
                  <a href="#">
                    English</a>
                </li>
                <li data-language="de">
                  <a href="#">
                    Deutsch</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
