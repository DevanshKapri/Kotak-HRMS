from multiprocessing import managers
from pyexpat import model
from wsgiref import validate
from click import style
from rest_framework import serializers
from users.models import User, Employee, HRManager
from django.contrib.auth.hashers import make_password


class UserSerializer(serializers.ModelSerializer):
    """
    Currently unused in preference of the below.
    """

    # email = serializers.EmailField(required=True)
    # user_name = serializers.CharField(required=True)
    # password = serializers.CharField(min_length=8, write_only=True)

    class Meta:
        model = User
        fields = (
            "email",
            "username",
            "password",
            "is_hr",
            "is_employee",
            "gender",
            "phone_number",
        )
        # extra_kwargs = {"password": {"write_only": True}}

    # def create(self, validated_data):
    #     password = validated_data.pop("password", None)
    #     # as long as the fields are the same, we can just use this
    #     instance = self.Meta.model(**validated_data)
    #     if password is not None:
    #         instance.set_password(password)
    #     instance.save()
    #     return instance


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            "email",
            "username",
            "password",
            "is_employee",
            "gender",
            "phone_number",
        )
        extra_kwargs = {
            "password2": {"write_only": True},
        }

    def create(self, validated_data):
        password = validated_data.pop("password", None)
        # as long as the fields are the same, we can just use this
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        Employee.objects.create(user=instance)
        return instance

    # def create(self, validated_data):
    #     user = User(
    #         username=validated_data["username"],
    #         email=validated_data["email"],
    #         gender=validated_data["gender"],
    #         phone_number=validated_data["phone_number"],
    #     )
    #     password = validated_data.pop("password", None)
    #     password = make_password(password)
    #     user.set_password(password)
    #     user.is_employee = True
    #     user.save()
    #     Employee.objects.create(user=user)
    #     return user


class HRManagerSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("email", "username", "password", "is_hr", "gender", "phone_number")
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        password = validated_data.pop("password", None)
        # as long as the fields are the same, we can just use this
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        HRManager.objects.create(user=instance)
        return instance


class BlacklistSerializer(serializers.Serializer):

    refresh_token = serializers.Field(required=True)
