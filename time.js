    setTimeout(showTime, 3000);
    
    function showTime() {
      const today = new Date();
      let h = today.getHours();
      let m = today.getMinutes();
      m = checkTime(m);
      var x = document.getElementsByClassName('css-2efsh5-StyledSpan')[0] 
      if(x != null) {
        x.innerHTML =  h + ":" + m;
      }
      setTimeout(showTime, 60000);
    }

    function checkTime(i) {
      if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
      return i;
    }

// 60000 -> 60 sec