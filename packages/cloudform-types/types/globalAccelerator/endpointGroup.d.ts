import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class PortOverride {
    ListenerPort: Value<number>;
    EndpointPort: Value<number>;
    constructor(properties: PortOverride);
}
export declare class EndpointConfiguration {
    EndpointId: Value<string>;
    Weight?: Value<number>;
    ClientIPPreservationEnabled?: Value<boolean>;
    constructor(properties: EndpointConfiguration);
}
export interface EndpointGroupProperties {
    ListenerArn: Value<string>;
    EndpointGroupRegion: Value<string>;
    EndpointConfigurations?: List<EndpointConfiguration>;
    TrafficDialPercentage?: Value<number>;
    HealthCheckPort?: Value<number>;
    HealthCheckProtocol?: Value<string>;
    HealthCheckPath?: Value<string>;
    HealthCheckIntervalSeconds?: Value<number>;
    ThresholdCount?: Value<number>;
    PortOverrides?: List<PortOverride>;
}
export default class EndpointGroup extends ResourceBase<EndpointGroupProperties> {
    static PortOverride: typeof PortOverride;
    static EndpointConfiguration: typeof EndpointConfiguration;
    constructor(properties: EndpointGroupProperties);
}
