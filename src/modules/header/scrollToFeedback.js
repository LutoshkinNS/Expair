const scrollToFeedback = () => {
  const btnToForm = document.getElementById('btnToForm');

  btnToForm.onclick = () => {
    document.getElementById('feedback').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
};

export default scrollToFeedback;
