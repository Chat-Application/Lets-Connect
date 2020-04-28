import React from "react";
import bhawan from "img/bhawan.jpg";
import dimpy from "img/dimpy.jpg";

import "/css/style.css";

const Profile = () => {
  return (
    < >
      <aside class="others open" id="others">
        <div class="panel">
          <h2> My Contacts </h2>{" "}
          <div class="people-list" id="people-list">
            <div class="searchbox searchnav search-container">
              <input type="text" placeholder="Search.." name="search">
                <i class="fa fa-search"> </i>{" "}
              </div>{" "}
              <ul class="list">
                <li class="clearfix">
                  <img src={bhawan} alt="avatar" />
                  <div class="about">
                    <div class="name"> Bhawan Sidhu </div>{" "}
                    <div class="status">
                      <i class="fa fa-circle online"> </i> online{" "}
                    </div>{" "}
                  </div>{" "}
                </li>

                <li class="clearfix">
                  <img src={dimpy} alt="avatar" />
                  <div class="about">
                    <div class="name"> Dimpy </div>{" "}
                    <div class="status">
                      <i class="fa fa-circle online"> </i> online{" "}
                    </div>{" "}
                  </div>{" "}
                </li>

                <li class="clearfix">
                  <img src={bhawan} alt="avatar" />
                  <div class="about">
                    <div class="name"> Aman </div>{" "}
                    <div class="status">
                      <i class="fa fa-circle offline"> </i> 3 hours ago{" "}
                    </div>{" "}
                  </div>{" "}
                </li>

                <li class="clearfix">
                  <img src={bhawan} alt="avatar" />
                  <div class="about">
                    <div class="name"> Shreya </div>{" "}
                    <div class="status">
                      <i class="fa fa-circle online"> </i> online{" "}
                    </div>{" "}
                  </div>{" "}
                </li>

                <li class="clearfix">
                  <img src={bhawan} alt="avatar" />
                  <div class="about">
                    <div class="name"> Joseph </div>{" "}
                    <div class="status">
                      <i class="fa fa-circle online"> </i> online{" "}
                    </div>{" "}
                  </div>{" "}
                </li>

                <li class="clearfix">
                  <img src={bhawan} alt="avatar" />
                  <div class="about">
                    <div class="name"> Kunal </div>{" "}
                    <div class="status">
                      <i class="fa fa-circle offline"> </i> left 30 mins ago{" "}
                    </div>{" "}
                  </div>{" "}
                </li>

                <li class="clearfix">
                  <img src={bhawan} alt="avatar" />
                  <div class="about">
                    <div class="name"> Inna </div>{" "}
                    <div class="status">
                      <i class="fa fa-circle offline"> </i> left 11 hours ago{" "}
                    </div>{" "}
                  </div>{" "}
                </li>

                <li class="clearfix">
                  <img src={bhawan} alt="avatar" />
                  <div class="about">
                    <div class="name"> Bijay </div>{" "}
                    <div class="status">
                      <i class="fa fa-circle online"> </i> online{" "}
                    </div>{" "}
                  </div>{" "}
                </li>

                <li class="clearfix">
                  <img src={bhawan} alt="avatar" />
                  <div class="about">
                    <div class="name"> Manpreet </div>{" "}
                    <div class="status">
                      <i class="fa fa-circle offline"> </i> offline yesterday{" "}
                    </div>{" "}
                  </div>{" "}
                </li>

                <li class="clearfix">
                  <img src={bhawan} alt="avatar" />
                  <div class="about">
                    <div class="name"> Avleen </div>{" "}
                    <div class="status">
                      <i class="fa fa-circle offline"> </i> offline since March
                      12{" "}
                    </div>{" "}
                  </div>{" "}
                </li>

                <li class="clearfix">
                  <img src={bhawan} alt="avatar" />
                  <div class="about">
                    <div class="name"> Hardeep </div>{" "}
                    <div class="status">
                      <i class="fa fa-circle offline"> </i> offline Yeasterday{" "}
                    </div>{" "}
                  </div>{" "}
                </li>

                <li class="clearfix">
                  <img src={bhawan} alt="avatar" />
                  <div class="about">
                    <div class="name"> Mandeep </div>{" "}
                    <div class="status">
                      <i class="fa fa-circle offline"> </i> offline 2 hours ago{" "}
                    </div>{" "}
                  </div>{" "}
                </li>
              </ul>{" "}
            </div>
          </div>{" "}
          <button class="toggle-others" id="btnOthers">
            {" "}
            <span> chats </span>
          </button>
        </aside>
        <main class="conversation" id="conversation">
          <div>
            <div class="chat-msg">
              <h2> Chat Messages </h2>{" "}
            </div>
            <div class = "container" >
        <img src = { bhawan }
        alt = "Avatar"
        style = "width:100%;" >
        <p > Hello.How are you today ? < /p> <span class = "time-right" > 11 : 00 AM </span> < /div >

        <div class = "container darker" >
        <img src = { dimpy }
        alt = "Avatar"
        class = "right"
        style = "width:100%;" >
        <p > Hey!I 'm fine. Thanks for asking!</p> <span class = "time-left" > 11: 01 AM </span> </div >

        <div class = "container" >
        <img src = { bhawan }
        alt = "Avatar"
        style = "width:100%;" >
        <p > So, are you done with your work today ? < /p> <span class = "time-right" > 11 : 02 AM </span> </div >

        <div class = "container darker" >
        <img src = { dimpy }
        alt = "Avatar"
        class = "right"
        style = "width:100%;" >
        <p > Nah, not yet. < /p> <span class = "time-left" > 11: 05 AM </span> </div> <div class = "container" >
        <img src = { bhawan }
        alt = "Avatar"
        style = "width:100%;" >
        <p > Why ? </p> <span class = "time-right" > 11 : 00 AM </span> </div>

        <div class = "container darker" >
        <img src = { dimpy }
        alt = "Avatar"
        class = "right"
        style = "width:100%;" >
        <p > Actually I was feeling unwell, so slept
        for a
        while ! </p> <span class = "time-left" > 11: 01 AM </span> </div >

        <div class = "container" >
        <img src = { bhawan }
        alt = "Avatar"
        style = "width:100%;" >
        <p> Ok, even I went
        for shopping today. < /p> <span class = "time-right" > 11: 02 AM </span> </div >

        <div class = "container darker" >
        <img src = { dimpy }
        alt = "Avatar"
        class = "right"
        style = "width:100%;" >
        <p > Great, I 'll update you once I'
        m done </p> <span class = "time-left" > 11: 05 AM </span> 
        </div>
          </div>
        </main>
      </div>{" "}
    </>
  );
};

export default Profile;
