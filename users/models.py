from secrets import choice
from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    PermissionsMixin,
    BaseUserManager,
)
from django.utils.translation import gettext_lazy as _


class CustomAccountManager(BaseUserManager):
    def create_superuser(self, email, username, password, **other_fields):

        other_fields.setdefault("is_staff", True)
        other_fields.setdefault("is_superuser", True)
        other_fields.setdefault("is_active", True)

        if other_fields.get("is_staff") is not True:
            raise ValueError("Superuser must be assigned to is_staff=True.")
        if other_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must be assigned to is_superuser=True.")

        return self.create_user(email, username, password, **other_fields)

    def create_user(self, email, username, password, **other_fields):

        if not email:
            raise ValueError(_("You must provide an email address"))

        email = self.normalize_email(email)
        user = self.model(email=email, username=username, **other_fields)
        user.set_password(password)
        user.save()
        return user


class User(AbstractBaseUser, PermissionsMixin):

    username = models.CharField(max_length=200, blank=True)
    email = models.EmailField(max_length=200, unique=True, blank=False)
    phone_number = models.CharField(max_length=15, blank=True)
    gender = models.CharField(default=None, null=True, max_length=100, blank=True)

    is_hr = models.BooleanField(default=False)
    is_employee = models.BooleanField(default=False)

    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    REQUIRED_FIELDS = [
        "username",
    ]

    USERNAME_FIELD = "email"

    objects = CustomAccountManager()

    class Meta:
        db_table = "user_details"

    def __str__(self):
        return self.email


class HRManager(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    hid = models.BigAutoField(primary_key=True)
    # intervention = models.CharField(max_length=200, default=None, blank=True, null=True)
    # salary = models.IntegerField(default=None)
    # branch = models.CharField(max_length=200, blank=False)
    def __str__(self):
        return self.user.email


class Employee(models.Model):
    # USER_STATUS_CHOICES = (
    #     (1, 'active'),
    #     (2, 'resigned'),
    #     (3, 'retired'),
    #     (4, 'rejected'),
    #     (5, 'unknown'),
    # )

    user = models.OneToOneField(
        User, on_delete=models.CASCADE, related_name="user_info"
    )
    emp_no = models.BigAutoField(primary_key=True)
    year_of_birth = models.IntegerField(default=None, blank=True, null=True)
    # manager = models.CharField(
    #     max_length=100
    # )
    level = models.CharField(
        max_length=100,
        default=None,
        blank=True,
        null=True,
    )
    # date_of_offer = models.DateField(auto_now_add=True)
    date_of_joining = models.DateField(auto_now_add=True)
    exit_date = models.DateField(
        null=True,
        default=None,
        blank=True,
    )
    status = models.CharField(
        null=True,
        default="unknown",
        max_length=100,
        blank=True,
    )
    marital_status = models.CharField(
        null=True,
        default="unmarried",
        max_length=100,
        blank=True,
    )
    intervention = models.CharField(max_length=200, default=None, blank=True, null=True)
    salary = models.IntegerField(default=None, blank=True, null=True)
    branch = models.CharField(max_length=200, null=True)

    class Meta:
        db_table = "employee_details"

    def __str__(self):
        return self.user.email


class Training(models.Model):
    title = models.CharField(max_length=100)
    published = models.DateField(auto_now_add=True)
    attendee = models.ForeignKey(Employee, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ["-published"]
