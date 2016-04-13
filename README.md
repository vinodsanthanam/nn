Install postgres locally
psql -U admin hobbydb
run all the required scripts

connect to psql on heroku (need to setup heroku client and access before this)
heroku pg:psql --app noisyn
run the same scripts

npm is used to install grunt, grunt dependencies, bower
bower is used for managing dependency like bourbon, neat, jquery
grunt task grunt-sass to convert scss to css, make sure includePaths has the bower_components folder included
grunt task watch is for local development
scss/main.scss has the mixin dependencies
grunt task grunt-bowercopy to copy required javascript files to public/scripts

go file is similar to tasks executed in Travis CI as part of before_install
.travis.yaml is the configuration file for travis
install travis client tool using brew and follow instructions to update api_key for heroku (before that create the application in heroku)
make sure skip_cleanup is true so that travis does not clean up files created from grunt.

.env is added to gitignore
env property is injected using CI during deployment
.env is for local config (i.e connecting to local postgres)
DATABASE_URL=postgres://admin:admin@localhost:5432/hobbydb
