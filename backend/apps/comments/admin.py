from django.contrib import admin
from apps.comments.models import Comment, CommentFeed
# Register your models here.

admin.site.register(Comment)
admin.site.register(CommentFeed)
