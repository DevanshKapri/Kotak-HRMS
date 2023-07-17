import coreapi
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import status
from rest_framework.response import Response
from rest_framework import generics
from .serializers import (
    UserSerializer,
    EmployeeSerializer,
    HRManagerSerializer,
    BlacklistSerializer,
)
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import AllowAny
from rest_framework.schemas import AutoSchema


class EmployeeCreate(generics.CreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = EmployeeSerializer

    def post(self, request, *args, **kwargs):
        serializer = EmployeeSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class HRManagerCreate(generics.CreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = HRManagerSerializer

    def post(self, request, *args, **kwargs):
        serializer = HRManagerSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BlacklistTokenUpdateView(generics.CreateAPIView):
    permission_classes = [AllowAny]
    authentication_classes = ()
    serializer_class = BlacklistSerializer

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)
