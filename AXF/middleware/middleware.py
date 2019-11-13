from django.http import JsonResponse
from django.shortcuts import redirect
from django.urls import reverse
from django.utils.deprecation import MiddlewareMixin

from app.models import AXFUser

REQUIRE_LOGIN_JSON = [
    '/axf/addtocart/',
]
REQUIRE_LOGIN = [
    '/axf/cart/',
]


class LoginMiddleware(MiddlewareMixin):
    def process_request(self, request):
        # 未登录返回json
        if request.path in REQUIRE_LOGIN_JSON:
            user_id = request.session.get('user_id')
            if user_id:
                try:
                    user = AXFUser.objects.get(pk=user_id)
                    request.user = user
                except:
                    # return redirect(reverse('axf:login'))
                    data = {
                        'status': 302,
                        'msg': 'user not avaliable'
                    }
                    return JsonResponse(data)
            else:
                # return redirect(reverse('axf:login'))
                data = {
                    'status': 302,
                    'msg': 'user not avaliable'
                }
                return JsonResponse(data)



        # 未登录重定向到登陆页面
        if request.path in REQUIRE_LOGIN:
            user_id = request.session.get('user_id')
            if user_id:
                try:
                    user = AXFUser.objects.get(pk=user_id)
                    request.user = user
                except:
                    return redirect(reverse('axf:login'))

            else:
                return redirect(reverse('axf:login'))
