from django.contrib import admin
from . import models 

# Register your models here.

@admin.register(models.Image)
class ImageAdmin(admin.ModelAdmin):
    
    list_display_links = (
        'location',
    )
    
    search_fields = (
        'location',
        'caption',
    )

    list_filter = (
        'location',
        'creater',
    )

    list_display = (
        'file',
        'location',
        'caption',
        'creater',
        'created_at',
        'updated_at',
    )


@admin.register(models.Like)
class LikeAdmin(admin.ModelAdmin):
    list_display = (
        # 'creater',
        'image',
        'created_at',
        'updated_at',
    )


@admin.register(models.Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = (
        'message',
        # 'creater',
        'image',
        'created_at',
        'updated_at',
    )


