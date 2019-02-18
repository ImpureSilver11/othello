deploy:
	yarn deploy
build:
	yarn build
server:
	python -m SimpleHTTPServer 3000
home:
	vue serve src/pages/Home.vue