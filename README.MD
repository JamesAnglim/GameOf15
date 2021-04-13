# INSTALLING DEPENDENCIES

pip install -r /path/to/requirements.txt


# Running locally

## LINUX

export FLASK_APP=application.py
export API_KEY=pk_e60451acfa0841b0ba1e7ea49abffa65
flask run

## WINDOWS

set FLASK_APP=application.py  
set API_KEY=pk_e60451acfa0841b0ba1e7ea49abffa65
flask run

# Deploying

Ensure Heroku CLI is installed and you have an account
To deploy latest changes, run:
git push heroku master
