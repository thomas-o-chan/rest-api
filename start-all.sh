# Makes the whole setup simpler to start.
(cd api && zsh start.sh) & (cd website && npm run dev)
# See the readme for issues shutting down the server
