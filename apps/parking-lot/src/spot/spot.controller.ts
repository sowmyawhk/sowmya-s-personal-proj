import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SpotService } from "./spot.service";
import { SpotControllerBase } from "./base/spot.controller.base";

@swagger.ApiTags("spots")
@common.Controller("spots")
export class SpotController extends SpotControllerBase {
  constructor(protected readonly service: SpotService) {
    super(service);
  }
}
