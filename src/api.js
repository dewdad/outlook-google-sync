import AWS from 'aws-sdk';
import _ from 'lodash';

const getQueueUrl = queueName => new Promise((resolve, reject) => {
  const sqs = new AWS.SQS();
  sqs.getQueueUrl({ QueueName: queueName }, (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data.QueueUrl);
    }
  });
});

const fetchMessage = queueName =>
  getQueueUrl(queueName).then(url => new Promise((resolve, reject) => {
    const sqs = new AWS.SQS();
    sqs.receiveMessage({ QueueUrl: url }, (err, data) => {
      if (err) reject(err);
      else if (_.isEmpty(data.Messages)) reject('Token is empty');
      else resolve(data);
    });
  }));

const sendMessage = (queueName, message) => getQueueUrl(queueName).then(url => new Promise((resolve, reject) => {
  const sqs = new AWS.SQS();
  sqs.sendMessage({ QueueUrl: url, MessageBody: message }, (err, data) => {
    if (err) reject(err);
    else resolve(data);
  });
}));

const purgeQueue = queueName => getQueueUrl(queueName).then(url => new Promise((resolve, reject) => {
  const sqs = new AWS.SQS();
  sqs.purgeQueue({ QueueUrl: url }, (err, data) => {
    if (err) reject(err);
    else resolve(data);
  });
}));

const sendTopic = (topicArn, message) => new Promise((resolve, reject) => {
  const sns = new AWS.SNS();
  sns.publish({ TopicArn: topicArn, Message: message }, (err, data) => {
    if (err) reject(err);
    else resolve(data);
  });
});

export { sendTopic, sendMessage, fetchMessage, getQueueUrl, purgeQueue };