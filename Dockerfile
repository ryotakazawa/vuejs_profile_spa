FROM node:lts

WORKDIR /app

RUN npm install -g npm && \
    npm install -g @vue/cli

EXPOSE 8080

CMD ["/bin/sh"]