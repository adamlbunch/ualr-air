import React, { Component } from 'react';

export class Start extends Component {
  displayName = Start.name

  

    render() {
      var displayEmailGreeting = <h3>Welcome {this.props.currentUser.email}!</h3>
      var displayStudentTypeInfo = null;
      if (this.props.currentUser.studentType === 'T') {
        displayStudentTypeInfo = <h4>As a traditional student UALR's Computer Science Department has tons to offer!</h4>
      }
      else {
        displayStudentTypeInfo = <h4>As a non-traditional student, UALR will be a fantastic starting point to new and exciting future!</h4>
      }

      var displayInterestInfo = null
      switch (this.props.currentUser.interest) {
        case "DEVELOPMENT":
          displayInterestInfo = <div><h5>Development</h5><p>UALR Offers some amazing developer courses to strengthen your coding sword!</p></div>
          break;
        case "SECURITY":
          displayInterestInfo = <div><h5>Security</h5><p>IT Security is growing at a rapid rate as our infrastructure becomes more geared towards an online presence.  Let UALR help you become an expert at IT Security!</p></div>
          break;
        case "DATABASEANALYSIS":
          displayInterestInfo = <div><h5>Database Analysis</h5><p>Let UALR help you succeed in your journey to mastering the ins and outs of database technologies!</p></div>
          break;
        case "NOTSURE":
          displayInterestInfo = <div><h5>Not Sure?</h5><p>Computer Science has many potential career opportunities available!  We are here to help you learn the tools to forge the right path!</p></div>
          break;
        default:
          displayInterestInfo = null
      }

      return (
        <div>
          <div id="main-text">
            <p>
              {this.props.custom}
              {displayEmailGreeting}
              {displayStudentTypeInfo}
              <br/>
              {displayInterestInfo}
              Welcome to one of the most vibrant and highly regarded computer science programs 
              in the state – Computer Science @ UA Little Rock, in the Donaghey College of 
              Engineering and Information Technology (EIT). We seek to prepare students for 
              careers as computer scientists in business and industry, to train students in 
              software design and development, and to prepare students for advanced study in 
              computer science. We offer Bachelor of Science and the Master of Science degrees 
              in Computer Science as well as the Doctor of Philosophy (Ph.D.) degree in Computer 
              and Information Sciences. 
            </p>
            <p>
              We are proud of our heritage as a student-learning focused department that 
              educates its students to be outstanding computing professionals. We are 
              continually responding to an urgent need for fundamental changes in the education 
              of future computer scientists to insure that they are well prepared for their ever-more 
              demanding professional roles. These demands relate to success in the job market, 
              responsibilities toward employers, customers and society, and responsibilities as 
              developers of powerful and pervasive technologies. In addition to strong technical 
              and management skills, we seek to educate our students as future software designers 
              with the requisite skills to design customized products and integrated services that 
              meet the diverse needs of a multi-cultural, multi-ethnic, and increasingly smaller world 
              united by rapid technological advances.
            </p>
            <p>
              We are primarily committed to helping our students excel in computer science research 
              and education – aided by our caring faculty that values personal interactions to enable 
              student success. Our graduates hold excellent jobs in various national and international 
              companies and have gone on to pursue advanced degrees at many prestigious institutions.
            </p>
            <p>
              On behalf of our faculty, I extend our warmest welcome, and encourage you to explore our 
              department more closely and thoroughly. While our faculty members are noted scholars in 
              their respective professional fields, we come together with a vested interest in engaging 
              our students in many interesting ways. If you are contemplating pursuit of a degree in 
              Computer Science or a related area, there’s nothing like visiting our campus to experience 
              the campus life at UA Little Rock and to get to know our faculty and staff. Come and experience 
              our commitment to your success!
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        );
    }
}
