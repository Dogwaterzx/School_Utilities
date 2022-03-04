//adds the inspect element (credit to Snowflake-Coder-H2o)


  var x = document.createElement("script");
  x.src = "https://cdn.jsdelivr.net/gh/Snowflake-Coder-H2o/devconsole@master/main.js";
  x.onload = alert("LoadedDeveloperConsole!");
  document.head.appendChild(x);
