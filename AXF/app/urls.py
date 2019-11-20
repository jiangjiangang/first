from django.conf.urls import url

from app import views

urlpatterns = [
    url(r'^home/', views.home, name='home'),
    url(r'^market/', views.market, name='market'),
    url(r'^marketwithparams/(?P<typeid>\d+)/(?P<childcid>\d+)/(?P<order_rule>\d+)/',
        views.market_with_params, name='market_with_params'),

    url(r'^cart/', views.cart, name='cart'),
    url(r'^register', views.register, name='register'),
    url(r'^checkuser/', views.check_user, name='check_user'),

    url(r'^login', views.login, name='login'),
    url(r'^mine/', views.mine, name='mine'),
    url(r'^logout/', views.logout, name='logout'),
    url(r'^active/', views.active, name='active'),

    url(r'^addtocart/', views.add_to_cart, name='add_to_cart'),
    url(r'^changecartstate/', views.change_cart_state, name='change_cart_state'),
    url(r'^subshopping/', views.sub_shopping, name='sub_shopping'),
    url(r'^allselect/', views.all_select, name='all_select'),
]
