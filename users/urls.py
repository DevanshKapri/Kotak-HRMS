from django.urls import path
from .views import EmployeeCreate, HRManagerCreate, BlacklistTokenUpdateView

app_name = "users"

urlpatterns = [
    path("signup/employee", EmployeeCreate.as_view(), name="employee_signup"),
    path("signup/hrm", HRManagerCreate.as_view(), name="hrmanager_signup"),
    path("logout/blacklist/", BlacklistTokenUpdateView.as_view(), name="blacklist"),
]
