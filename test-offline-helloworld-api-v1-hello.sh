export SLS_SERVICE_NAME=playground
export SLS_STAGE=dev
export SLS_API_GROUP=helloworld
export SLS_API_VERSION=v1
export SLS_API_GROUP_ID=$SLS_API_GROUP-api-$SLS_API_VERSION
export SLS_BASE_PATH=hello

export SLS_HOST="http://localhost:3000"
mocha test-scripts/functions/$SLS_API_GROUP_ID-$SLS_BASE_PATH.js
