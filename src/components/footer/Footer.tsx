import React from 'react';
import { Row, Col } from 'reactstrap';
import mapPinned from '../../assets/icon/map-pin.svg';
import whatsapp from '../../assets/icon/whatsapp.svg';
import mail from '../../assets/icon/mail.svg';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer-wrapper center-content">
      <Row className="w-100">
        <Col md={4} lg={4} xs={12} sm={12} className="center-content pt-2 pb-2">
          <img src={mapPinned} alt="map-pin.svg" />
          <span className="ml-2 color-white font-size-11">Rawajati, Pancoran, DKI Jakarta</span>
        </Col>
        <Col md={4} lg={4} xs={12} sm={12} className="center-content pt-2 pb-2">
          <img src={whatsapp} alt="phone.svg" />
          <a href="https://wa.me/6281310823820" target="_blank" rel="noopener noreferrer" className="ml-2 color-white font-size-11">081310823820</a>
        </Col>
        <Col md={4} lg={4} xs={12} sm={12} className="center-content pt-2 pb-2">
          <img src={mail} alt="mail.svg" />
          <a href="mailto:ahmdichsanb@gmail.com" target="_blank" rel="noopener noreferrer" className="ml-2 color-white font-size-11">
            ahmdichsanb@gmail.com
          </a>
        </Col>
      </Row>
    </footer>
  );
}
