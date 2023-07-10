# select node as the base image
FROM 172.18.0.51:5000/node

# set the current working directory
# you can use any directory here
# if the directory does not exist, image will create the directory first
WORKDIR /src

# copy everything from 
# . (first param): current directory (of local machine) to 
# . (second param): current working directory of image (/src -> WORKDIR on line 5)
COPY . .

# expose port 4000 as the express server will listen on 4000
EXPOSE 5000

# run the express application
CMD node index.js