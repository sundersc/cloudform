import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface FirewallDomainListProperties {
    Name?: Value<string>;
    Domains?: List<Value<string>>;
    DomainFileUrl?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class FirewallDomainList extends ResourceBase<FirewallDomainListProperties> {
    constructor(properties?: FirewallDomainListProperties);
}
