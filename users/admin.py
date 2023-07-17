from django.contrib import admin
from users.models import User, Employee, HRManager, Training

from django.contrib.auth.admin import UserAdmin

from django.forms import TextInput, Textarea, CharField
from django import forms
from django.db import models


class UserAdminConfig(UserAdmin):
    model = User
    search_fields = ("email", "username")
    list_filter = (
        "email",
        "username",
        "is_active",
        "is_staff",
        "is_hr",
        "is_employee",
    )
    ordering = ("-email",)
    list_display = (
        "email",
        "username",
        "is_active",
        "is_staff",
        "is_hr",
        "is_employee",
    )
    fieldsets = (
        (None, {"fields": ("email", "username")}),
        ("Permissions", {"fields": ("is_staff", "is_active")}),
        ("Role", {"fields": ("is_hr", "is_employee")}),
    )
    formfield_overrides = {
        models.TextField: {"widget": Textarea(attrs={"rows": 20, "cols": 60})},
    }
    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": (
                    "email",
                    "username",
                    "password1",
                    "password2",
                    "is_active",
                    "is_staff",
                    "is_hr",
                    "is_employee",
                ),
            },
        ),
    )


admin.site.register(User, UserAdminConfig)
admin.site.register(Employee)
admin.site.register(HRManager)
admin.site.register(Training)
