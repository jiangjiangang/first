from django.core.mail import send_mail
from django.template import loader

from AXF.settings import EMAIL_HOST, EMAIL_HOST_USER

HTTP_USER_EXIST = 901
HTTP_OK = 200
ALL_TYPE = '0'


def send_email_active(username, email, u_token):
    subject = '%s Active Email' % username
    message = 'message'
    from_email = EMAIL_HOST_USER
    recipient_list = [
        email,
    ]
    data = {
        'username': username,
        'active_url': 'http://127.0.0.1:8000/axf/active/?u_token=' + u_token,
    }

    html_message = loader.get_template('user/active.html').render(data)
    send_mail(subject=subject, message=message, from_email=from_email,
              recipient_list=recipient_list, html_message=html_message)
