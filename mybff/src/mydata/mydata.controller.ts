import { Controller, Get, Inject, OnModuleInit, Param } from '@nestjs/common';
import {
    ClientGrpc,
} from '@nestjs/microservices';
import { Observable } from 'rxjs';
import {CallRequest, CallResponse} from './interface';

interface MydataService {
    call(req: CallRequest): Observable<CallResponse>;
}

@Controller('mydata')
export class MydataController implements OnModuleInit {
    private mydataService: MydataService;

    constructor(@Inject('MY_DATA_PACKAGE') private readonly client: ClientGrpc) {}

    onModuleInit() {
        this.mydataService = this.client.getService<MydataService>('Mydata');
    }

    @Get(':name')
    hello(@Param('name') name: string): Observable<CallResponse> {
        return this.mydataService.call({ name });
    }
}