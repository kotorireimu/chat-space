json.name  @message.user.name
json.time  @message.created_at.to_s(:datetime)
json.content  @message.content
json.image  @message.image.url
