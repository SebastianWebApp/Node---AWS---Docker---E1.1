FROM node:22-bullseye
WORKDIR /red_social_2

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm","start"]