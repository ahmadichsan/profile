import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import ReactTooltip from 'react-tooltip';
import ProfilePic from '../../assets/img/profile-pic.png';
import instagram from '../../assets/icon/instagram.svg';
import github from '../../assets/icon/github.svg';
import gitlab from '../../assets/icon/gitlab.svg';
import medium from '../../assets/icon/medium.svg';
import man from '../../assets/img/man.svg';
import hapijs from '../../assets/icon/hapijs-circle.svg';
// import minio from '../../assets/icon/minio-circle.svg';
import nodejs from '../../assets/icon/nodejs-circle.svg';
// import postgres from '../../assets/icon/postgres-circle.svg';
import react from '../../assets/icon/react-circle.svg';
import redux from '../../assets/icon/redux-circle.svg';
import reduxSaga from '../../assets/icon/redux-saga-circle.svg';
import sass from '../../assets/icon/sass-circle.svg';
import typeorm from '../../assets/icon/typeorm-circle.svg';
import office from '../../assets/img/office.svg';
import work from '../../assets/img/work.svg';
import './LandingPage.scss';

export default function LandingPage() {
  return (
    <div className="container-fluid">
      <Row className="about-me-wrapper id-wrapper" id="about-me">
        <Col md={5} lg={5} sm={12} xs={12} className="ml-0 mr-0 mb-0 mt-90 top-center-content">
          <div>
            <div className="center-content">
              <img src={ProfilePic} className="profile-pic" alt="profile-pic.svg" />
            </div>
            <div className="mobile-my-name center-content text-center">
              Ahmad Ichsan Baihaqi
            </div>
          </div>
        </Col>
        <Col md={7} lg={7} sm={12} xs={12} className="ml-0 mr-0 mb-0 about-me-description text-justify">
          <div className="about-me">
            About Me
          </div>
          <div className="job-position mb-5">
            Software Developer
          </div>
          <div>
            Hi, I am Ahmad <b>Ichsan</b> Baihaqi, a <b>Software Developer</b> based
            in Jakarta, Indonesia. For the past two years, I have been working as a consultant in
            information technology and services industry.
            Skilled in <b>Javascript</b> with focus on Front End stack technology
            with <b>React</b>.

            <br /><br />
            If you are interested for collaboration, do not hesitate to contact me! You may contact and connect with me
            on LinkedIn&nbsp;
            <a
              href="https://www.linkedin.com/in/ahmadichsan"
              target="blank"
              className="linkedin"
            >
              here
            </a>.
          </div>
          <div className="mt-5">
            <Row>
              <Col md={4} lg={4} sm={12} xs={12} className="download-col">
                {/* <Button className="download-cv">
                  <b>DOWNLOAD CV</b>
                </Button> */}
              </Col>

              <Col md={8} lg={8} sm={12} xs={12}>
                <Row className="four-icon-row">
                  <Col md={2} lg={2} sm={2} xs={2} className="center-content">
                    <a href="https://www.instagram.com/ahmdichsan/" target="_blank" rel="noopener noreferrer">
                      <Button className="center-content btn-no-outline" color="transparent">
                        <img src={instagram} alt="instagram" />
                      </Button>
                    </a>
                  </Col>

                  <Col md={2} lg={2} sm={2} xs={2} className="center-content">
                    <a href="https://github.com/ahmdichsan" target="_blank" rel="noopener noreferrer">
                      <Button className="center-content btn-no-outline" color="transparent">
                        <img src={github} alt="github" />
                      </Button>
                    </a>
                  </Col>

                  <Col md={2} lg={2} sm={2} xs={2} className="center-content">
                    <a href="https://gitlab.com/ahmdichsan" target="_blank" rel="noopener noreferrer">
                      <Button className="center-content btn-no-outline" color="transparent">
                        <img src={gitlab} alt="gitlab" />
                      </Button>
                    </a>
                  </Col>

                  <Col md={2} lg={2} sm={2} xs={2} className="center-content">
                    <a href="https://ahmdichsanbaihaqi.medium.com/" target="_blank" rel="noopener noreferrer">
                      <Button className="center-content btn-no-outline" color="transparent">
                        <img src={medium} alt="medium" />
                      </Button>
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      <Row id="skills" className="skills-wrapper id-wrapper">
        <Col md={12} lg={12} sm={12} xs={12} className="p-0">
          <div className="title-wrapper">
            <div className="center-content">
              Professional Skills
            </div>
          </div>
          <div className="text-center mt-5 pl-2 pr-2">
            Below are some skills I acquired which not only related to Front End stack, but also Back End and Database stack.
          </div>
          <div className="man-wrap">
            <div className="center-content w-100">
              <img src={man} className="man" alt="man.svg" />
            </div>
          </div>
          <div className="all-skill-wrap">
            <div className="top-center-content w-100 second-wrap">
              <div className="skill-div-wrap">
                <img
                  src={react}
                  className="skill-icon"
                  id="react"
                  data-tip="ReactJS"
                  data-for="react-tooltip"
                  data-background-color="#66dcfc"
                  data-effect="solid"
                  alt="react.svg"
                />
                <ReactTooltip id="react-tooltip" />
              </div>
              <div className="skill-div-wrap">
                <img
                  src={redux}
                  className="skill-icon"
                  id="redux"
                  data-tip="Redux"
                  data-for="redux-tooltip"
                  data-background-color="#774cbc"
                  data-effect="solid"
                  alt="redux.svg"
                />
                <ReactTooltip id="redux-tooltip" />
              </div>
              <div className="skill-div-wrap">
                <img
                  src={reduxSaga}
                  className="skill-icon"
                  id="redux-saga"
                  data-tip="Redux Saga"
                  data-for="redux-saga-tooltip"
                  data-background-color="#999999"
                  data-effect="solid"
                  alt="reduxSaga.svg"
                />
                <ReactTooltip id="redux-saga-tooltip" />
              </div>
              <div className="skill-div-wrap">
                <img
                  src={sass}
                  className="skill-icon"
                  id="sass"
                  data-tip="SASS"
                  data-for="sass-tooltip"
                  data-background-color="#d1659d"
                  data-effect="solid"
                  alt="sass.svg"
                />
                <ReactTooltip id="sass-tooltip" />
              </div>
              <div className="skill-div-wrap">
                <img
                  src={nodejs}
                  className="skill-icon"
                  id="nodejs"
                  data-tip="NodeJS"
                  data-for="nodejs-tooltip"
                  data-background-color="#3c883a"
                  data-effect="solid"
                  alt="nodejs.svg"
                />
                <ReactTooltip id="nodejs-tooltip" />
              </div>
              <div className="skill-div-wrap">
                <img
                  src={hapijs}
                  className="skill-icon"
                  id="hapijs"
                  data-tip="HapiJS"
                  data-for="hapijs-tooltip"
                  data-background-color="#787780"
                  data-effect="solid"
                  alt="hapijs.svg"
                />
                <ReactTooltip id="hapijs-tooltip" />
              </div>
              <div className="skill-div-wrap">
                <img
                  src={typeorm}
                  className="skill-icon"
                  id="typeorm"
                  data-tip="TypeORM"
                  data-for="typeorm-tooltip"
                  data-background-color="#eb3824"
                  data-effect="solid"
                  alt="typeorm.svg"
                />
                <ReactTooltip id="typeorm-tooltip" />
              </div>
              {/* <div className="skill-div-wrap">
                <img
                  src={postgres}
                  className="skill-icon"
                  id="postgres"
                  data-tip="PostgresSQL"
                  data-for="postgres-tooltip"
                  data-background-color="#336791"
                  data-effect="solid"
                  alt="postgres.svg"
                />
                <ReactTooltip id="postgres-tooltip" />
              </div> */}
              {/* <div className="skill-div-wrap">
                <img
                  src={minio}
                  className="skill-icon"
                  id="minio"
                  data-tip="Minio"
                  data-for="minio-tooltip"
                  data-background-color="#c8324c"
                  data-effect="solid"
                  alt="minio.svg"
                />
                <ReactTooltip id="minio-tooltip" />
              </div> */}
            </div>
          </div>
        </Col>
      </Row>

      <Row id="experiences" className="experiences-wrapper id-wrapper">
        <Col md={6} lg={6} sm={12} xs={12} className="mb-3">
          <div className="experience-title">
            <div className="center-content">
              Experiences
            </div>
          </div>
          <div className="text-justify color-white mb-3">
            My journey as a Software Developer begins in Oct 2018 as a Full Stack Developer in an IT
            Consultant company.
          </div>
          <img src={office} alt="office.svg" width="100%" />
        </Col>
        <Col md={6} lg={6} sm={12} xs={12} className="mb-5">
          <div className="experience-list">
            <div>2018 - Current</div>
            <div>
              <b>PT. Ecomindo Saranacipta - eComindo</b>
            </div>
            <div className="mb-3">
              Full Stack Developer
            </div>
            <div className="text-justify font-size-12">
              My role in eComindo is to turn
              user requirements into a working application
              using various technology which suits with our clients requirements.
              As a consultant, I have to give advices based on my knowledge
              to provide solutions for our clients problems.
              Also, working with agile framework is my daily routine in all of my projects.
            </div>
          </div>
        </Col>
      </Row>

      <Row id="projects" className="projects-wrapper id-wrapper">
        <Col md={12} lg={12} sm={12} xs={12}>
          <div className="title-wrapper mb-5">
            <div className="center-content">
              Projects
            </div>
          </div>

          <div className="text-center mb-5">
            Below are some projects that I develop. These are company projects, self projects and freelance projects.
          </div>

          <div className="d-flex justify-content-center">
            <img
              src={work}
              alt="work.svg"
              className="project-icon"
              // style={{
              //   width: '80%'
              // }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}
