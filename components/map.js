import React from "react";
import GoogleMapReact from "google-map-react";
import { FaHashtag } from "react-icons/fa";
const map = ({ location, zoomLevel }) => (
  <div className="map">
    <div className="google-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.76457494085!2d2.2769952508223055!3d48.85894658100365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sde!4v1667935762927!5m2!1sen!2sde"
        style={{ border: 0 }}
        aria-hidden="false"
        width="100%"
        height="450"
      ></iframe>
    </div>
  </div>
);
export default map;
const LocationPin = ({ text }) => (
  <div className="pin">
    <FaHashtag className="w-8 h-8 text-gray-500  p-1" />
    <p className="pin-text">{text}</p>
  </div>
);
