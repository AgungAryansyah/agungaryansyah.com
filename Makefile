-include .env

VPS ?= $(VPS_USER)@$(VPS_HOST)
RSYNC_FLAGS = -avz --delete
RSYNC_ROOT = -avz --delete --rsync-path="sudo rsync"

build:
	bun run build

deploy-prod: build
	rsync $(RSYNC_FLAGS) build/ $(VPS):$(PROD_DIR)/
	rsync $(RSYNC_ROOT) nginx/agungaryansyah.com $(VPS):/etc/nginx/sites-enabled/
	ssh $(VPS) "sudo nginx -t && sudo nginx -s reload"

deploy-dev: build
	rsync $(RSYNC_FLAGS) build/ $(VPS):$(DEV_DIR)/
	rsync $(RSYNC_ROOT) nginx/dev.agungaryansyah.com $(VPS):/etc/nginx/sites-enabled/
	ssh $(VPS) "sudo nginx -t && sudo nginx -s reload"

nginx-reload:
	ssh $(VPS) "sudo nginx -t && sudo nginx -s reload"
