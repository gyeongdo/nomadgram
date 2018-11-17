from django.db import models
from nomadgram.users import models as user_models
from taggit.managers import TaggableManager

# Create your models here.
class TimeStampModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True





class Image(TimeStampModel):
    
    """ Image Model """
    # file = ProcessedImageField(processors=[
    #                                Transpose()
    #                            ],
    #                            format='JPEG',
    #                            options={'quality': 50})
    file = models.ImageField()
    location = models.CharField(max_length=140)
    caption = models.TextField()
    creater = models.ForeignKey(
        user_models.User, null=True, related_name='images', on_delete=models.CASCADE)
    tags = TaggableManager()

    @property
    def like_count(self):
        return self.likes.all().count()

    @property
    def comment_count(self):
        return self.comments.all().count()

    @property
    def natural_time(self):
        return naturaltime(self.created_at)

    @property
    def is_vertical(self):
        if self.file.width < self.file.height:
            return True
        else:
            return False

    def __str__(self):
        return '{} - {}'.format(self.location, self.caption)

    class Meta:
        ordering = ['-created_at']


class Comment(TimeStampModel):

    message = models.TextField()
    # creater = models.ForeignKey(user_models.User, on_delete=models.CASCADE, null=True)
    image = models.ForeignKey(Image, on_delete=models.CASCADE, null=True, related_name='comments')

    def __str__(self):
        return self.message


class Like(TimeStampModel):

    """ Like Model """

    # creater = models.ForeignKey(user_models.User, on_delete=models.CASCADE, null=True)
    image = models.ForeignKey(Image, on_delete=models.CASCADE, null=True, related_name='likes')

    def __str__(self):
        return 'User:{} - Image Caption : {}'.format(self.creater.username, self.image.caption)
    
