const { Kafka } = require('kafkajs');
export async function produce() {
    const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9092'],
    })
    const producer = kafka.producer()

    await producer.connect()
    await producer.send({
    topic: 'sample',
    messages: [
        { value: 'Hello KafkaJS user!' },
    ],
    })

    await producer.disconnect()
}