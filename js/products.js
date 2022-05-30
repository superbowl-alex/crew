(() => {
  const refs = {
    openProduct1Btn: document.querySelector('[data-product-1-open]'),
    closeProduct1Btn: document.querySelector('[data-product-1-close]'),
    product1: document.querySelector('[data-product-1]'),
    openProduct2Btn: document.querySelector('[data-product-2-open]'),
    closeProduct2Btn: document.querySelector('[data-product-2-close]'),
    product2: document.querySelector('[data-product-2]'),
    openProduct3Btn: document.querySelector('[data-product-3-open]'),
    closeProduct3Btn: document.querySelector('[data-product-3-close]'),
    product3: document.querySelector('[data-product-3]'),
  };

  refs.openProduct1Btn.addEventListener('click', toggleProduct1);
  refs.closeProduct1Btn.addEventListener('click', toggleProduct1);

  refs.openProduct2Btn.addEventListener('click', toggleProduct2);
  refs.closeProduct2Btn.addEventListener('click', toggleProduct2);
    
  refs.openProduct3Btn.addEventListener('click', toggleProduct3);
  refs.closeProduct3Btn.addEventListener('click', toggleProduct3);  
    
  function toggleProduct1() {
    refs.product1.classList.toggle('is-product-hidden');
  }
    
  function toggleProduct2() {
    refs.product2.classList.toggle('is-product-hidden');
  }  
  
  function toggleProduct3() {
    refs.product3.classList.toggle('is-product-hidden');
  }    
})();