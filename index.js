var width = 700,
    height = 580;

var svg = d3
    .select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

// On rajoute un groupe englobant toute la visualisation pour plus tard
var g = svg.append("g");

var projection = d3
    .geoConicConformal()
    .center([2.454071, 46.279229])
    .scale(2800);

// On definie une echelle de couleur
var color = d3
    .scaleQuantize()
    .range(["#edf8e9", "#bae4b3", "#74c476", "#31a354", "#006d2c"]);

var path = d3.geoPath().projection(projection);

d3.json("departements-version-simplifiee.geojson").then(function (json) {
    // Ajout des départements sur la carte
    g.selectAll("path")
      .data(json.features)
      .join("path")
      .attr("d", path)
      .attr("stroke", "#333") // Contour des départements
      .attr("stroke-width", 0.5)
      .attr("fill", "#74c476"); // Couleur de remplissage
  }).catch(function (error) {
    console.error("Erreur lors du chargement du GeoJSON :", error);
  });