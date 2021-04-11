FROM node:10.13

RUN mkdir -p /home/user/app/frontend
WORKDIR /home/user/app/frontend

# RUN npm install -g @angular/cli
RUN npm i -g @angular/cli \
    && npm i -g typescript

# install app dependencies
COPY frontend/package.json /home/user/app/frontend
COPY frontend/package-lock.json /home/user/app/frontend

WORKDIR /home/user/app/frontend

RUN npm install

# add project
ADD frontend/ /home/user/app/frontend

# CMD ["npm", "run", "start"]

EXPOSE 4200

CMD ng serve --host 0.0.0.0
