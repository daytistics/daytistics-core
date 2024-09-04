from django.urls import path
from . import views

app_name = "activities"

urlpatterns = [
    path("", views.get_activities_dashboard, name="list"),
    path("create", views.create_new_activity, name="create"),
]