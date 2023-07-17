from abc import ABC
from django.shortcuts import render
import numpy as np
import pandas as pd
from .apps import MlApiConfig
from rest_framework.views import APIView
from rest_framework.response import Response
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from plot_metric.functions import BinaryClassification as BC
from sklearn.utils import resample
import os

# Create your views here.
class RetentionPrediction(APIView):
    def post(self, request):
        data = request.data
        user_name = data['user_name']
        email = data['email']
        phone_number = data['phone_number']
        year_of_birth = data['year_of_birth']
        intervention = data['intervention']
        is_hr = data['is_hr']
        is_employee = data['s_employee']
        eid = data['eid']
        level = data['level']
        date_of_offer = data['date_of_offer']
        date_of_joining = data['date_of_joining']
        marital_status = data['marital_status']
        gender = data['gender']
        branch = data['branch']
        salary = data['salary']
        median_salary = data['median_salary']
        diff_salary = data['diff_salary']

        model = MlApiConfig.model
        prediction_prob = model.predict([[user_name,email,phone_number,year_of_birth,intervention,is_hr,is_employee,eid,level,date_of_offer,date_of_joining,marital_status,gender,branch,salary,median_salary,diff_salary]])
        retention_prob = prediction_prob[0,1]
        response_dict = {"Probability of Retention" : retention_prob}
        return Response(response_dict, status=200)
        

# format

# user_name 	email 	phone_number 	year_of_birth 	intervention 	is_hr 	is_employee 	eid 	level 	date_of_offer 	date_of_joining 	marital_status 	gender 	branch 	salary 	median_salary 	diff_salary

# {
#     "user_name" : 'AB',
#     "email" : 'AB@email.com',
#     "phone_number" : '1339853789',
#     "year_of_birth" : '1994',
#     "intervention" : "18",
#     "is_hr" : "False",
#     "is_employee" :"True",
#     "eid" : "1191",
#     "level" : "3",
#     "date_of_offer" : "69",
#     "date_of_joining" :"22",
#     "marital_status":"0",
#     "gender":"0",
#     "branch":"3",
#     "salary":"61220",
#     "median_salary":"25000",
#     "diff_salary":"-36220",

# }

# import joblib
# import os

# loaded_model = joblib.load('/content/sklearn_model.sav')
# retention_prob = loaded_model.predict_proba([[0,0,2179258813,1957,10,False,True,1243,3,144,8,1,0,2,48737,25000,-237]])
# # retention_prob = loaded_model.predict_proba([[1,1]])
# print(retention_prob)

# [[0.49925031 0.50074969]]
