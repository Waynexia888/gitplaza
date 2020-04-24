async function test() {
    const Redis = require('ioredis')

    const redis = new Redis({
        port: 6379
    })

    await redis.setex('c', 10, 123)
    // await redis.set('c', 123)
    const keys = await redis.keys('*')
    // console.log(keys)
    console.log(await redis.get('c'))
}

test()
