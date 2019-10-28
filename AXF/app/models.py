from django.db import models


# axf_wheel(img, name, trackid)


class MainWheel(models.Model):
    img = models.CharField(max_length=255)
    name = models.CharField(max_length=64)
    trackid = models.IntegerField(default=1)

    class Meta:
        db_table = 'axf_wheel'


class AXFUser(models.Model):
    u_username = models.CharField(max_length=32, unique=True)
    u_password = models.CharField(max_length=128)
    u_email = models.CharField(max_length=64, unique=True)
    u_icon = models.ImageField(upload_to='icon/%Y/%m/%d')
    is_active = models.BooleanField(default=False)
    is_delete = models.BooleanField(default=False)

    class Meta:
        db_table = 'axf_user'
