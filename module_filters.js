$(document).ready(function() {
  if (window.location.pathname.includes("modules")) {
    $("div.header-bar").append("<ul id='module_filters' style='list-style-type: none;'></ul>");

    $("ul#module_filters").append("<li style='padding-right: 1em; display: inline-block;'><input type='checkbox' id='wiki_page' name='wiki_page' checked> <label for='wiki_page'>Pages</label></li>");
    $("ul#module_filters").append("<li style='padding-right: 1em; display: inline-block;'><input type='checkbox' id='assignment' name='assignment' checked> <label for='assignment'>Assignments</label></li>");
    $("ul#module_filters").append("<li style='padding-right: 1em; display: inline-block;'><input type='checkbox' id='quiz' name='quiz' checked> <label for='quiz'>Quizzes</label></li>");
    $("ul#module_filters").append("<li style='padding-right: 1em; display: inline-block;'><input type='checkbox' id='discussion_topic' name='discussion_topic' checked> <label for='discussion_topic'>Discussions</label></li>");
    $("ul#module_filters").append("<li style='padding-right: 1em; display: inline-block;'><input type='checkbox' id='external_url' name='external_url' checked> <label for='external_url'>Links</label></li>");
    $("ul#module_filters").append("<li style='padding-right: 1em; display: inline-block;'><input type='checkbox' id='attachment' name='attachment' checked> <label for='attachment'>Files</label></li>");

    $("#wiki_page").change(function() {
      if (this.checked == true) {
        $("li.wiki_page").show();
      }
      else {
        $("li.wiki_page").hide();
      }
    });

    $("#assignment").change(function() {
      if (this.checked == true) {
        $("li.assignment").show();
      }
      else {
        $("li.assignment").hide();
      }
    });

    $("#quiz").change(function() {
      if (this.checked == true) {
        $("li.quiz").show();
      }
      else {
        $("li.quiz").hide();
      }
    });

    $("#discussion_topic").change(function() {
      if (this.checked == true) {
        $("li.discussion_topic").show();
      }
      else {
        $("li.discussion_topic").hide();
      }
    });

    $("#external_url").change(function() {
      if (this.checked == true) {
        $("li.external_url").show();
      }
      else {
        $("li.external_url").hide();
      }
    });

    $("#attachment").change(function() {
      if (this.checked == true) {
        $("li.attachment").show();
      }
      else {
        $("li.attachment").hide();
      }
    });
  }
});
