/**
 * AWS Lambda Default Function
 * Calls the function defined in /src/function.js
 *
 * This hander is used as a bridge to call the platform neutral
 * version in function.js. This script is put into the scr directory
 * when using publish.sh.
 *
 * @param event JSON provided by AWS.
 */
 exports.handler = (event, context, callback) => {
	
    let responseBody = (require('./function'))(event, context);

    var response = {
        "statusCode": 200,
        "headers": {},
        "body": JSON.stringify(responseBody),
        "isBase64Encoded": false
    };
	
	callback(null, response);
};