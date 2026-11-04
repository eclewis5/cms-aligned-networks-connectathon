// Injects the shared header and footer so every page stays in sync.
(function () {
  var links = [
    ["index.html", "Overview"],
    ["scenarios.html", "Scenarios"],
    ["network-operators.html", "Networks"],
    ["participants-guide.html", "Providers, EHRs, Payers, Apps"],
    ["register.html", "Register"],
    ["directory.html", "Directory"],
    ["results.html", "Results"],
    ["share.html", "Share your experience"],
    ["observers.html", "Observers"]
  ];
  var here = location.pathname.split("/").pop() || "index.html";
  var nav = links.map(function (l) {
    return '<a href="' + l[0] + '"' + (l[0] === here ? ' aria-current="page"' : "") + ">" + l[1] + "</a>";
  }).join("");
  var header = document.createElement("header");
  header.className = "sitebar";
  header.innerHTML = '<div class="inner"><a class="brand" href="index.html">CMS Aligned Networks <span>Connectathon</span></a><nav aria-label="Connectathon">' + nav + "</nav></div>";
  document.body.insertBefore(header, document.body.firstChild);
  var footer = document.createElement("footer");
  footer.innerHTML = '<div class="inner">Community event for CMS Aligned Networks. Made-up data only: never use real health information. Test scenarios are derived from the CMS Health Tech Ecosystem General Availability (GA) Requirements; if this page and the current GA document differ, the GA document governs.</div>';
  document.body.appendChild(footer);
})();
