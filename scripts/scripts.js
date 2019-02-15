document.getElementById("refreshSubmit").addEventListener("click", function(event){
  event.preventDefault();
  var proxyURL = "https://cors-anywhere.herokuapp.com/";
  const url = "http://rsbuddy.com/exchange/summary.json";
  fetch(proxyURL + url)
  .then(function(response){
    return response.json();
    }).then(function(json){
      let results = "<div class=\"container\">";
      console.log(json);
      for(var key in json){
        if(json[key].overall_quantity > 10000){
          results += "<div class=\"row boxy-small\">";
          results += "<img src=\"http://services.runescape.com/m=itemdb_oldschool/1548934210902_obj_big.gif?id=" + json[key].id + "\" class=\"daily\">";
          results += "<p class=\"daily\"> <b>" + json[key].name + "</b>&nbsp;</p><br>";
          results += "<p class= \"daily\">Buy Price:&nbsp;" + json[key].buy_average + "&nbsp;</p>";
          results += "<p class= \"daily\">Sell Price:&nbsp;" + json[key].sell_average + "&nbsp;</p>";
          results += "<p class= \"daily\"><b>Profit:</b>&nbsp;" + (json[key].sell_average - json[key].buy_average) + "&nbsp;</p>";
          results += "</div>";
        }
      }
      results += "</div>";
      document.getElementById("results").innerHTML = results;
    });
});
