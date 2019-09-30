from flask import Flask
from flask_graphql import GraphQLView
from flask_cors import CORS

from .models import session
from .schema import schema

app = Flask(__name__)
app.environment = 'development'
app.debug = True

app.add_url_rule(
    '/graphql',
    view_func=GraphQLView.as_view(
        'graphql',
        schema=schema,
        graphiql=True # for having the GraphiQL interface
    )
)

CORS(app)

@app.teardown_appcontext
def shutdown_session(exception=None):
    session.db_session.remove()

if __name__ == '__main__':
	app.run()