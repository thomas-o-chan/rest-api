# rest-api

This project contains 2 servers:

- A simple python server, providing 2 endpoints to access the data stored in a local JSON file.
- A simple User interface using React and TypeScript.

Each server module has its own readme for further details when working in this repo.

# Getting started

As this repo includes both a python and a vite server, there are multiple types of dependencies that must be installed. These instructions have been tested as a clean install on MacOS. While these instructions should work for all UNIX-based systems. 

These can be installed at the same time by running the script in `install.sh`.

```
zsh install
```

Both servers can be started in dev mode using:

```
zsh start-all.sh
```

Alternatively, start them in different terminals with:

```
cd api && zsh start-api-server.sh
```

and:

```
cd website && npm run dev
```

# Setup

I'm not that experienced with multi-language setups. This repo is therefore a hybrid of mono and classical repo structures. This could definitely be improved.

# Testing

The repo currently contains requirements lists for each module. It also contains some suggestions for manual tests on the API server and a simple unit test for a module in the website repo. It would be good to enhance these later and add integration test coverage in the future.

# Notes & Troubleshooting

- Since the user interface is very lightweight, the choice of React isn't ideal, as we have to load all of React to get the page to function. A compile-heavy, runtime-light option like SvelteJS would be preferable. However, as this was a mandated criteria it could not be changed.
- The python server is a local development server, and not a production implementation.
- The queried file is currently a committed JSON file. This is not practical for scalability and a storage method that is optimised for the queries it handles would be better.

- The start-all command starts both servers. This is simpler to get up and running but means any kill commands are only sent to the webserver and not the api server.
  To kill the server manually, find the `pid` by running:

```
lsof -Pi | grep LISTEN
```

This will return processes listening to ports. You can then find the one listening to port 3000, and kill it with:

```
kill -9 <pid>
```
