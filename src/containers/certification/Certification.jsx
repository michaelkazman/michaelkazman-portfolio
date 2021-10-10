import React from 'react';
import './Certification.css';
import { Fade } from 'react-reveal';
import { certifications } from '../../static/portfolio';
import CertificationCard from '../../components/certificationCard/CertificationCard';

const CertificationContainer = ({ theme }) => (
  <div className="main" id="certs">
    <div className="certs-header-div">
      <Fade bottom duration={2000} distance="20px">
        <h1 className="certs-header" style={{ color: theme.text }}>
          Certifications
        </h1>
      </Fade>
    </div>
    <div className="certs-body-div">
      {certifications.certifications.map(
        (certificate) => (
          <CertificationCard
            key={certificate.certificate_link}
            certificate={certificate}
            theme={theme}
          />
        ),
      )}
    </div>
  </div>
);

export default CertificationContainer;
