import { Module } from "@nestjs/common";
import { SpotModuleBase } from "./base/spot.module.base";
import { SpotService } from "./spot.service";
import { SpotController } from "./spot.controller";
import { SpotResolver } from "./spot.resolver";

@Module({
  imports: [SpotModuleBase],
  controllers: [SpotController],
  providers: [SpotService, SpotResolver],
  exports: [SpotService],
})
export class SpotModule {}
