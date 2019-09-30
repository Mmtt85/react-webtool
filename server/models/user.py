from sqlalchemy import *
from graphene import relay
from graphene_sqlalchemy import SQLAlchemyObjectType

from .session import Base

class UserModel(Base):
    __tablename__ = 'user'
    id = Column(String, primary_key=True)
    name = Column(String)
    email = Column(String)
    image = Column(String)
    etc = Column(String)

class User(SQLAlchemyObjectType):
    class Meta:
        model = UserModel
        interfaces = (relay.Node, )

class Connection(relay.Connection):
    class Meta:
        node = User
