from django.contrib import admin
from django.urls import path, re_path, include
from apps.accounts import views

urlpatterns = [
    path('login/', views.LoginView.as_view(), name='login'),
    path('logout/', views.LogoutView.as_view(), name='logout'),
    path('create/', views.ManagementUserViewSet.as_view(), name='new_user'),
    path('profile/', views.ManagementUserProfileViewSet.as_view(), name='profile'),
    path('homelessProfile/', views.ManagementHomelessProfileViewSet.as_view(), name='homeless-profile'),
    path('myHomelessProfile/', views.ManagementMyHomelessProfileViewSet.as_view(), name='my-homeless-profile'),
    path('homelessProfile/<int:id_homeless>', views.ManagementHomelessProfileViewSet.as_view(), name='homeless-profile-detail'),
    
    

]