from django.urls import path
from .views import ListTodo, DetailTodo, index

urlpatterns = [
    path('', index, name="index"),
    path('api/', ListTodo.as_view()),
    path('api/<int:pk>/', DetailTodo.as_view())
]