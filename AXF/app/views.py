import uuid
from django.contrib.auth.hashers import make_password, check_password
from django.core.cache import cache
from django.core.mail import send_mail
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from django.template import loader
from django.urls import reverse
from AXF.settings import MEDIA_KEY_PREFIX, EMAIL_HOST_USER
from app.models import AXFUser, MainWheel
from app.views_constant import HTTP_OK, HTTP_USER_EXIST, send_email_active


def index(request):
    return HttpResponse('index')


def mine(request):
    user_id = request.session.get('user_id')
    data = {
        'title': '我的',
        'is_login': False,
    }
    if user_id:
        user = AXFUser.objects.get(pk=user_id)
        data['is_login'] = True
        data['username'] = user.u_username
        data['icon'] = MEDIA_KEY_PREFIX + user.u_icon.url

    return render(request, 'main/mine.html', context=data)


def register(request):
    if request.method == 'GET':
        data = {
            'title': '注册',
        }
        return render(request, 'user/register.html', context=data)
    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')

        # 数据加密
        password = make_password(password)
        icon = request.FILES.get('icon')
        user = AXFUser()
        user.u_username = username
        user.u_email = email
        user.u_password = password
        user.u_icon = icon
        user.save()
        u_token = uuid.uuid4().hex
        cache.set(u_token, user.id, timeout=60 * 60 * 24)
        send_email_active(username, email, u_token)
        return redirect(reverse('axf:login'))


def login(request):
    if request.method == 'GET':
        data = {
            'title': '登录',
        }
        return render(request, 'user/login.html', context=data)
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        users = AXFUser.objects.filter(u_username=username)
        if users.exists():
            user = users.first()
            if check_password(password, user.u_password):
                request.session['user_id'] = user.id
                return redirect(reverse('axf:mine'))
        return redirect(reverse('axf:login'))


def check_user(request):
    username = request.GET.get('username')
    users = AXFUser.objects.filter(u_username=username)
    data = {
        'status': HTTP_OK,
        'msg': 'ok',
    }
    if users.exists():
        data['status'] = HTTP_USER_EXIST
        data['msg'] = 'User Already Exists'
    else:
        pass
    return JsonResponse(data=data)


def logout(request):
    request.session.flush()
    return redirect(reverse('axf:mine'))


def active(request):
    u_token = request.GET.get('u_token')
    user_id = cache.get(u_token)
    if user_id:
        user = AXFUser.objects.get(pk=user_id)
        user.is_active = True
        user.save()
        return redirect(reverse('axf:login'))
    return render(request, 'user/active_fail.html')


def home(request):
    main_wheel = MainWheel.objects.all()
    data ={
        'title': '首页',
        'main_wheel': main_wheel,
    }
    return render(request, 'main/home.html')


def market(request):
    return render(request, 'main/market.html')


def cart(request):
    return render(request, 'main/cart.html')
