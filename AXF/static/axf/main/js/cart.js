$(function () {

    $(".confirm").click(function () {
        console.log('change state');

        var $confirm = $(this);

        var $li = $confirm.parents('li');

        var cartid = $li.attr('cartid');

        $.getJSON('/axf/changecartstate/', {'cartid': cartid}, function (data) {
            console.log(data);
            if (data['status'] === 200) {
                if (data['c_is_select']) {
                    $confirm.find('span').find('span').html('√')
                } else {
                    $confirm.find('span').find('span').html('')
                }
            }

        })

    })

    $(".subShopping").click(function () {

        var $sub = $(this);

        var $li = $sub.parents('li');

        var cartid = $li.attr('cartid');

        $.getJSON('/axf/subshopping/', {'cartid': cartid}, function (data) {
            console.log(data)


            if (data['status'] === 200) {
                if (data['c_goods_num'] > 0) {
                    var $span = $sub.next('span');
                    $span.html(data['c_goods_num']);
                } else {
                    $li.remove();
                }
            }
        })

    })

    $(".all_select").click(function () {

        var $all_select = $(this);
        var select_list = [];
        var unselect_list = [];

        $(".confirm").each(function () {
            var $confirm = $(this);
            var cardid = $confirm.parents("li").attr("cartid");

            if ($confirm.find("span").find("span").html().trim()) {
                select_list.push(cardid);
            } else {
                unselect_list.push(cardid);
            }
        })
        if (unselect_list.length > 0) {
            $.getJSON("/axf/allselect", {"cart_list": unselect_list.join('#')}, function (data) {
                console.log(data);
                if (data['status'] === 200) {
                    $(".confirm").find("span").find("span").html('√');
                    $all_select.find("span").find("span").html('√');
                }
            })
        } else {
            if (select_list.length > 0) {
                $.getJSON("/axf/allselect", {"cart_list": unselect_list.join('#')}, function (data) {
                    console.log(data);
                    if (data['status'] === 200) {
                        $(".confirm").find("span").find("span").html('');
                        $all_select.find("span").find("span").html('');
                    }
                })
            }
        }

    })

})