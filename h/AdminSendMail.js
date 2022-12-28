// let receiver = document.querySelector("#gmail")
// let message = document.querySelector("#message")
// let namer = localStorage.getItem("Name");
// var SibApiV3Sdk = require('sib-api-v3-sdk');
// var defaultClient = SibApiV3Sdk.ApiClient.instance;

// // Configure API key authorization: api-key
// var apiKey = defaultClient.authentications['api-key'];
// apiKey.apiKey = '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';

// // Uncomment below two lines to configure authorization using: partner-key
// // var partnerKey = defaultClient.authentications['partner-key'];
// // partnerKey.apiKey = 'YOUR API KEY';

// var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

// var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); // SendSmtpEmail | Values to send a transactional email

// sendSmtpEmail = {
//     to: [{
//         email: receiver.value,
//         name: namer
        
//     }],
//     templateId: 59,
//     params: {
//         name: 'Botuns',
//         surname: 'Company'
//     },
//     headers: {
//         'X-Mailin-custom': 'custom_header_1:custom_value_1|custom_header_2:custom_value_2'
//     }
// };

// apiInstance.sendTransacEmail(sendSmtpEmail).then(function(data) {
//   console.log('API called successfully. Returned data: ' + data);
// }, function(error) {
//   console.error(error);
// });
// import emailjs from 'emailjs-com'
// import apiKeys from './apikeys'

// const sendEmail = e => {
//     e.preventDefault()
 
//     emailjs
//     .sendForm('gmail', apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
//     .then(
//       result => {
//         console.log(result.text)
//       },
//       error => {
//         console.log(error.text)
//       }
//     )
// }

// const form = document.querySelector('.form')
// form.addEventListener('submit',sendEmail)