import '../pages/main.css';
import '../pages/normalize.css';
import '../pages/doc.css';
import NavBar from "../components/NavBar";
import pic1 from "../pages/neurologist.jpg";
import pic4 from "../pages/gynocologist.jpeg";
import pic5 from "../pages/pediatrician.jpeg";
import { Link } from 'react-router-dom';
import React from "react";

export default function Doctoro(){
    return(
    <div class="bod">
    <NavBar/><br></br><br></br><br></br><br></br><br></br>
    <div class="con">
        <div class="row">
        <div class="col-sm-1"></div>
            <div class="col-sm-3 cl1">
            <img src={pic1} width={20} height={450}/>
            </div>

        <div class="col-sm-7 cls2">
         <div class="card">
            <div class="card-body bg-primary">Dr.Chae Song-wan<br></br>
              MBBS,MD-Genral Medicine,DM-Neurlogy<br></br>Neurologist<br></br>
              10 Years of Experience Overall(5 Years as Specialist)<br></br>
              <br></br>
              Dr.Chae Song-wan ,is patient friendly clinician who will listen carefully about your complains and diagonis your illness with his skillful clinical approach and he will provides you a proper solution also makes you understand what you are suffering form.<br></br>
              <br></br>Contact Details:<br></br>
              KEC Hopital,Thpopupalayam,Kumaran Nagar,Perudurai.<br></br>
              Ph.no: 04294 226 555<br></br>
              <br></br><br></br>
           &nbsp;&nbsp;&nbsp;   <Link to='/Calco' className="btn btn-yellow">Book an Appointment</Link>
          
      </div>
      </div>
      <div class="col-sm-1"></div>
      </div>
      </div>
      <br></br> <br></br>
      <div class="p1">  
      <div style={{ borderTop: "2px solid #fff ", marginLeft: 2, marginRight: 2 }}></div><br></br> <br></br>
          <p> The Department of Neurology at Royal Care is 24x7 Multi Disciplinary for Comprehensive Stroke Care with Dedicated stroke care beds and treating many disorders related to the nervous system. The department is focused on providing comprehensive care to the patients by using the advanced technology in the ever evolving neurology space. The Department is committed to integrate its exceptional medical expertise, technology, and innovation to offer world class treatments.
The department provides diagnosis and treatment for people with neurological disorders such as</p><br></br>

<div class="row">
    <div class="col-sm-6">
  <div class="form-check ">
    <input class="form-check-input" style={{backgroundColor:"orange"}} type="checkbox" value="" id="flexCheckChecked" checked/>
    <label class="form-check-label" for="flexCheckChecked">
      Comprehensive Stroke Care
    </label>
  </div>
  <div class="form-check ">
    <input class="form-check-input" style={{backgroundColor:"orange"}}  type="checkbox" value="" id="flexCheckChecked" checked/>
    <label class="form-check-label" for="flexCheckChecked">
     Comprehensive Epilsey Care
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" style={{backgroundColor:"orange"}} type="checkbox" value="" id="flexCheckChecked" checked/>
    <label class="form-check-label" for="flexCheckChecked">
      Movement Disorders Including Parkinosis
    </label>
  </div>
  <div class="form-check " >
    <input class="form-check-input" style={{backgroundColor:"orange"}} type="checkbox" value="" id="flexCheckChecked" checked/>
    <label class="form-check-label" for="flexCheckChecked">
      EMG Gluded Botulium Problems
    </label>
  </div>
</div>
<div class="col-sm-6">
    <div class="form-check">
      <input class="form-check-input" style={{backgroundColor:"orange"}}  type="checkbox" value="" id="flexCheckChecked" checked/>
      <label class="form-check-label" for="flexCheckChecked">
        Comprehensive Stroke Care
      </label>
    </div>
    <div class="form-check ">
      <input class="form-check-input" style={{backgroundColor:"orange"}}  type="checkbox" value="" id="flexCheckChecked" checked/>
      <label class="form-check-label" for="flexCheckChecked">
       Paralytic disorders
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" style={{backgroundColor:"orange"}}  type="checkbox" value="" id="flexCheckChecked" checked/>
      <label class="form-check-label" for="flexCheckChecked">
        Stroke disorders
      </label>
    </div>
    <div class="form-check" >
      <input class="form-check-input" style={{backgroundColor:"orange"}} type="checkbox" value="" id="flexCheckChecked" checked/>
      <label class="form-check-label" for="flexCheckChecked">
       Multiple sclerosis and headaches.
      </label>
    </div>
  </div>
</div>
<br></br><div style={{ borderTop: "2px solid #fff ", marginLeft: 2, marginRight: 2 }}></div><br></br>
<div class="p2"><p>TEAM MEMBERS OF NEUROLOGY</p></div>
<div class="row">
      <div class="col-sm-5">
        <div class="row">
        <div class="col">
<img src={pic5} width={40} height={250} class="rounded float-left"/></div>
<div class="col">
<br></br><br></br>
  Dr.Ahn jeong-won<br></br>
  MBBS,MD,DM(NEURO)-KEC Hopstial<br></br>
</div>
      </div>
    </div>&nbsp;&nbsp;
    <div class="col-sm-5">
      <div class="row">
      <div class="col">
<img src={pic4} width={40} height={250} class="rounded float-left"/></div>
<div class="col">
<br></br><br></br>
Dr.yang Seok-hyung<br></br>
MBBS,MD,DM(NEURO)-KEC Hopstial<br></br>
</div>
    </div>
  </div>
</div>
<br></br><br></br><div style={{ borderTop: "2px solid #fff ", marginLeft: 2, marginRight: 2 }}></div><br></br>
</div>
</div>
    </div>
        );
}