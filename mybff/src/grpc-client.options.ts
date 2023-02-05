import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
    transport: Transport.GRPC,
    options: {
        url: 'localhost:9002',
        package: 'mydata', // ['hero', 'hero2']
        protoPath: join(__dirname, './mydata/mydata.proto'), // ['./hero/hero.proto', './hero/hero2.proto']
    },
};