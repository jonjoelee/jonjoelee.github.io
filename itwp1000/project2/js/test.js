// const footer = document.createElement("footer");
const footerContents = document.createElement("div");
// footer.append(footerContents);

footerContents.innerHTML = '<nav><a href="../home.htm" class="footnavbarlinks">Course Home Page</a> | <a href="default.html" class="footnavbarlinks">Home Page</a> | <a href="briefhistory.html" class="footnavbarlinks">Breif History</a> | <a href="playoffs.html" class="footnavbarlinks">Playoffs</a> | <a href="superbowl.html" class="footnavbarlinks">SuperBowl</a></nav>';



console.log(footerContents)
// ^testing

document.write(footerContents.innerHTML)
// ^execution

// had it in a function originally but didnt want to be marked down if thats too much so i left it here for myself

// function footerFunc() {

// }
//  footerFunc();