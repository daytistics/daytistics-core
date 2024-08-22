# DJANGO IMPORTS
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
from daytistics.models import Activity
from django.views.decorators.http import require_GET


@require_GET
@login_required
def available_activities_view(request):

    response: str = ''

    for activity in request.user.activities.all():
        response += '<option value="' + str(activity.id) + '">' + activity.name + '</option>'

    for activity in Activity.objects.filter(is_global=True):
        response += '<option value="' + str(activity.id) + '">' + activity.name + '</option>'

    return HttpResponse(response)