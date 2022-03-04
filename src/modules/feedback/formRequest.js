const formRequest = (body) => fetch('./sendForm.php', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(body),
});

export default formRequest;
