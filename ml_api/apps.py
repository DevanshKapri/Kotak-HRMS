import os
import joblib
from django.apps import AppConfig
from django.conf import settings


class MlApiConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "ml_api"
    MODEL_FILE = os.path.join(settings.MODELS, "sklearn_model.sav")
    model = joblib.load(MODEL_FILE)
