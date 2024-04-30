from flask.cli import AppGroup
from .users import seed_users, undo_users
from app.models import User

from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
        users = seed_users()  
        
@seed_commands.command('undo')
def undo():
    undo_users()