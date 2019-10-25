from django.conf.urls import url

from app import views

urlpatterns = [
    url(r'^index/', views.index, name='index'),
    url(r'^home/', views.home, name='home'),
    url(r'^market/', views.market, name='market'),
    url(r'^cart/', views.cart, name='cart'),
    url(r'^register', views.register, name='register'),
    url(r'^checkuser/', views.check_user, name='check_user'),
    url(r'^login', views.login, name='login'),
    url(r'^mine/', views.mine, name='mine'),
    url(r'^logout/', views.logout, name='logout'),
    url(r'^active/', views.active, name='active'),
]
