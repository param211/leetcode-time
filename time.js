window.onload = function() {
    setTimeout(showTime, 3000);
    
    function showTime() {
      const today = new Date();
      let h = today.getHours();
      let m = today.getMinutes();
      m = checkTime(m);
      document.getElementsByClassName('css-2efsh5-StyledSpan')[0].innerHTML =  h + ":" + m;
      setTimeout(showTime, 60000);
    }

    function checkTime(i) {
      if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
      return i;
    }
};
