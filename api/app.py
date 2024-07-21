import json
from flask import Flask, jsonify, request, make_response

file_name = 'actions.json'

app = Flask(__name__)

def cors_preflight_response():
    """Creates a response object and sets the headers on it. Useful for responding to preflight requests"""
    response = make_response()
    # TODO be stricter with origins/methods
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Headers", "*")
    response.headers.add("Access-Control-Allow-Methods", "*")
    return response

def get_actions(file: str) -> dict:
    """Returns all actions in the file_name file as a dictionary"""
    with open(file) as json_data:
        raw_data = json.load(json_data)
        json_data.close()
        return raw_data['actions']

# TODO handle string paths gracefully, rather than returning 404s
@app.route('/action/<int:codeword>', methods=['POST', 'GET', 'OPTIONS'])
def get_actions_by_codeword(codeword: int):
    if request.method == "OPTIONS":
        return cors_preflight_response()
    print('query by codeword: ' + str(codeword))
    all_actions = get_actions(file_name)
    ids = []
    for action in all_actions:
        if (action['codeword'] == codeword):
            ids.append(action['id'])
    print('actions for codeword: ' + str(ids))
    response = jsonify(ids)
    # TODO commonise the adding of headers to responses
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response, 200

@app.route('/codeword/<string:id>', methods=['POST', 'GET', 'OPTIONS'])
def get_codeword_by_id(id: str) -> str:
    if request.method == "OPTIONS":
        return cors_preflight_response()
    print('query by action: ' + id)
    all_actions = get_actions(file_name)
    for action in all_actions:
        if (action['id'] == id):
            print('codeword for id: ' + str(action['codeword']))
            # This assumes all ids are indeed unique, so returns the first entry and stops.
            # Ideally the data structure would enforce this, for example keying actions by their id
            response = make_response(str(action['codeword']))
            response.headers.add("Access-Control-Allow-Origin", "*")
            return response
    print('no matches for codeword')
    response = make_response('codeword not found')
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response, 404

# Handle calls to the parent routes
@app.route('/codeword', methods=['POST', 'GET', 'OPTIONS'])
def no_codeword_found() -> str:
    response = make_response('codeword not found')
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response, 404

@app.route('/action', methods=['POST', 'GET', 'OPTIONS'])
def no_actions_found() -> str:
    response = jsonify([])
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response, 200
