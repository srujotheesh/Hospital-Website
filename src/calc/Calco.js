import React, { useState } from "react";
import 'react-calendar/dist/Calendar.css';
import './style.css';
import Calendar from "react-calendar";
import NavBar from "../components/NavBar";

const Calco = () => {
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  };

  return (
    <div class="cal">
     <NavBar/>
     <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <div class="cal1">
        <div class="row">
        <div class="col-sm-2"></div>
        <div class="col-sm-4">
      <Calendar showWeekNumbers onChange={onChange} value={date}/>
      <br></br>   <p>Note: Sunday is Holiday </p>
                            <h3>Working Time:</h3>
                          <p> 8:00 AM - 11:00 AM</p>
                           <p> 2:00 PM - 05:00 PM</p>
                            <p>8:00 PM - 11:00 PM</p>
      </div>
      <div class="col-sm-4"><div class = "contact-right text-white text-center bg-blue"><div class="cont">
                    <div class = "contact-head">
                        <h3 class = "lead">BOOK APPOINTMENT</h3>
                    </div>
          
                    <form action="https://formspree.io/f/" method="POST">
                        <div class = "form-element">
                            <input type ="text" class = "form-control" name="Name" placeholder="Your name"/>
                        </div>
                        <div class = "form-element">
                            <input type ="email" name="Email" class = "form-control" placeholder="Your email"/>
                        </div>
                        <div class = "form-element">
                            <textarea rows = "5" placeholder="your problem" name="Message" class = "form-control"></textarea>
                        </div>
                        <div class = "form-element">
                            <textarea rows = "5" placeholder="Timing" name="Message" class = "form-control"></textarea>
                        </div>
                        <button type = "submit" class = "btn btn-white btn-submit">
                            <i class = "fas fa-arrow-right"></i> BOOK
                        </button>
                    </form>
                    </div>
                    </div>
                </div>
                <div class="col-sm-2"></div>
    </div>
    </div>
    <br></br>
    </div>
  );
};
export default Calco;
