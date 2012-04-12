// umbfrm.removeBanner.user.js

// ==UserScript==
// @name          Umbraco Forums Banner Removal
// @description	  Removes the ghastly banner present throughout http://our.umbraco.org/forum/ pages
// @include       http://our.umbraco.org/forum
// @include       http://our.umbraco.org/forum/*

var ghastliness = document.getElementById("alertBar");
ghastliness.parentNode.removeChild(ghastliness);