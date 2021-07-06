const regOnKeyDown = (event) => {
  document.addEventListener('keydown', (e) => {
    // alt + c
    if(e.altKey && e.code === 'KeyC') {
      event.$emit('AltLeft_KeyC', e);
    }
    // ctrl + shift + f
    if (e.ctrlKey && e.shiftKey && e.code === 'KeyF') {
      event.$emit('CtrlKey_ShiftKey_KeyF', e);
    }
  });
};

export default regOnKeyDown;
