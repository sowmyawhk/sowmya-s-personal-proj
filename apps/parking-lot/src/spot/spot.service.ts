import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SpotServiceBase } from "./base/spot.service.base";

@Injectable()
export class SpotService extends SpotServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
