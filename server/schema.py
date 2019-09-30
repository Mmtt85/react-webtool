import graphene
from graphene_sqlalchemy import SQLAlchemyConnectionField

from .models.user import User

class Query(graphene.ObjectType):
    user = graphene.relay.Node.Field(User)
    users = SQLAlchemyConnectionField(User)

schema = graphene.Schema(query=Query, types=[User])