from django.urls import path

from .views import RetentionPrediction

urlpatterns = [
    path("retention/", RetentionPrediction.as_view(), name="retention_prediction"),
]
