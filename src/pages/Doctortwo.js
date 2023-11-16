import '../pages/main.css';
import '../pages/normalize.css';
import '../pages/doc.css';
import NavBar from "../components/NavBar";
import pic11 from "../pages/Heart.jpg";
import pic14 from "../pages/jung.png";
import pic15 from "../pages/choo.png";
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
            <img src={pic11} width={20} height={450}/>
            </div>

        <div class="col-sm-7 cls2">
         <div class="card">
            <div class="card-body bg-primary">Dr.Kim Jun-wan<br></br>
            MBBS,MD,DM,FICPS<br></br>Cardiologist<br></br>
            8 Years of Experience Overall(3 Years as Specialist)<br></br>
              <br></br>
              Dr.Kim Jun-wan ,is a Physician who is an expert in the care of the geart and blood vessels.They can treat or help you prevent a number of cardiovascular problems.They can also specialize in specific area such as heart failure ,abnormal heart rythms.<br></br>
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
          <p> The Department of cardiothoracic surgery was established in 2013 at the city unit facility and subsequently at the Neelambur facility. The team of surgeons and paramedical staff offer expert care to the patients which is reflected by quality indices like low mortality rate, low infection rate and an early return to activity

The department of cardiothoracic surgery is steered by the able guidance of Dr Kim Jun-wan who had his Undergraduate and post graduate training from M S Ramaiah Medical college, Bangalore and diplomate of Cardiothoracic surgery from National Board of Examinations, New Delhi. He has served in prestigious institutes like Sri Sathya Sai Institute of Higher Medical Sciences Puttaparthi before he joined us. He has performed a wide range of cardiothoracic and vascular procedures and has presented his data in national and International forum</p><br></br>

<div class="row">
    <div class="col-sm-6">
  <div class="form-check ">
    <input class="form-check-input" style={{backgroundColor:"orange"}} type="checkbox" value="" id="flexCheckChecked" checked/>
    <label class="form-check-label" for="flexCheckChecked">
    Anomalous pulmonary artery from pulmonary artery in an adult with Mitral valve replacement
    </label>
  </div>
  <div class="form-check ">
    <input class="form-check-input" style={{backgroundColor:"orange"}}  type="checkbox" value="" id="flexCheckChecked" checked/>
    <label class="form-check-label" for="flexCheckChecked">
    Redo CABG
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" style={{backgroundColor:"orange"}} type="checkbox" value="" id="flexCheckChecked" checked/>
    <label class="form-check-label" for="flexCheckChecked">
    Ventricular septal rupture following MI
    </label>
  </div>
  <div class="form-check " >
    <input class="form-check-input" style={{backgroundColor:"orange"}} type="checkbox" value="" id="flexCheckChecked" checked/>
    <label class="form-check-label" for="flexCheckChecked">
    Free wall rupture following MI
    </label>
  </div>
</div>
<div class="col-sm-6">
    <div class="form-check">
      <input class="form-check-input" style={{backgroundColor:"orange"}}  type="checkbox" value="" id="flexCheckChecked" checked/>
      <label class="form-check-label" for="flexCheckChecked">
      Aortic Aneurysm
      </label>
    </div>
    <div class="form-check ">
      <input class="form-check-input" style={{backgroundColor:"orange"}}  type="checkbox" value="" id="flexCheckChecked" checked/>
      <label class="form-check-label" for="flexCheckChecked">
      Left ventricular aneurysm
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" style={{backgroundColor:"orange"}}  type="checkbox" value="" id="flexCheckChecked" checked/>
      <label class="form-check-label" for="flexCheckChecked">
      CABG with Mitral valve replacement in acute severe Mitral regurgitation
      </label>
    </div>
    <div class="form-check" >
      <input class="form-check-input" style={{backgroundColor:"orange"}} type="checkbox" value="" id="flexCheckChecked" checked/>
      <label class="form-check-label" for="flexCheckChecked">
      Carotid Endarterectomy
      </label>
    </div>
  </div>
</div>
<br></br><div style={{ borderTop: "2px solid #fff ", marginLeft: 2, marginRight: 2 }}></div><br></br>
<div class="p2"><p>TEAM MEMBERS OF CARDIOLOGY</p></div>
<div class="row">
      <div class="col-sm-5">
        <div class="row">
        <div class="col">
<img src={pic15} width={30} height={300} class="rounded float-left"/></div>
<div class="col">
<br></br><br></br>
Dr.Jang Gyeo-wool<br></br>
MBBS,MD,MS.M.Ch-KEC Hopstial<br></br>
</div>
      </div>
    </div>&nbsp;&nbsp;
    <div class="col-sm-5">
      <div class="row">
      <div class="col">
<img src={pic14} width={30} height={300} class="rounded float-left"/></div>
<div class="col">
<br></br><br></br>
Dr.Choo Min-ha<br></br>
MBBS,MD-KEC Hopstial<br></br>
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