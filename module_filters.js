$(document).ready(function() {
  if (window.location.pathname.includes("modules")) {

    $("div.header-bar").append("<div><ul id='module_filters' style='list-style-type: none; display: inline;'></ul></div>");

    var item_types = [{id: "wiki_page", label: "Pages", icon: "icon-document"},
                      {id: "assignment", label: "Assignments", icon: "icon-assignment"},
                      {id: "quiz", label: "Quizzes", icon: "icon-quiz"},
                      {id: "discussion_topic", label: "Discussion Topics", icon: "icon-discussion"},
                      {id: "external_url", label: "Links", icon: "icon-link"},
                      {id: "attachment", label: "Files", icon: "icon-paperclip"}];

    item_types.forEach(function(type) {
      var icon = `<i id="module_filter_${type['id']}" class="${type['icon']}" title="${type['label']}" style="color: green;"></i>`;

      $("ul#module_filters").append(`<li style="padding: 0 1em 0 0; display: inline-block;"><input type="checkbox" id="${type['id']}" name="${type['id']}" checked style="display: none;"> <label for="${type['id']}">${icon}</label></li>`);

      $(`#${type['id']}`).change(function() {
        if (this.checked == true) {
          $(`li.${type['id']}`).show();
          $(`#module_filter_${type['id']}`).css('color', 'green');
        }
        else {
          $(`li.${type['id']}`).hide();
          $(`#module_filter_${type['id']}`).css('color', '');
        }
      });
    });
  }
});
