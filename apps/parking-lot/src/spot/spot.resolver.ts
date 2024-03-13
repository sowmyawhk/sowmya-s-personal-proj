import * as graphql from "@nestjs/graphql";
import { SpotResolverBase } from "./base/spot.resolver.base";
import { Spot } from "./base/Spot";
import { SpotService } from "./spot.service";

@graphql.Resolver(() => Spot)
export class SpotResolver extends SpotResolverBase {
  constructor(protected readonly service: SpotService) {
    super(service);
  }
}
