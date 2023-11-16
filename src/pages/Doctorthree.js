import '../pages/main.css';
import '../pages/normalize.css';
import '../pages/doc.css';
import NavBar from "../components/NavBar";
import pic19 from "../pages/image.png";
import pic16 from "../pages/heo.png";
import pic17 from "../pages/jang.png";
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
            <img src={pic19} width={20} height={450}/>
            </div>

        <div class="col-sm-7 cls2">
         <div class="card">
            <div class="card-body bg-primary">Dr.Lee Ik-joon<br></br>
            MBBS,MD,DM<br></br>Gastroentrologist<br></br>
            13 Years of Experience Overall(7 Years as Specialist)<br></br>
              <br></br>
              Dr.Lee Ik-joon ,is patient friendly clinician who will listen carefully about your complains and diagonis your illness with his skillful clinical approach and he will provides you a proper solution also makes you understand what you are suffering form.<br></br>
              <br></br>Contact Details:<br></br>
              KEC Hopital,Thpopupalayam,Kumaran Nagar,Perudurai.<br></br>
              Ph.no: 04294 226 555<br></br>
              <br></br><br></br>
           &nbsp;&nbsp;&nbsp; <Link to='/Calco' className="btn btn-yellow">Book an Appointment</Link>
          
      </div>
      </div>
      <div class="col-sm-1"></div>
      </div>
      </div>
      <br></br> <br></br>
      <div class="p1">  
      <div style={{ borderTop: "2px solid #fff ", marginLeft: 2, marginRight: 2 }}></div><br></br> <br></br>
          <p> Gastroenterology is the study of the normal function and diseases of the esophagus, stomach, small intestine, colon and rectum, pancreas, gallbladder, bile ducts and liver. It involves a detailed understanding of the normal action (physiology) of the gastrointestinal organs including the movement of material through the stomach and intestine (motility), the digestion and absorption of nutrients into the body, removal of waste from the system, and the function of the liver as a digestive organ</p><br></br>

<div class="row">
    <div class="col-sm-6">
  <div class="form-check ">
    <input class="form-check-input" style={{backgroundColor:"orange"}} type="checkbox" value="" id="flexCheckChecked" checked/>
    <label class="form-check-label" for="flexCheckChecked">
    Rectal bleeding
    </label>
  </div>
  <div class="form-check ">
    <input class="form-check-input" style={{backgroundColor:"orange"}}  type="checkbox" value="" id="flexCheckChecked" checked/>
    <label class="form-check-label" for="flexCheckChecked">
    Leakage / underwear stains
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" style={{backgroundColor:"orange"}} type="checkbox" value="" id="flexCheckChecked" checked/>
    <label class="form-check-label" for="flexCheckChecked">
    Bowel movement urges that are hard to control
    </label>
  </div>
  <div class="form-check " >
    <input class="form-check-input" style={{backgroundColor:"orange"}} type="checkbox" value="" id="flexCheckChecked" checked/>
    <label class="form-check-label" for="flexCheckChecked">
    Diarrhea
    </label>
  </div>
</div>
<div class="col-sm-6">
    <div class="form-check">
      <input class="form-check-input" style={{backgroundColor:"orange"}}  type="checkbox" value="" id="flexCheckChecked" checked/>
      <label class="form-check-label" for="flexCheckChecked">
      Changes in bowel habits
      </label>
    </div>
    <div class="form-check ">
      <input class="form-check-input" style={{backgroundColor:"orange"}}  type="checkbox" value="" id="flexCheckChecked" checked/>
      <label class="form-check-label" for="flexCheckChecked">
      Pale-colored stools
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" style={{backgroundColor:"orange"}}  type="checkbox" value="" id="flexCheckChecked" checked/>
      <label class="form-check-label" for="flexCheckChecked">
      Dark urine
      </label>
    </div>
    <div class="form-check" >
      <input class="form-check-input" style={{backgroundColor:"orange"}} type="checkbox" value="" id="flexCheckChecked" checked/>
      <label class="form-check-label" for="flexCheckChecked">
      Multiple sclerosis and headaches
      </label>
    </div>
  </div>
</div>
<br></br><div style={{ borderTop: "2px solid #fff ", marginLeft: 2, marginRight: 2 }}></div><br></br>
<div class="p2"><p>TEAM MEMBERS OF GASTROENTROLOGY</p></div>
<div class="row">
      <div class="col-sm-5">
        <div class="row">
        <div class="col">
<img src={pic16} width={30} height={300} class="rounded float-left"/></div>
<div class="col">
<br></br><br></br>
Dr.Heo Seon-bin<br></br>
MBBS,MD,DM(GASTRO)-KEC Hopstial<br></br>
</div>
      </div>
    </div>&nbsp;&nbsp;
    <div class="col-sm-5">
      <div class="row">
      <div class="col">
<img src={pic17} width={30} height={300} class="rounded float-left"/></div>
<div class="col">
<br></br><br></br>
Dr.Jang Hyun-sung<br></br>
MBBS,MD,DM(GASTRO)-KEC Hopstial<br></br>
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