const storeForm = (form) => {
  localStorage.setItem('form', JSON.stringify(form));
};

export default storeForm;