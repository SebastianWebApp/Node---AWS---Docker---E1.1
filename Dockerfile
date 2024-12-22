FROM node:22-bullseye
WORKDIR /red_social_2

COPY . .

RUN npm install

EXPOSE 80

CMD ["npm","start"]
