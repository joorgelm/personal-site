const { REACT_APP_CV_URL } = process.env;

const Resume = () => {
  window.location.href = REACT_APP_CV_URL;
};

export default Resume;
