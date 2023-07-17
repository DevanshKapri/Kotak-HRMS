from .views import EmployeeList, EmployeeDetail, EmployeeDetailUpdate, AnalyticsView

from django.urls import path

app_name = "analytics"

urlpatterns = [
    path("list/", EmployeeList.as_view(), name="employeelist"),
    path("detail/<int:pk>", EmployeeDetail.as_view(), name="employeedetails"),
    path(
        "update/<int:pk>", EmployeeDetailUpdate.as_view(), name="employeedetailsupdate"
    ),
    path("data/", AnalyticsView.as_view(), name="analyticsview"),
]
