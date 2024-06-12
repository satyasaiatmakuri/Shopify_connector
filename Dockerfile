FROM ubuntu as build

RUN apt-get update && apt-get install gnupg wget -y && \
  wget --quiet --output-document=- https://dl-ssl.google.com/linux/linux_signing_key.pub | gpg --dearmor > /etc/apt/trusted.gpg.d/google-archive.gpg && \
  sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' && \
  apt-get update && \
  apt-get install google-chrome-stable -y --no-install-recommends && \
  rm -rf /var/lib/apt/lists/*

# Set the timezone to Asia/Kolkata
RUN ln -sf /usr/share/zoneinfo/Asia/Kolkata /etc/localtime

RUN apt-get update
RUN apt install sudo -y
RUN apt install nano -y
RUN apt install curl -y
RUN apt install wget -y

RUN apt install nodejs -y
RUN apt install npm -y

RUN npm cache clean -f
RUN npm install -g n
RUN sudo n stable -y
RUN sudo n 18.20.0 -y
RUN npm install -g npm@9.5.1
RUN npm install --global yarn
RUN npm install --global apidoc

WORKDIR /app

COPY . .

RUN yarn install

CMD [ "yarn" , "serve" ]