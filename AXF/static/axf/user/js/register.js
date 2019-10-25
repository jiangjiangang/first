$(function () {
    // 获取输入框对象
    var $username = $("#username_input");
    // 当输入框内容发生变化时执行
    $username.change(function () {
        // 获取输入框内容 并去掉空格
        var username = $username.val().trim();
        // 判断有输入内容执行
        if (username.length) {
            $.getJSON('/axf/checkuser/', {'username': username}, function (data) {
                console.log(data);
                var $username_info = $("#username_info");
                if (data['status'] === 200) {
                    $username_info.html("用户名可用").css("color", 'green');
                } else if (data['status'] === 901) {
                    $username_info.html("用户名已被占用").css("color", 'red');
                }
            })
        }
    })

    var $password_confirm_input = $("#password_confirm_input");

    $password_confirm_input.change(function () {
        var password_confirm = $password_confirm_input.val().trim();
        if (password_confirm.length) {
            var $password_confirm_info = $("#password_confirm_info");
            var $password_input = $("#password_input");
            var password = $password_input.val().trim();
            if (password_confirm === password) {
                $password_confirm_info.html("√").css("color", 'green');
            } else {
                $password_confirm_info.html("确认密码与密码不一致").css("color", 'red');
            }
        }

    })

})

function check() {
    var $username = $("#username_input");
    var username = $username.val().trim();

    if (!username) {
        return false
    }

    var username_info_color = $("#username_info").css('color');
    var password_confirm_info_color = $("#password_confirm_info").css('color');
    if (username_info_color === 'rgb(255, 0, 0)') {
        return false
    }
    if (password_confirm_info_color === 'rgb(255, 0, 0)') {
        return false
    }
    var $password_input = $("#password_input");
    var password = $password_input.val().trim();
    $password_input.val(md5(password));
    var $password_confirm_input = $("#password_confirm_input");
    var password_confirm = $password_confirm_input.val().trim();
    $password_confirm_input.val(md5(password_confirm));
    return true
}