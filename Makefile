APP_NAME = restapi
APP_NAME := $(APP_NAME)

build:
	docker build -t ${APP_NAME} -f Dockerfile .

clean:
	docker rmi -f ${APP_NAME}

run:
	docker run -d -it -p 3000:3000 ${APP_NAME}

all: build
