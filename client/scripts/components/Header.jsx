//import npm package
import React from 'react';
// import $ from 'jquery';
//import components and container-fluids
import {Nav, NavItem, Navbar,Image} from 'react-bootstrap';
//import assets
import logo from '../../styles/assets/img/logo-concept.png';

export default class NotFound extends React.Component {

    componentDidMount(){
    //     $(document).ready(function(){       
    //       // const logoD = this.logoDark;
    //       var scroll_start = 0;
    //       var startchange = $('#about');
    //         $("#homeButton").click(function() {
    //           $('html, body').animate({
    //               scrollTop: $("#topMedia").offset().top
    //           }, 2000);
    //       });
    //         $("#aboutButton").click(function() {
    //           $('html, body').animate({
    //               scrollTop: $("#about").offset().top
    //           }, 2000);
    //       });
    //         $("#roomButton").click(function() {
    //           $('html, body').animate({
    //               scrollTop: $("#rooms").offset().top
    //           }, 2000);
    //       });
    //       $("#trainButton").click(function() {
    //         $('html, body').animate({
    //             scrollTop: $("#train").offset().top
    //         }, 2000);
    //      });
    //      $("#faqButton").click(function() {
    //         $('html, body').animate({
    //             scrollTop: $("#faq").offset().top
    //         }, 2000);
    //      });
    //         $("#contactButton").click(function() {
    //           $('html, body').animate({
    //               scrollTop: $("#contact").offset().top
    //           }, 2000);
    //       });
    //       // var newChange = $('.SliderCanvas');
    //       var offset = startchange.offset();
    //       offset.top-=100;
    //       // if(window.screen.availWidth <= 1440){
    //       //   offset.top-=50
    //       // }else {
    //       //   if(window.screen.availWidth <= 600){
    //       //     offset.top+=1500
    //       //   }
          
    //       // }
    //       console.log(offset);
    //        if (startchange.length){
    //       $(window).scroll(function() { 
    //          scroll_start = $(this).scrollTop();
    //          if(scroll_start > offset.top ) {
    //           // $(".navbar-inverse .container-fluid").fadeOut(3) ;
    
    //           $(".navbar-inverse .container-fluid").css({backgroundColor: 'white' ,'z-index':'9999',borderBottom:'1px solid black'}) ;
    //             //  $(".navbar-inverse .container-fluid").css({'z-index':'9999'});
    //             $(".navbar-inverse .navbar-toggle").css({border:"none"});
    //           $(".navbar-inverse .navbar-toggle .icon-bar ").css({backgroundColor:"black"});
    //           $(".navbar-inverse .navbar-toggle:focus, .navbar-inverse .navbar-toggle:hover ").css({backgroundColor:'white'});
    //              $(".navbar-inverse .container-fluid .navbar-collapse ul li a").css({ 'color' : 'black'});
    //             //  $(".navbar-header img").attr("src",require('../styles/assets/img/logo/logo_dark.png'));
    //           } else{
    //             $(".navbar-inverse .container-fluid").css({'background-color': 'transparent','z-index':'0',borderBottom:'none'});
    //              $(".navbar-inverse .container-fluid .navbar-collapse ul li a").css({ 'color' : 'white'})
    //             //  $(".navbar-header img").attr("src",require('../styles/assets/img/logo/logo.png'));
    //           $(".navbar-inverse .navbar-toggle .icon-bar ").css({backgroundColor:"white"});
    //           $(".navbar-inverse .navbar-toggle:focus, .navbar-inverse .navbar-toggle:hover ").css({backgroundColor:'transparent'});
    
    
    //           }
              
    //       });
    //        }
    //    });







    // ova treba za sing in
        if(sessionStorage.getItem("islogin") == "true" || sessionStorage.getItem("isadmin") == "true"){
            // $('#loginNavv').text('Sing Out');
            // console.log("vlegovvvv");
            document.getElementById("loginNavv").textContent="Profile";
            if (sessionStorage.getItem("islogin") == "true") {
                document.getElementById("loginNavv").href="/user";
            } else if (sessionStorage.getItem("isadmin") == "true") {
                document.getElementById("loginNavv").href="/admin";
            }
        }
        // console.log(sessionStorage.getItem("islogin"));
        // console.log("dadadadadada")
      }

    render(){
        return(
            <div>
                <Navbar    collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand pullLeft>
                        <Image src={logo} responsive />
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                        <NavItem eventKey={1} id="homeButton" href="/">
                            HOME
                        </NavItem>
                        <NavItem eventKey={2} id="aboutButton">
                            ABOUT
                        </NavItem>
                        {/* <NavItem eventKey={2} id="roomButton">
                            ROOMS & SUITES
                        </NavItem>
                        <NavItem eventKey={2} id="trainButton">
                            TRAINING
                        </NavItem> */}
                        <NavItem eventKey={2} id="faqButton">
                            OUR SERVICES
                        </NavItem>
                        <NavItem eventKey={2} id="contactButton">
                            CONTACT US
                        </NavItem>
                        <NavItem eventKey={2} href="/res">
                            RESERVATION
                        </NavItem>
                        <NavItem eventKey={2} id="loginNavv" href="/login">
                            SING IN
                        </NavItem>
                        <NavItem eventKey={2} href="reg">
                            REGISTER
                        </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
      
        );
    }
}











