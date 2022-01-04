const footerContents = document.createElement("div");

footerContents.innerHTML = '<nav class="footnav"><a href="../home.htm" class="navbarlinks">Course Home Page</a><a href="/index.htm" class="navbarlinks">Home Page</a><a href="categories.html" class="navbarlinks">Categories</a><a href="submit.html"class="navbarlinks">Submit</a><a href="vote.html" class="navbarlinks">Vote</a><a href="/winners.html" class="navbarlinks">Winners</a><a href="chatroom.html" class="navbarlinks">Chat Room</a><a href="/rules.html" class="navbarlinks">Rules</a></nav><p class="footquestions">Questions or concerns? <a class="questionsnav min" title="Click to send email" href="mailto:someone@email.com?subject=Project 4 ITWP1000&body=Dear J Joly,">Click here to send me a personal email</a></p>';

document.write(footerContents.innerHTML)
