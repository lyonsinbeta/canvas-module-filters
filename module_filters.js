$(document).ready(function() {
  if ($("div.context_module").length > 0) {

    $("div.header-bar").append("<div><ul id='module_filters' style='list-style-type: none; display: inline;'></ul></div>");

    var item_types = [{id: "wiki_page", label: "Pages", icon: "icon-document"},
                      {id: "assignment", label: "Assignments", icon: "icon-assignment"},
                      {id: "quiz", label: "Quizzes", icon: "icon-quiz"},
                      {id: "discussion_topic", label: "Discussion Topics", icon: "icon-discussion"},
                      {id: "external_url", label: "Links", icon: "icon-link"},
                      {id: "attachment", label: "Files", icon: "icon-paperclip"},
                      {id: "context_external_tool", label: "External Tools", icon: "icon-integrations"}];

    item_types.forEach(function(type) {
      if (type["id"] != "quiz") {
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
      }
      else {
        /* Makes the single Quiz filter also catch new Quizzes */
        var icon = `<i id="module_filter_${type['id']}" class="${type['icon']}" title="${type['label']}" style="color: green;"></i>`;

        $("ul#module_filters").append(`<li style="padding: 0 1em 0 0; display: inline-block;"><input type="checkbox" id="${type['id']}" name="${type['id']}" checked style="display: none;"> <label for="${type['id']}">${icon}</label></li>`);

        $(`#${type['id']}`).change(function() {
          if (this.checked == true) {
            $(`li.${type['id']}`).show();
            $("li.lti-quiz").show();
            $(`#module_filter_${type['id']}`).css('color', 'green');
          }
          else {
            $(`li.${type['id']}`).hide();
            $("li.lti-quiz").hide();
            $(`#module_filter_${type['id']}`).css('color', '');
          }
        });
      }
    });
  }
});
