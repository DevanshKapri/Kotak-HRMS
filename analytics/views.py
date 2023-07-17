import json
from rest_framework import generics
from users.models import Employee, HRManager, User
from .serializers import EmployeeSerializer, UserSerializer, EmployeeUpdateSerializer
from rest_framework.permissions import (
    SAFE_METHODS,
    AllowAny,
    IsAuthenticated,
    IsAuthenticatedOrReadOnly,
    BasePermission,
    IsAdminUser,
    DjangoModelPermissions,
)
from rest_framework import viewsets
from rest_framework import filters
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import filters
from django.db.models import Sum


class EmployeeWritePermission(BasePermission):
    message = "Editing is restricted to the HR Managers only."

    def has_object_permission(self, request, view, obj):

        if request.method in SAFE_METHODS:
            return True

        return obj.user.is_hr == True
        
class EmployeeList(generics.ListAPIView):
    # permission_classes = [IsAuthenticated, EmployeeWritePermission]
    serializer_class = UserSerializer
    queryset = User.objects.all()


class EmployeeDetail(generics.ListAPIView):
    serializer_class_Equity = UserSerializer
    serializer_class_Fno = EmployeeSerializer

    def get_queryset_Equity(self):
        id = self.kwargs.get("pk")
        return User.objects.filter(id=id)

    def get_queryset_Fno(self):
        id = self.kwargs.get("pk")
        return Employee.objects.filter(user_id=id)

    def list(self, request, *args, **kwargs):
        fno = self.serializer_class_Fno(self.get_queryset_Fno(), many=True)
        return Response({"employee": fno.data})


class EmployeeDetailUpdate(generics.RetrieveUpdateAPIView):
    serializer_class = EmployeeUpdateSerializer
    # permission_classes = [IsAuthenticated, EmployeeWritePermission]
    queryset = Employee.objects.all()

    def get_object(self, queryset=None, **kwargs):
        id = self.kwargs.get("pk")
        return get_object_or_404(Employee, user=id)


class AnalyticsView(generics.ListAPIView):
    def list(self, request, format=json):
        male = User.objects.filter(gender="male")
        female = User.objects.filter(gender="female")
        ma_ct = Employee.objects.filter(user__in=male, status="active").count()
        fa_ct = Employee.objects.filter(user__in=female, status="active").count()
        mr_ct = Employee.objects.filter(user__in=male, status="resigned").count()
        fr_ct = Employee.objects.filter(user__in=female, status="resigned").count()
        if fa_ct and fr_ct:
            active_ratio = ma_ct / fa_ct
            resigned_ratio = mr_ct / fr_ct
        else:
            active_ratio = 0
            resigned_ratio = 0

        salary_by_dept = (
            Employee.objects.values("intervention")
            .order_by("intervention")
            .annotate(total_salary=Sum("salary"))
        )

        return Response(
            {
                "active_gender_ration": active_ratio,
                "resigned_gender_ration": resigned_ratio,
                "salary_by_dept": salary_by_dept,
            }
        )
