/* Generated from: 
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class StudioEncryptionConfiguration {
    KeyArn?: Value<string>
    KeyType!: Value<string>

    constructor(properties: StudioEncryptionConfiguration) {
        Object.assign(this, properties)
    }
}

export interface StudioProperties {
    AdminRoleArn: Value<string>
    DisplayName: Value<string>
    StudioName: Value<string>
    UserRoleArn: Value<string>
    StudioEncryptionConfiguration?: StudioEncryptionConfiguration
    Tags?: {[key: string]: Value<string>}
}

export default class Studio extends ResourceBase<StudioProperties> {
    static StudioEncryptionConfiguration = StudioEncryptionConfiguration

    constructor(properties: StudioProperties) {
        super('AWS::NimbleStudio::Studio', properties)
    }
}
