import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { grpcClientOptions } from '../grpc-client.options';
import { MydataController } from './mydata.controller';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'MY_DATA_PACKAGE',
                ...grpcClientOptions,
            },
        ]),
    ],
    controllers: [MydataController],
})
export class MydataModule {}
