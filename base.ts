import AWS from 'aws-sdk';
import AWSXRay from 'aws-xray-sdk';

const AWSWrapped = AWSXRay.captureAWS(AWS);

// AWSWrapped.config.update({
//     region: 'us-east-1',
// });

export default AWSWrapped;