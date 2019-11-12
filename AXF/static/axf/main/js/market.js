$(function () {

    $("#all_types").click(function () {

        console.log("我被点了一下");

        var $all_types_container = $("#all_types_container");
        $all_types_container.show()

        var $all_type = $(this);
        var $span = $all_type.find("span").find("span");
        $span.removeClass("glyphicon glyphicon-chevron-down").addClass("glyphicon glyphicon-chevron-up")
        var $sort_rule_container = $("#sort_rule_container");
        $sort_rule_container.hide()
        var $sort_rule = $("#sort_rule")
        var $span_sort_rule = $sort_rule.find("span").find("span");
        $span_sort_rule.removeClass("glyphicon glyphicon-chevron-up").addClass("glyphicon glyphicon-chevron-down")

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
        var $all_types_container = $("#all_types_container");
        $all_types_container.hide()
        var $all_type = $("#all_types")
        var $span_all_types = $all_type.find("span").find("span");
        $span_all_types.removeClass("glyphicon glyphicon-chevron-up").addClass("glyphicon glyphicon-chevron-down")
    })

    $("#sort_rule_container").click(function () {
        var $sort_rule_container = $(this);
        $sort_rule_container.hide()
        var $sort_rule = $("#sort_rule")
        var $span = $sort_rule.find("span").find("span");
        $span.removeClass("glyphicon glyphicon-chevron-up").addClass("glyphicon glyphicon-chevron-down")
    })

    $(".subShopping").click(function () {
        console.log('sub');
        var $sub = $(this);
        var goodsid = $sub.attr('goodsid');
    })

    $(".addShopping").click(function () {
        console.log(('add'));
        var $add = $(this);
        var goodsid = $add.attr('goodsid');
        $.get('/axf/addtocart/', {'goodsid': goodsid}, function (data) {
            console.log(data);

            if (data['status'] === 302){
                window.open('/axf/login/', "_self");
            }

        })
    })
})