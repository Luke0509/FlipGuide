document.getElementById("refreshSubmit").addEventListener("click", function(event){
  event.preventDefault();

  const url = "http://rsbuddy.com/exchange/summary.json";
  fetch(url, {'mode': 'no-cors'})
  .then(function(response){
    return response.json();
  }).then(function(json){
    let results = "<div class=\"container\">";
    for(let i = 0; i < json.list.length; i++){
      results += "<div class=\"row boxy-small\">";
      results += "<img src=\"http://services.runescape.com/m=itemdb_oldschool/1548934210902_obj_big.gif?id=" + json.list[i].id + "\" class=\"daily\">";
      results += "<p class=\"daily\">" + json.list[i].name + "</p>";
      results += "</div>";
    }
    results += "</div>";
    document.getElementById("results").innerHTML = results;
  });
});
