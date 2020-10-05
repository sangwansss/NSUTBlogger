
  function myFunction1() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("showmore");
    var btnText = document.getElementById("loadmore");
    var moreText2 = document.getElementById("showmore2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Load More";
      moreText.style.display = "none";
      setTimeout(abc,500);
      moreText2.style.display = "inline";
      
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Load Less"; 
      moreText.style.display = "inline";
      
    }
  }

  function abc()
  {
    var moreText2 = document.getElementById("showmore2");
    moreText2.style.display = "none";
  }

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }
  
  

  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
        }
      }
      if (!e.target.matches('.dropbtn2')) {
        var myDropdown2 = document.getElementById("myDropdown2");
          if (myDropdown2.classList.contains('show')) {
            myDropdown2.classList.remove('show');
      
          }
        }
  }

 
 
  
   



  