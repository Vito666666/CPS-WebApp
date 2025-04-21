document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById("btn");
    const btn_clicks = document.getElementById("click");
    const timer = document.getElementById("timer");
    const cps = document.getElementById("cps");
  
    let count = 0;
    let timerstarter = false;
    let sigmainterval;
    let locked = false;
    let selectedTime = null;
  
    const buttons = document.querySelectorAll('.time-btn');
  

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        selectedTime = parseInt(button.dataset.time);
      });
    });
  

    button.addEventListener('click', () => {
      if (locked || selectedTime === null) return;
  
      count += 1;
      btn_clicks.textContent = `Score: ${count}`;
  
      if (timerstarter) return;
  
      timerstarter = true;
      const start = Date.now();
  
      sigmainterval = setInterval(() => {
        const now = Date.now();
        const elapsed = now - start;
        const seconds = (elapsed / 1000).toFixed(3);
  
        timer.textContent = `Time: ${seconds}`;
        cps.textContent = `CPS: ${(count / seconds).toFixed(2)}`;
  
        if (elapsed >= selectedTime * 1000) {
          clearInterval(sigmainterval);
          locked = true;
  
          cps.textContent = `CPS: ${(count / seconds).toFixed(2)}`;
          timer.textContent = `Time: ${Math.floor((seconds * 1000) / 1000).toFixed(3)}`;
  
          setTimeout(() => {
            timer.textContent = "Time: 0.000";
            btn_clicks.textContent = "Score: 0";
            cps.textContent = "CPS: 0";
            timerstarter = false;
            locked = false;
            count = 0;
          }, 2000);
        }
  
      }, 10);
    });
  });
  