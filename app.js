document.addEventListener('DOMContentLoaded', function() { 

      setTimeout(function() { 
        document.getElementById('btn-click').click(); 
      }, 2000); 
  })
  function doFunction() {
alert('Пошло Кино');
}
   


 <button id="btn-click" onclick="doFunction();">#</button>
    