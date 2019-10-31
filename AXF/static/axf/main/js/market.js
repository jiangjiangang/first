$(function () {

    $("#all_types").click(function () {

        console.log("我被点了一下");

        var $all_types_container = $("#all_types_container");
        $all_types_container.show()

        var $all_type = $(this);
        var $span = $all_type.find("span").find("span");
        $span.removeClass("glyphicon glyphicon-chevron-down").addClass("glyphicon glyphicon-chevron-up")

    })

    $("#all_types_container").click(function () {

        var $all_types_container = $(this);
        $all_types_container.hide()

        var $all_type = $("#all_types")
        var $span = $all_type.find("span").find("span");
        $span.removeClass("glyphicon glyphicon-chevron-up").addClass("glyphicon glyphicon-chevron-down")

    })

    $("#sort_rule").click(function () {

        var $sort_rule_container = $("#sort_rule_container");
        $sort_rule_container.show()

        var $sort_rule = $(this);
        var $span = $sort_rule.find("span").find("span");
        $span.removeClass("glyphicon glyphicon-chevron-down").addClass("glyphicon glyphicon-chevron-up")
    })

})