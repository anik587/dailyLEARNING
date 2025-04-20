var aws = require('aws-sdk')

aws.config.update({
    region: "us-east-2",
    accessKeyId: "",
    secretAccessKey: ""
});

var sns = new aws.SNS();
sns.setSMSAttributes({
    attributes: { DefaultSMSType: "Transactional" }
},
function (error) {
    if (error) {
        console.log(error);
    }
});

function sendSms(phoneNumber, body) {
    console.log(`Sending SMS. Phone: ${phoneNumber}, body: ${body}`);
    var params = {
        Message: body,
        MessageStructure: 'string',
        PhoneNumber: phoneNumber
    };

    sns.publish(params, function (err, data) {
        if (err) {
            console.log(err, err.stack); // an error occurred
        }
        else {
            console.log(data);           // successful response
        }
    });
}

sendSms('8801717782151', 'testtudo');

module.exports = {
    sendSms: sendSms,
}