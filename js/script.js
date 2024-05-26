function CalculateEclipse(Ss, Sd, Ms, Md) {

  var MunAPsize = 2 * Math.atan(Ms / (2 * Md));
  var SunAPsize = 2 * Math.atan(Ss / (2 * Sd));
  var Magnitude = MunAPsize / SunAPsize;
  return Magnitude
}
select1.addEventListener("click", f1);

function f1() {
  var Ec = document.getElementById("EclipseType").value

  if (Ec == "Earth") {
    var EM = CalculateEclipse(864400, 93752000, 2159, 238900)
    EM = Math.round(EM * 100) / 100
    document.getElementById("magnitude").innerHTML = "Magnitude: " + EM
  } else if (Ec == "MarsP") {
    var EM = CalculateEclipse(864400, 129350000, 14, 3700)
    EM = Math.round(EM * 100) / 100
    document.getElementById("magnitude").innerHTML = "Magnitude: " + EM
  } else if (Ec == "MarsD") {
    var EM = CalculateEclipse(864400, 129350000, 7, 23460)
    EM = Math.round(EM * 100) / 100
    document.getElementById("magnitude").innerHTML = "Magnitude: " + EM
  } else if (Ec == "JupiterI") {
    var EM = CalculateEclipse(864400, 583800000, 2263.8, 262000)
    EM = Math.round(EM * 100) / 100
    document.getElementById("magnitude").innerHTML = "Magnitude: " + EM
  } else if (Ec == "JupiterE") {
    var EM = CalculateEclipse(864400, 583800000, 1939.7, 417000)
    EM = Math.round(EM * 100) / 100
    document.getElementById("magnitude").innerHTML = "Magnitude: " + EM
  } else if (Ec == "JupiterG") {
    var EM = CalculateEclipse(864400, 583800000, 3273.5, 665000)
    EM = Math.round(EM * 100) / 100
    document.getElementById("magnitude").innerHTML = "Magnitude: " + EM
  } else if (Ec == "JupiterC") {
    var EM = CalculateEclipse(864400, 583800000, 2995.4, 1170000)
    EM = Math.round(EM * 100) / 100
    document.getElementById("magnitude").innerHTML = "Magnitude: " + EM
  } else if (Ec == "SaturnM") {
    var EM = CalculateEclipse(864400, 890800000, 246.31, 115000)
    EM = Math.round(EM * 100) / 100
    document.getElementById("magnitude").innerHTML = "Magnitude: " + EM
  } else if (Ec == "SaturnE") {
    var EM = CalculateEclipse(864400, 890800000, 313.3, 148000)
    EM = Math.round(EM * 100) / 100
    document.getElementById("magnitude").innerHTML = "Magnitude: " + EM
  } else if (Ec == "SaturnT") {
    var EM = CalculateEclipse(864400, 890800000, 659.9, 183000)
    EM = Math.round(EM * 100) / 100
    document.getElementById("magnitude").innerHTML = "Magnitude: " + EM
  } else if (Ec == "SaturnD") {
    var EM = CalculateEclipse(864400, 890800000, 697.68, 234500)
    EM = Math.round(EM * 100) / 100
    document.getElementById("magnitude").innerHTML = "Magnitude: " + EM
  } else if (Ec == "SaturnR") {
    var EM = CalculateEclipse(864400, 890800000, 949.21, 327500)
    EM = Math.round(EM * 100) / 100
    document.getElementById("magnitude").innerHTML = "Magnitude: " + EM
  } else if (Ec == "SaturnTi") {
    var EM = CalculateEclipse(864400, 890800000, 5150, 759000)
    EM = Math.round(EM * 100) / 100
    document.getElementById("magnitude").innerHTML = "Magnitude: " + EM
  } else if (Ec == "SaturnH") {
    var EM = CalculateEclipse(864400, 890800000, 83.9, 933000)
    EM = Math.round(EM * 100) / 100
    document.getElementById("magnitude").innerHTML = "Magnitude: " + EM
  } else if (Ec == "SaturnI") {
    var EM = CalculateEclipse(864400, 890800000, 912.79, 2213000)
    EM = Math.round(EM * 100) / 100
    document.getElementById("magnitude").innerHTML = "Magnitude: " + EM
  } else if (Ec == "SaturnP") {
    var EM = CalculateEclipse(864400, 890800000, 132.5, 8049668)
    EM = Math.round(EM * 100) / 100
    document.getElementById("magnitude").innerHTML = "Magnitude: " + EM
  } else {
    document.getElementById("text").innerHTML = "Keep in mind all inputs below must be all in the same unit of measurment."
    document.getElementById("ask1").innerHTML = "Eclipsed Star Size                 <input type=\"number\" id=\"SunSize\" />"
    document.getElementById("ask2").innerHTML = "Eclipsed Star Distance From Viewer <input type=\"number\" id=\"SunDis\" />"
    document.getElementById("ask3").innerHTML = "Eclipsing Moon Size                <input type=\"number\" id=\"MunSize\" />"
    document.getElementById("ask4").innerHTML = "Eclipsing Moon Distance From Viewer<input type=\"number\" id=\"MunDis\" />"
    document.getElementById("Buttonholder").innerHTML = "<button type=\"Button\" id=\"select2\">Calculate!</button>"
    select2.addEventListener("click", f2);
    function f2 () {
    var SSV = document.getElementById("SunSize").value
    var SDV = document.getElementById("SunDis").value
    var MSV = document.getElementById("MunSize").value
    var MDV = document.getElementById("MunDis").value
    var EM = CalculateEclipse(SSV, SDV, MSV, MDV)
    EM = Math.round(EM * 100) / 100
    document.getElementById("magnitude").innerHTML = "Magnitude: " + EM
    }
  }
}
