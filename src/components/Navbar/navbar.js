import React from 'react'
import './navbar.css'


 
// Exporting Default Navbar to the App.js File
export default function Navbar() {
   
return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Home <span class="sr-only"></span></a>
      <a class="nav-item nav-link" href="#About">About</a>
      <a class="nav-item nav-link" href="#Projects">Projects</a>
      <a class="nav-item nav-link" href="#Resume">Resume</a>
      <a class="nav-item nav-link" href="#Contact">Contact</a>
    </div>
  </div>
</nav> 
);
    
}