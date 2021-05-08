# FROM node:10.13

# RUN mkdir -p /home/user/app/frontend
# WORKDIR /home/user/app/frontend

# # RUN npm install -g @angular/cli
# RUN npm i -g @angular/cli \
#     && npm i -g typescript

# # install app dependencies
# COPY frontend/package.json /home/user/app/frontend
# COPY frontend/package-lock.json /home/user/app/frontend

# WORKDIR /home/user/app/frontend

# RUN npm install

# # add project
# ADD frontend/ /home/user/app/frontend

# # CMD ["npm", "run", "start"]

# EXPOSE 4200

# CMD ng serve --port 4200 --host 0.0.0.0 --poll 1




# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:latest as build


RUN mkdir -p /home/user/app/frontend

# Set the working directory
WORKDIR /home/user/app/frontend

RUN npm i -g @angular/cli \
    && npm i -g typescript


COPY frontend/package.json /home/user/app/frontend
COPY frontend/package-lock.json /home/user/app/frontend

WORKDIR /home/user/app/frontend

# Install all the dependencies
RUN npm install

ADD frontend/ /home/user/app/frontend

WORKDIR /home/user/app/frontend

# Generate the build of the application
RUN npm run build


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build /home/user/app/frontend/dist/argon-design-system-angular/ /usr/share/nginx/html

# Expose port 80
EXPOSE 80
