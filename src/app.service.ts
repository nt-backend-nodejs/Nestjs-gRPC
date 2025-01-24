import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

// gRPC request/response interfeyslari
interface SumArrayRequest {
  numbers: number[];
}

interface SumArrayResponse {
  result: number;
}

@Controller()
export class SumService {
  @GrpcMethod('SumService', 'SumArray')
  sumArray(data: SumArrayRequest): SumArrayResponse {
    console.log('Kelib tushgan massiv:', data.numbers);
    const result = data.numbers.reduce((acc, num) => acc + num, 0);
    return { result };
  }
}
