# API
This module contains a simple python server that provides endpoints to query [a data file](actions.json).

# Getting started
To start the server, run:

```
zsh start.sh
```

# Tests
This module currently has no automated tests, although a framework of requirements are listed in [the test file](test.sh)
You can run tests manually using:

```
curl http://localhost:3000/action/5001
# (expect ["alert","warning"])
```

and

```
curl http://localhost:3000/codeword/thanks
# (expect 5002)
```

Variants thereof can be used to validate bad/empty input.
