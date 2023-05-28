let currentPagePath=window.location.pathname
let currentPage=currentPagePath.substring(currentPagePath.lastIndexOf("/")+1)
$("nav a[href='"+currentPage+"']").css("background-color","yellow")