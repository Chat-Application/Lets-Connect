import React from "react";
import bhawan from "img/bhawan.jpg";
import dimpy from "img/dimpy.jpg";

// import "/css/style.css";

const Profile = () => {
  return (
    <>
      <aside className="others open" id="others">
        <div className="panel">
          <h2> My Contacts </h2>
          <div className="people-list" id="people-list">
            <div className="searchbox searchnav search-container">
              <input type="text" placeholder="Search.." name="search" />
              <i className="fa fa-search"> </i>
            </div>
            <ul className="list">
              <li className="clearfix">
                <img src={bhawan} alt="avatar" />
                <div className="about">
                  <div className="name"> Bhawan Sidhu </div>
                  <div className="status">
                    <i className="fa fa-circle online"> </i> online
                  </div>
                </div>
              </li>

              <li className="clearfix">
                <img src={dimpy} alt="avatar" />
                <div className="about">
                  <div className="name"> Dimpy </div>
                  <div className="status">
                    <i className="fa fa-circle offline"> </i> 1 hour ago
                  </div>
                </div>
              </li>

              <li className="clearfix">
                <img src={bhawan} alt="avatar" />
                <div className="about">
                  <div className="name"> Aman </div>
                  <div className="status">
                    <i className="fa fa-circle offline"> </i> 3 hours ago
                  </div>
                </div>
              </li>

              <li className="clearfix">
                <img src={bhawan} alt="avatar" />
                <div className="about">
                  <div className="name"> Shreya </div>
                  <div className="status">
                    <i className="fa fa-circle online"> </i> online
                  </div>
                </div>
              </li>

              <li className="clearfix">
                <img src={bhawan} alt="avatar" />
                <div className="about">
                  <div className="name"> Joseph </div>
                  <div className="status">
                    <i className="fa fa-circle online"> </i> online
                  </div>
                </div>
              </li>

              <li className="clearfix">
                <img src={bhawan} alt="avatar" />
                <div className="about">
                  <div className="name"> Kunal </div>
                  <div className="status">
                    <i className="fa fa-circle offline"> </i> left 30 mins ago
                  </div>
                </div>
              </li>

              <li className="clearfix">
                <img src={bhawan} alt="avatar" />
                <div className="about">
                  <div className="name"> Inna </div>
                  <div className="status">
                    <i className="fa fa-circle offline"> </i> left 11 hours ago
                  </div>
                </div>
              </li>

              <li className="clearfix">
                <img src={bhawan} alt="avatar" />
                <div className="about">
                  <div className="name"> Bijay </div>
                  <div className="status">
                    <i className="fa fa-circle online"> </i> online
                  </div>
                </div>
              </li>

              <li className="clearfix">
                <img src={bhawan} alt="avatar" />
                <div className="about">
                  <div className="name"> Manpreet </div>
                  <div className="status">
                    <i className="fa fa-circle offline"> </i> offline yesterday
                  </div>
                </div>
              </li>

              <li className="clearfix">
                <img src={bhawan} alt="avatar" />
                <div className="about">
                  <div className="name"> Avleen </div>
                  <div className="status">
                    <i className="fa fa-circle offline"> </i> offline since
                    March 12
                  </div>
                </div>
              </li>

              <li className="clearfix">
                <img src={bhawan} alt="avatar" />
                <div className="about">
                  <div className="name"> Hardeep </div>
                  <div className="status">
                    <i className="fa fa-circle offline"> </i> offline Yeasterday
                  </div>
                </div>
              </li>

              <li className="clearfix">
                <img src={bhawan} alt="avatar" />
                <div className="about">
                  <div className="name"> Mandeep </div>
                  <div className="status">
                    <i className="fa fa-circle offline"> </i> offline 2 hours
                    ago
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <button className="toggle-others" id="btnOthers">
          <span> chats </span>
        </button>
      </aside>
      <main className="conversation" id="conversation">
        <div>
          <div className="chat-msg">
            <h2> Chat Messages </h2>
          </div>
          <div className="container">
            <img src={bhawan} alt="Avatar" />
            <p> Hello.How are you today ? </p>
            <span className="time-right"> 11 : 00 AM </span>
          </div>
          <div className="container darker">
            <img src={dimpy} alt="Avatar" className="right" />
            <p> Hey!I 'm fine. Thanks for asking!</p>
            <span className="time-left"> 11: 01 AM </span>
          </div>
          <div className="container">
            <img src={bhawan} alt="Avatar" />
            <p> So, are you done with your work today ? </p>
            <span className="time-right"> 11 : 02 AM </span>
          </div>
          <div className="container darker">
            <img src={dimpy} alt="Avatar" className="right" />
            <p> Nah, not yet. </p>{" "}
            <span className="time-left"> 11: 05 AM </span>
          </div>
          <div className="container">
            <img src={bhawan} alt="Avatar" />
            <p> Why ? </p> <span className="time-right"> 11 : 00 AM </span>
          </div>
          <div className="container darker">
            <img src={dimpy} alt="Avatar" className="right" />
            <p> Actually I was feeling unwell, so slept for a while ! </p>
            <span className="time-left"> 11: 01 AM </span>
          </div>
          <div className="container">
            <img src={bhawan} alt="Avatar" />
            <p> Ok, even I went for shopping today. </p>
            <span className="time-right"> 11: 02 AM </span>
          </div>
          <div className="container darker">
            <img src={dimpy} alt="Avatar" className="right" />
            <p> Great, I 'll update you once I' m done </p>
            <span className="time-left"> 11: 05 AM </span>
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;
