"use strict;"
$(document).ready(function() {
  console.log("Ready to do the work, Master.");

  var insertHtml = function(selector, html) {
    var targetElem = document.querySelector(selector);
    targetElem.innerHTML = html;
  };

  var html = "<p>This is dynamic content! Here is more! </p>";
  insertHtml('#queueStatus', html)

});

// IIFE - immediately invoked function expression
(function (global) {
  var dc = {};
  global.$dc = dc;
})(window);